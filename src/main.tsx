import { render } from "preact"
import { Suspense } from "preact/compat"
import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import "./assets/css/index.css"
import "@unocss/reset/tailwind.css"
import "uno.css"
import "virtual:unocss-devtools"
import routes from "~react-pages"

const App = () => {
  return (
    <Suspense
      fallback={
        <div class="h-screen w-screen flex justify-center items-center">
          <span class="loading loading-spinner loading-lg"></span>
        </div>
      }
    >
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
