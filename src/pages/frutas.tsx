import abacate from "../assets/images/frutas/abacate.webp"
import abacaxi from "../assets/images/frutas/abacaxi.png"
import banana from "../assets/images/frutas/banana.png"
import cereja from "../assets/images/frutas/cereja.webp"
import kiwi from "../assets/images/frutas/kiwi.png"
import limao from "../assets/images/frutas/limão.png"
import maca from "../assets/images/frutas/maçã.webp"
import mamao from "../assets/images/frutas/mamão.png"
import maracuja from "../assets/images/frutas/maracujá.png"
import melancia from "../assets/images/frutas/melancia.webp"
import morango from "../assets/images/frutas/morango.webp"
import pera from "../assets/images/frutas/pêra.webp"
import uva from "../assets/images/frutas/uva.webp"
import somAbacate from "../assets/audios/frutas/ABACATE.mp3"
import somAbacaxi from "../assets/audios/frutas/ABACAXÍ.mp3"
import somBanana from "../assets/audios/frutas/BANANA.mp3"
import somCereja from "../assets/audios/frutas/CEREJA.mp3"
import somKiwi from "../assets/audios/frutas/KIWI.mp3"
import somLimao from "../assets/audios/frutas/LIMÃO.mp3"
import somMaca from "../assets/audios/frutas/MAÇÃ.mp3"
import somMamao from "../assets/audios/frutas/MAMÃO.mp3"
import somMaracuja from "../assets/audios/frutas/MARACUJÁ.mp3"
import somMelancia from "../assets/audios/frutas/MELANCIA.mp3"
import somMorango from "../assets/audios/frutas/MORANGO.mp3"
import somPera from "../assets/audios/frutas/PÊRA.mp3"
import somUva from "../assets/audios/frutas/UVA.mp3"
import { darkColor } from "../utils"
import Top from "../components/Top"

export default () => {
  const frutas = [
    <img src={abacate} alt="Abacate" width={500} height={500} />,
    <img src={abacaxi} alt="Abacaxi" width={500} height={500} />,
    <img src={banana} alt="Banana" width={500} height={500} />,
    <img src={cereja} alt="Cereja" width={500} height={500} />,
    <img src={kiwi} alt="Kiwi" width={500} height={500} />,
    <img src={limao} alt="Limão" width={500} height={500} />,
    <img src={maca} alt="Maçã" width={500} height={500} />,
    <img src={mamao} alt="Mamão" width={500} height={500} />,
    <img src={maracuja} alt="Maracujá" width={500} height={500} />,
    <img src={melancia} alt="Melancia" width={500} height={500} />,
    <img src={morango} alt="Morango" width={500} height={500} />,
    <img src={pera} alt="Pêra" width={500} height={500} />,
    <img src={uva} alt="Uva" width={500} height={500} />
  ]
  const sons = [
    somAbacate,
    somAbacaxi,
    somBanana,
    somCereja,
    somKiwi,
    somLimao,
    somMaca,
    somMamao,
    somMaracuja,
    somMelancia,
    somMorango,
    somPera,
    somUva
  ]
  const nomes = [
    "Abacate",
    "Abacaxi",
    "Banana",
    "Cereja",
    "Kiwi",
    "Limão",
    "Maçã",
    "Mamão",
    "Maracujá",
    "Melancia",
    "Morango",
    "Pêra",
    "Uva"
  ]

  const colors = ["#f93993","#2270bf","#29bbe8","#d1fcab","#e53964","#b0b1f4","#f7d1b7","#b84ce0","#63e290","#fcf999","#ba682a","#f2c3b3","#f49acd"]

  const playSound = (nome: string) => {
    const audio = new Audio(sons[nomes.indexOf(nome)])
    audio.play()
  }

  return (
    <>
      <Top />
      <div className="grid grid-cols-3 gap-4 p-4 justify-center mt-12">
        {nomes.map((nome, index) => (
          <div key={index} class="card bg-base-500 border rounded-2xl aspect-square border border-b border-b-8 border-1" style={{ backgroundColor: colors[index], borderColor: darkColor(colors[index]) }} onClick={() => playSound(nome)}>
            <div class="card-body flex items-center justify-center">
              {frutas[index]}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
