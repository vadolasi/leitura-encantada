import { useState } from "preact/hooks"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export default () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem("isLoggedIn", "true")

    navigate("/")
  }

  return (
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <Link to="/pais" class="text-center text-white text-sm font-bold mx-5 bg-blue-600 rounded shadow p-5 mb-20">
        Dicas para os pais
      </Link>
      <h1 class="text-3xl font-bold">Login</h1>
      <input
        type="text"
        class="border-2 border-black rounded-lg p-2 m-2"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        class="border-2 border-black rounded-lg p-2 m-2"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={() => login()}>
        Entrar
      </button>
    </div>
  )
}
