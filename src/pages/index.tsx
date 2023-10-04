import { Link } from "react-router-dom"
import abc from "../assets/images/abc.png"
import animais from "../assets/images/animais.png"

export default () => {
  return (
    <div class="grid grid-cols-2 p-5 gap-5">
      <Link to="/abecedario">
        <section class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <img src={abc} alt="abc" />
            <h1 class="card-title text-center">Alfabeto</h1>
          </div>
        </section>
      </Link>
      <Link to="/animais">
        <section class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <img src={animais} alt="abc" />
            <h1 class="card-title text-center">Animais</h1>
          </div>
        </section>
      </Link>
    </div>
  )
}
