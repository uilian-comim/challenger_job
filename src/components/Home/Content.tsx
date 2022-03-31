import { DataArrayProps } from "interfaces";
import Image from "next/image"
import { AiOutlineRise } from "react-icons/ai";
import { BsClockHistory, BsFiles, BsHeadset } from "react-icons/bs";
import { CgCamera } from "react-icons/cg";

export const Content = function ({ values, title, firstTitle, lastTitle }: DataArrayProps) {
   const type = {
      video: <CgCamera />,
      slide: <BsFiles />,
      podcast: <BsHeadset />   
   }
   return (
      <>
         { firstTitle ? <p className="mainTitle">{title}</p> : !lastTitle && <p className="content-title">{title}</p> }
         { lastTitle && <p className="lastTitle">{title}</p> }
         <div className="Content__container">
            {
               values.map((value, index) => {
                  if (index < 3) {
                     return (
                        <div className="Content__item">
                           <div className="Content__item__image">
                              <Image src={value.imageSrc} alt={value.imageAlt} width={300} height={200} layout="responsive" />
                              { value.onHigh && <div className="onhigh"><AiOutlineRise /></div> }
                              <p className={value.category}>{value.category == "Confidential" ? "Confidencial" : "Interno"}</p>
                              <div className="type">
                                 { type[value.type] }
                                 <p>{value.quantity.includes(":") ? value.quantity : `${value.quantity} Slides`}</p>
                              </div>
                           </div>
                           <p className="text-content">{value.text.split(".")[0]}</p>
                           <div className="about">
                              <p>{value.informationText}</p>
                              { value.informationTime && <div><BsClockHistory /> <p> + {value.informationTime} min</p></div> }
                           </div>
                        </div>
                     )
                  } else {
                     return (
                        <div className="Content__item__additional">
                           <div className="Content__item__image">
                              <Image src={value.imageSrc} alt={value.imageAlt} width={300} height={200} layout="responsive" />
                              <div className="type">
                                 { type[value.type] }
                                 <p>{value.quantity.includes(":") ? value.quantity : `${value.quantity} Slides`}</p>
                              </div>
                           </div>
                           <p className="text-content">{value.text.split(".")[0]}</p>
                           <div className="about">
                              <p>{value.informationText}</p>
                              { value.informationTime && <div><BsClockHistory /> <p> + {value.informationTime} min</p></div> }
                           </div>
                        </div>
                     )
                  }
               })
            }
         </div>
      </>
   )
}