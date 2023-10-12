import { FunctionComponent } from "preact"
import { Link } from "react-router-dom"

const Top: FunctionComponent = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-12 flex items-center px-3 bg-blue-400">
      <Link to="/">
        <div className="i-icon-park-back text-4xl"></div>
      </Link>
    </div>
  )
}

export default Top
