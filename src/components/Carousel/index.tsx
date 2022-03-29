import Image from "next/image";

import fourthImage from "assets/Images/Fourth_Image.jpg";
import fifthImage from "assets/Images/Fifth_Image.jpg";

export function Carousel() {
   return (
      <div className="Carousel">
         <p>Conteúdos especiais</p>
         <div className="Carousel__Container">
            <div className="Image__Container">
               <Image src={fourthImage} alt="fourthImage" width={244} height={267} layout="fixed" />
               <p>Dicas de <span>carreira</span></p>
               <span>Nome Sobrenome</span>
               <button>Saiba mais</button>
            </div>
            <div className="Image__Container">
               <Image src={fifthImage} alt="fifthImage" width={244} height={267} layout="fixed" />
               <p>Do mil ao<span>milhão</span></p>
               <span>Nome Sobrenome</span>
               <button>Saiba mais</button>
            </div>
         </div>
      </div>
   )
}