import { SlidesProps } from "interfaces";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";


export function Carousel({ slides }: SlidesProps) {
   return (
      <div className="carousel">
         <p className="carousel__title">Conteúdos especiais</p>
         <div className="carousel__container">
            {
               slides.map((slide, index) => {
                  if (index + 1 < slides.length) {
                     return (
                        <div className="Image__Container" key={index}>
                           <img src={slide.path} alt={slide.alt} />
                           <p className="firstText">Dicas de <span>carreira</span></p>
                           <span className="secondText">Nome Sobrenome</span>
                           <button className="button">Saiba mais</button>
                        </div>
                     )
                  } else {
                     return (
                        <div className="nextBackground">
                           <MdOutlineArrowForwardIos />
                           <div className="Image__Container" key={index}>
                              <img src={slide.path} alt={slide.alt} />
                              <p className="firstText">Dicas de <span>carreira</span></p>
                              <span className="secondText">Nome Sobrenome</span>
                              <button className="button">Saiba mais</button>
                           </div>
                        </div>
                     )
                  }
               })
            }
         </div>
      </div>
   )
}