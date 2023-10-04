import { Link } from "react-router-dom"
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

export default () => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const letters = [letterA, letterB, letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ]

  const colors = ["#f93993","#2270bf","#29bbe8","#d1fcab","#e53964","#b0b1f4","#f7d1b7","#b84ce0","#63e290","#fcf999","#ba682a","#36d330","#3784ad","#dd78e2","#dd37d5","#1dce1a","#2b8de2","#f46b69","#5752bf","#5dce44","#13af83","#8094e5","#7f0bc6","#83e5ea","#f2c3b3","#f49acd"]

  const playSound = (letter: string) => {
    const audio = new Audio(letters[alphabet.indexOf(letter)])
    audio.play()
  }

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

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-12 bg-base-100 flex items-center px-3">
        <Link to="/">
          <div className="i-icon-park-back text-4xl"></div>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 justify-center mt-12">
        {alphabet.map((letter, index) => (
          <div key={index} class="card bg-base-100 border rounded-2xl aspect-square border border-b border-b-8 border-1" style={{ backgroundColor: colors[index], borderColor: darkColor(colors[index]) }} onClick={() => playSound(letter)}>
            <div class="card-body flex items-center justify-center">
              <h2 class="card-title stitchlings-color text-3xl text-white">{letter}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
