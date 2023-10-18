import abc from "../assets/images/abc.png"
import animais from "../assets/images/animais.png"
import formas from "../assets/images/formas.png"
import cores from "../assets/images/cores.png"
import Card from "../components/Card"
import logo from "../assets/images/logo.png"
import conhecerAlfabeto from "../assets/audios/CONHEÇA O ALFABETO.mp3"
import conhecerAnimais from "../assets/audios/CONHEÇA OS ANIMAIS.mp3"
import conhecerFormas from "../assets/audios/CONHEÇA FORMAS GEOMETRICAS.mp3"
import conhecerCores from "../assets/audios/CONHEÇA AS CORES.mp3"

export default () => {
  return (
    <div>
      <img src={logo} alt="Logo" class="w-1/2 mx-auto pt-5" />
      <div class="grid grid-cols-2 p-5 gap-5">
        <Card href="/abecedario" image={abc} title="Alfabeto" color="#60d7f2" audio={conhecerAlfabeto} />
        <Card href="/animais" image={animais} title="Animais" color="#023c8c" audio={conhecerAnimais} />
        <Card href="/formas" image={formas} title="Formas" color="#b84ce0" audio={conhecerFormas} />
        <Card href="/cores" image={cores} title="Cores" color="#1dce1a" audio={conhecerCores} />
      </div>
    </div>
  )
}
