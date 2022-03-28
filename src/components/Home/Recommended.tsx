import Image from "next/image"
import { BsClockHistory, BsFiles } from "react-icons/bs";
import { CgCamera } from "react-icons/cg";

import firstImage from "../../../public/Images/First_Image.jpg";
import secondImage from "../../../public/Images/Second_Image.jpg";
import thirdImage from "../../../public/Images/Third_Image.jpg";

export const Recommended = function () {
   const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, tempora laudantium et corporis autem deleniti necessitatibus. Atque molestiae reiciendis ea excepturi, distinctio fugiat eos, architecto praesentium ullam sit veritatis.".split(".");
   return (
      <div className="Recommended">
         <p>Recomendados</p>

         <div className="Image">
            <div className="Image__Container">
               <p className="Confidential">Confidencial</p>
               <Image src={firstImage} alt="First Image" width={300} height={224} layout="responsive" />
               <div>
                  <CgCamera />
                  <p>10:45</p>
               </div>
            </div>

            <p>{text[0]}...</p>
            <div className="about">
               <p>Produtos</p>
               <div>
                  <BsClockHistory />
                  <p>+ 4 min</p>
               </div>
            </div>
         </div>

         <div className="Image">
            <div className="Image__Container">
               <p className="Internal">Interno</p>
               <Image src={secondImage} alt="First Image" width={300} height={224} layout="responsive" />
               <div>
                  <CgCamera />
                  <p>13:20</p>
               </div>
            </div>

            <p>{text[0]}...</p>
            <div className="about">
               <p>Produtos</p>
               <div>
                  <BsClockHistory />
                  <p>+ 4 min</p>
               </div>
            </div>
         </div>

         <div className="Image">
            <div className="Image__Container">
               <p className="Internal">Interno</p>
               <Image src={thirdImage} alt="First Image" width={300} height={224} layout="responsive" />
               <div>
                  <BsFiles />
                  <p>12 Slides</p>
               </div>
            </div>

            <p>{text[0]}...</p>
            <div className="about">
               <p>Produtos</p>
               <div>
                  <BsClockHistory />
                  <p>+ 4 min</p>
               </div>
            </div>
         </div>
      </div>
   )
}