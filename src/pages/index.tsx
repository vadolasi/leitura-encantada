import { Link } from "react-router-dom"
import abc from "../assets/images/abc.png"

export default () => {
  return (
    <div class="flex justify-center wrap p-5">
      <Link to="/abecedario">
        <section class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <img src={abc} alt="abc" />
            <h1 class="card-title text-center">Alfabeto</h1>
          </div>
        </section>
      </Link>
    </div>
  )
}
