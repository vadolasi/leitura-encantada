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

    const isLoggedIn = !!localStorage.getItem("isLoggedIn")

    if (pathname !== "/login" && !isLoggedIn) {
      navigate("/login")
    }
  }, [pathname])

  useEffect(() => {
    if (pathname === "/login" || pathname === "/pais") return
    if (!ref.current?.paused) {
      if (pathname === "/login" || pathname === "/pais") {
        ref.current?.pause()
      }
    }
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
