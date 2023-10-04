import { Link } from "react-router-dom"
import somAbelha from "../assets/audios/animais/ABELHA.mp3"
import somCachorro from "../assets/audios/animais/CACHORRO.mp3"
import somCobra from "../assets/audios/animais/COBRA.mp3"
import somElefante from "../assets/audios/animais/ELEFANTE.mp3"
import somJacare from "../assets/audios/animais/JACARÊ.mp3"
import somLeao from "../assets/audios/animais/LEÃO.mp3"
import somMacaco from "../assets/audios/animais/MACACO.mp3"
import somOvelha from "../assets/audios/animais/OVELHA.mp3"
import somPapagaio from "../assets/audios/animais/PAPAGAIO.mp3"
import somPato from "../assets/audios/animais/PATO.mp3"
import somPeixe from "../assets/audios/animais/PEIXE.mp3"
import somVaca from "../assets/audios/animais/VACA.mp3"
import imagemAbelha from "../assets/images/animais/abelha.png"
import imagemCachorro from "../assets/images/animais/cachorro.png"
import imagemCobra from "../assets/images/animais/cobra.png"
import imagemElefante from "../assets/images/animais/elefante.png"
import imagemJacare from "../assets/images/animais/jacare.png"
import imagemLeao from "../assets/images/animais/leao.png"
import imagemMacaco from "../assets/images/animais/macaco.png"
import imagemOvelha from "../assets/images/animais/ovelha.png"
import imagemPapagaio from "../assets/images/animais/papagaio.png"
import imagemPato from "../assets/images/animais/pato.png"
import imagemPeixe from "../assets/images/animais/peixe.png"
import imagemVaca from "../assets/images/animais/vaca.png"
import letterA from "../assets/audios/alfabeto/LETRA A.mp3"
import letterB from "../assets/audios/alfabeto/LETRA B.mp3"
import letterC from "../assets/audios/alfabeto/LETRA C.mp3"
import letterD from "../assets/audios/alfabeto/LETRA D.mp3"
import letterE from "../assets/audios/alfabeto/LETRA E.mp3"
import letterF from "../assets/audios/alfabeto/LETRA F.mp3"
import letterG from "../assets/audios/alfabeto/LETRA G.mp3"
import letterH from "../assets/audios/alfabeto/LETRA H.mp3"
import letterI from "../assets/audios/alfabeto/LETRA I.mp3"
import letterJ from "../assets/audios/alfabeto/LETRA J.mp3"
import letterK from "../assets/audios/alfabeto/LETRA K.mp3"
import letterL from "../assets/audios/alfabeto/LETRA L.mp3"
import letterM from "../assets/audios/alfabeto/LETRA M.mp3"
import letterN from "../assets/audios/alfabeto/LETRA N.mp3"
import letterO from "../assets/audios/alfabeto/LETRA O.mp3"
import letterP from "../assets/audios/alfabeto/LETRA P.mp3"
import letterQ from "../assets/audios/alfabeto/LETRA Q.mp3"
import letterR from "../assets/audios/alfabeto/LETRA R.mp3"
import letterS from "../assets/audios/alfabeto/LETRA S.mp3"
import letterT from "../assets/audios/alfabeto/LETRA T.mp3"
import letterU from "../assets/audios/alfabeto/LETRA U.mp3"
import letterV from "../assets/audios/alfabeto/LETRA V.mp3"
import letterW from "../assets/audios/alfabeto/LETRA W.mp3"
import letterX from "../assets/audios/alfabeto/LETRA X.mp3"
import letterY from "../assets/audios/alfabeto/LETRA Y.mp3"
import letterZ from "../assets/audios/alfabeto/LETRA Z.mp3"
import audioCerto from "../assets/audios/certo.mp3"
import audioErrado from "../assets/audios/errado.mp3"
import { useEffect, useState } from "preact/hooks"
import randomColor from "randomcolor"
import ConfettiExplosion from "react-confetti-explosion"

