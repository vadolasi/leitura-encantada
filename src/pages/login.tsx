import { useState } from "preact/hooks"
import { useNavigate } from "react-router"
import logo from "../assets/images/logo.png"

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
      <img src={logo} alt="Logo" class="w-1/2 mx-auto pt-5" />
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
