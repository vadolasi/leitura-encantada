import circulo from "../assets/audios/formas/CÍRCULO.mp3"
import coracao from "../assets/audios/formas/CORAÇÃO.mp3"
import estrela from "../assets/audios/formas/ESTRELA.mp3"
import hezagono from "../assets/audios/formas/HEZÁGONO.mp3"
import losango from "../assets/audios/formas/LOSANGO.mp3"
import octogono from "../assets/audios/formas/OCTÓGONO.mp3"
import pentagono from "../assets/audios/formas/PENTÁGONO.mp3"
import quadrado from "../assets/audios/formas/QUADRADO.mp3"
import retangulo from "../assets/audios/formas/RETÂNGULO.mp3"
import trapezio from "../assets/audios/formas/TRAPEZIO.mp3"
import triangulo from "../assets/audios/formas/TRIÂNGULO.mp3"
import { darkColor, rgbStringToHex } from "../utils"
import Top from "../components/Top"

export default () => {
  const formas = [
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#f93993")))} d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#2270bf")))} d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#29bbe8")))} d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#d1fcab")))} d="m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9H6.8Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><rect fill={darkColor(rgbStringToHex(darkColor("#e53964")))} x="3" y="3" width="18" height="18" transform="rotate(45 12 12)"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#b0b1f4")))} d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#f7d1b7")))} d="M6 21L2 9l10-7l10 7l-4 12H6Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#b84ce0")))} d="M3 21V3h18v18H3Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#63e290")))} d="M2 20V4h20v16H2Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><polygon fill={darkColor(rgbStringToHex(darkColor("#fcf999")))} points="5 3 19 3 15 13 9 13"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill={darkColor(rgbStringToHex(darkColor("#ba682a")))} d="M1 21h22L12 2"/></svg>
  ]
  const sons = [circulo, coracao, estrela, hezagono, losango, octogono, pentagono, quadrado, retangulo, trapezio, triangulo]
  const nomes = ["Círculo", "Coração", "Estrela", "Hexágono", "Losango", "Octógono", "Pentágono", "Quadrado", "Retângulo", "Trapézio", "Triângulo"]

  const colors = ["#f93993","#2270bf","#29bbe8","#d1fcab","#e53964","#b0b1f4","#f7d1b7","#b84ce0","#63e290","#fcf999","#ba682a"]

  const playSound = (nome: string) => {
    const audio = new Audio(sons[nomes.indexOf(nome)])
    audio.play()
  }

  return (
    <>
      <Top />
      <div className="grid grid-cols-3 gap-4 p-4 justify-center mt-12">
        {nomes.map((nome, index) => (
          <div key={index} class="card bg-base-100 border rounded-2xl aspect-square border border-b border-b-8 border-1" style={{ backgroundColor: colors[index], borderColor: darkColor(colors[index]) }} onClick={() => playSound(nome)}>
            <div class="card-body flex items-center justify-center">
              {formas[index]}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
