import { FunctionComponent } from "preact";
import { Link } from "react-router-dom";
import { darkColor } from "../utils";

const Card: FunctionComponent<{ title: string, href: string, image: string, color: string, audio: string }> = ({ title, href, image, color, audio }) => {
  return (
    <Link to={href} onClick={() => {
      const audioObj = new Audio(audio)
      audioObj.play()
    }}>
      <section class="card bg-base-100 rounded-2xl border border-b border-b-8 border-1" style={{ backgroundColor: color, borderColor: darkColor(color) }}>
        <div class="card-body flex flex-col items-center justify-center">
          <img src={image} alt={title} />
          <h1 class="card-title text-center text-white tetx-bold">{title}</h1>
        </div>
      </section>
    </Link>
  )
}

export default Card
