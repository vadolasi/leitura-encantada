import aula1 from "../assets/videos/AULA 4 5 DICAS PARA APRENDER A LER E ESCREVER.mp4"
import aula2 from "../assets/videos/AULA 5 3 DICAS ESSENCIAIS PARA O APRENDIZADO.mp4"
import aula3 from "../assets/videos/AULA 6 NAO COMETA ESSES ERROS COM SEU FILHO OU ALUNO.mp4"
import aula4 from "../assets/videos/AULA 7 COMO FUNCIONA A MENTE DAS CRIANÇAS.mp4"
import pdf1 from "../assets/pdfs/imprimirdesenhos-com-br-livrinho-alfabeto-para-colorir.pdf"
import pdf2 from "../assets/pdfs/livrinho-animais-para-colorir.pdf"
import pdf3 from "../assets/pdfs/livrinho-profissoes-para-colorir.pdf"
import pdf4 from "../assets/pdfs/livrinho-transporte-para-colorir.pdf"

export default () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center gap-5">
      <h1 class="text-3xl font-bold text-center">Videoaulas</h1>
      <video controls className="w-4/5">
        <source src={aula1} type="video/mp4" />
      </video>
      <video controls className="w-4/5">
        <source src={aula2} type="video/mp4" />
      </video>
      <video controls className="w-4/5">
        <source src={aula3} type="video/mp4" />
      </video>
      <video controls className="w-4/5">
        <source src={aula4} type="video/mp4" />
      </video>
      <h1 class="text-3xl font-bold text-center">Livros para colorir</h1>
      <a href={pdf1} download>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Alfabeto
        </button>
      </a>
      <a href={pdf2} download>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Animais
        </button>
      </a>
      <a href={pdf3} download>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Profissões
        </button>
      </a>
      <a href={pdf4} download>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Transportes
        </button>
      </a>
    </div>
  )
}
