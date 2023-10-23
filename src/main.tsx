import { render } from "preact"
import { Suspense } from "preact/compat"
import { useEffect, useRef } from "preact/hooks"
import { BrowserRouter as Router, useLocation, useNavigate, useRoutes } from "react-router-dom"
import "./assets/css/index.css"
import "@unocss/reset/tailwind.css"
import "uno.css"
import "virtual:unocss-devtools"
import routes from "~react-pages"
import audioFundo from "./assets/audios/fundo.mp3"

const App = () => {
  const ref = useRef<HTMLAudioElement>(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === "/login" || pathname === "/pais") {
      const audio = ref.current!
      audio.pause()
      audio.currentTime = 0
    }

    const isLogin = !!localStorage.getItem("isLogin")
    const userType = localStorage.getItem("userType")

    if (pathname !== "/login" && !isLogin) {
      navigate("/login")
    }

    if (isLogin) {
      if (userType === "children" && pathname == "/pais") {
        navigate("/")
      } else if (userType === "parents" && pathname === "/pais") {
        navigate("/pais")
      }
    }
  }, [pathname])

  useEffect(() => {
    if (pathname === "/login" || pathname === "/pais") return
    const audio = ref.current!
    audio.volume = 0.4
    document.addEventListener("click", () => {
      if (!audio.paused) return
      audio.addEventListener("ended", () => {
        audio.currentTime = 0
        audio.play()
      }, false)
      audio.play()
    })
  }, [ref])

  return (
    <Suspense
      fallback={
        <div class="h-screen w-screen flex justify-center items-center">
          <span class="loading loading-spinner loading-lg"></span>
        </div>
      }
    >
      <audio className="hidden" src={audioFundo} ref={ref}></audio>
      {useRoutes(routes)}
    </Suspense>
  )
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")!
)