export default () => {
  const animais = ["abelha", "cachorro", "cobra", "elefante", "jacare", "leao", "macaco", "ovelha", "papagaio", "pato", "peixe", "vaca"]
  const sons = [somAbelha, somCachorro, somCobra, somElefante, somJacare, somLeao, somMacaco, somOvelha, somPapagaio, somPato, somPeixe, somVaca]
  const imagens = [imagemAbelha, imagemCachorro, imagemCobra, imagemElefante, imagemJacare, imagemLeao, imagemMacaco, imagemOvelha, imagemPapagaio, imagemPato, imagemPeixe, imagemVaca]
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"]
  const letters = [letterA, letterB, letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ]

  const [animalAtual, setAnimalAtual] = useState(0)
  const [animaisUsados, setAnimaisUsados] = useState([0])
  const [letras, setLetras] = useState<{ letra: string, cor: string, corEscura: string }[]>([])

  useEffect(() => {
    proximoAnimal()
  }, [])

  const darkColor = (color: string) => {
    let c = color.substring(1)
    let rgb = parseInt(c, 16)
    let r = (rgb >> 16) & 0xff
    let g = (rgb >> 8) & 0xff
    let b = (rgb >> 0) & 0xff
    r = Math.round(r * 0.8)
    g = Math.round(g * 0.8)
    b = Math.round(b * 0.8)
    let newColor = "rgb(" + r + "," + g + "," + b + ")"

    return newColor
  }

  const [isExploding, setIsExploding] = useState(false)
  const [rerender, setRerender] = useState(0)

  const gerarLetras = (animal?: number) => {
    const novoAnimal = animal ?? animalAtual
    const letraCerta = animais[novoAnimal][0]
    const letraErrada1 = alphabet.filter((letra) => letra !== letraCerta)[Math.floor(Math.random() * alphabet.length - 1)]
    const letraErrada2 = alphabet.filter((letra) => letra !== letraCerta && letra !== letraErrada1)[Math.floor(Math.random() * alphabet.length - 2)]

    const letras = [letraCerta, letraErrada1, letraErrada2]
    const cores = randomColor({ count: 3 })
    const coresEscuras = cores.map((cor) => darkColor(cor))

    const letrasOrdenadas: string[] = []
    const coresOrdenadas: string[] = []
    const coresEscurasOrdenadas: string[] = []

    while (letras.length > 0) {
      const index = Math.floor(Math.random() * letras.length)
      letrasOrdenadas.push(letras[index])
      coresOrdenadas.push(cores[index])
      coresEscurasOrdenadas.push(coresEscuras[index])
      letras.splice(index, 1)
      cores.splice(index, 1)
      coresEscuras.splice(index, 1)
    }

    setLetras(letrasOrdenadas.map((letra, index) => ({ letra, cor: coresOrdenadas[index], corEscura: coresEscurasOrdenadas[index] })))
  }

  function playAudio(audio: HTMLAudioElement){
    return new Promise(res => {
      audio.play()
      audio.onended = res
    })
  }

  const proximoAnimal = () => {
    const novoAnimal = Math.floor(Math.random() * animais.length)
    if (animaisUsados.includes(novoAnimal)) {
      proximoAnimal()
      return
    }
    setAnimalAtual(novoAnimal)
    setAnimaisUsados([...animaisUsados, novoAnimal])
    gerarLetras(novoAnimal)
    const audio = new Audio(sons[novoAnimal])
    audio.play()
  }

  const selecionarAnimal = async (letra: string) => {
    setRerender(Math.random())
    let audio = new Audio(letters[alphabet.indexOf(letra)])
    await playAudio(audio)
    if (letra === animais[animalAtual][0]) {
      setIsExploding(true)
      audio = new Audio(audioCerto)
      await playAudio(audio)
      setIsExploding(false)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      proximoAnimal()
    } else {
      audio = new Audio(audioErrado)
      audio.play()
    }
  }

  return (
    <>
      {isExploding && (
        <>
          <div className="hidden">{rerender}</div>
          <div className="fixed bottom-0 left-0">
            <ConfettiExplosion force={2} duration={5000} />
          </div>
          <div className="fixed bottom-0 right-0">
            <ConfettiExplosion force={2} duration={5000} />
          </div>
        </>
      )}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-12 bg-base-100 flex items-center px-3">
        <Link to="/">
          <div className="i-icon-park-back text-4xl"></div>
        </Link>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <img src={imagens[animalAtual]} alt={animais[animalAtual]} className="w-3/4 mx-auto" />
        <div className="grid grid-cols-3 p-5 gap-5 mt-10">
          {letras.map(({ letra, cor, corEscura }, index) => (
            <div key={index} class="card bg-base-100 border rounded-2xl border border-b border-b-8 border-1" style={{ backgroundColor: cor, borderColor: corEscura }} onClick={() => selecionarAnimal(letra)}>
              <div class="card-body flex items-center justify-center">
                <h2 class="card-title stitchlings-color text-3xl text-white">{letra}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

