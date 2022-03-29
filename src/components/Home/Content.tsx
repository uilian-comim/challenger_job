import { DataArrayProps } from "interfaces";
import Image from "next/image"
import { BsClockHistory, BsFiles } from "react-icons/bs";
import { CgCamera } from "react-icons/cg";

export const Content = function ({ values }: DataArrayProps) {
   return (
      <div className="content">
         {
            values.map((value) => {
               return (
                  <>
                     { value.title && <p>{value.title}</p> }

                     <div className="Image">
                        <div className="Image__Container">
                           <p className={value.category}>{value.category == "Confidential" ? "Confidencial" : "Interno" }</p>
                           <Image src={value.imageSrc} alt={value.imageAlt} width={300} height={224} layout="responsive" />
                           <div>
                              { value.type == "video" ? <CgCamera /> : <BsFiles /> }
                              <p>{value.quantity.includes(":") ? value.quantity : `${value.quantity} Slides`}</p>
                           </div>
                        </div>

                        <p className="description">{value.text.split(".")[0]}...</p>
                        <div className="about">
                           <p>Produtos</p>
                           <BsClockHistory />
                           <p>+ 4 min</p>
                        </div>
                     </div>

                     { value.lastContent && <p className="view__more">Ver mais</p> }
                  </>
               )
            })
         }
      </div>
   );
}