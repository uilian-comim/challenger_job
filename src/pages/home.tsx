import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { Carousel } from "components/Carousel";
import { DataProps } from "interfaces";
import { Content } from "components/Home/Content";

import firstImage from "assets/Images/First_Image.jpg";
import secondImage from "assets/Images/Second_Image.jpg";
import thirdImage from "assets/Images/Third_Image.jpg";
import fourthImage from "assets/Images/Fourth_Image.jpg";
import fifthImage from "assets/Images/Fifth_Image.jpg";
import sixthImage from "assets/Images/Sixth_Image.jpg";
import seventhImage from "assets/Images/Seventh_Image.jpg";
import { Aside } from "components/Aside";

const Home = function () {

   const values: DataProps[] = [
      {
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "10:45",
         imageSrc: firstImage,
         imageAlt: "First Image",
         informationText: "Produtos",
         informationTime: 4,
         onHigh: false
      },
      {
         category: "Internal",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "13:20",
         imageSrc: secondImage,
         imageAlt: "Second Image",
         informationText: "Contact Center",
         informationTime: 6,
         onHigh: true
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "12",
         imageSrc: thirdImage,
         imageAlt: "Third Image",
         informationText: "Estratégia e Modelo de Negócios",
         onHigh: false
      },
      {
         type: "podcast",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "14:35",
         imageSrc: fourthImage,
         imageAlt: "Fourth Image",
         informationText: "Ferramentas e Sistemas",
         onHigh: false
      },
      {
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "10:45",
         imageSrc: fifthImage,
         imageAlt: "Fifth Image",
         informationText: "Tecnologia da informação",
         onHigh: false
      },
      {
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "5",
         imageSrc: sixthImage,
         imageAlt: "Sixth Image",
         informationText: "Recursos Humanos",
         onHigh: false
      },
      {
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "16",
         imageSrc: seventhImage,
         imageAlt: "Seventh Image",
         informationText: "Treinamentos",
         onHigh: false
      },
      {
         type: "podcast",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "36:28",
         imageSrc: firstImage,
         imageAlt: "First Image",
         informationText: "Compliance",
         onHigh: false
      }
   ]

   const values1: DataProps[] = [
      {
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "06:32",
         imageSrc: firstImage,
         imageAlt: "First Image",
         informationText: "Seguro Auto",
         onHigh: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "15",
         imageSrc: secondImage,
         imageAlt: "Second Image",
         informationText: "Contact Center",
         onHigh: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "16",
         imageSrc: thirdImage,
         imageAlt: "Third Image",
         informationText: "Gestão Estratégica",
         onHigh: false
      },
      {
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "09:40",
         imageSrc: fourthImage,
         imageAlt: "Fourth Image",
         informationText: "Ferramentas e Sistemas",
         onHigh: false
      },
      {
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "10:45",
         imageSrc: fifthImage,
         imageAlt: "Fifth Image",
         informationText: "Produtos",
         informationTime: 4,
         onHigh: false
      },
      {
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "13:20",
         imageSrc: sixthImage,
         imageAlt: "Sixth Image",
         informationText: "Contact Center",
         informationTime: 6,
         onHigh: false
      },
      {
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "12",
         imageSrc: seventhImage,
         imageAlt: "Seventh Image",
         informationText: "Estratégia e Modelo de Negócios",
         onHigh: false
      },
      {
         type: "podcast",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "14:35",
         imageSrc: firstImage,
         imageAlt: "First Image",
         informationText: "Ferramentas e Sistemas",
         onHigh: false
      },
      {
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "13:20",
         imageSrc: sixthImage,
         imageAlt: "Sixth Image",
         informationText: "Contact Center",
         informationTime: 6,
         onHigh: false
      },
      {
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "12",
         imageSrc: seventhImage,
         imageAlt: "Seventh Image",
         informationText: "Estratégia e Modelo de Negócios",
         onHigh: false
      },
      {
         type: "podcast",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "14:35",
         imageSrc: firstImage,
         imageAlt: "First Image",
         informationText: "Ferramentas e Sistemas",
         onHigh: false
      }
   ]

   const values2: DataProps[] = [
      {
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "06:32",
         imageSrc: firstImage,
         imageAlt: "First Image",
         informationText: "Seguro Auto",
         onHigh: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "15",
         imageSrc: secondImage,
         imageAlt: "Second Image",
         informationText: "Contact Center",
         onHigh: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "16",
         imageSrc: thirdImage,
         imageAlt: "Third Image",
         informationText: "Gestão Estratégica",
         onHigh: false
      }
   ]

   const carousel = [
      {
         alt: "First Image",
         path: "/Images/First_Image.jpg"
      },
      {
         alt: "Second Image",
         path: "/Images/Second_Image.jpg"
      },
      {
         alt: "Third Image",
         path: "/Images/Third_Image.jpg"
      }
   ]


   return (
      <div className="Home">
         <Header />
         <div className="Home__Container">
            <Aside />
            <div className="container">
               <Menu />
               <Content firstTitle={true} title="Recomendados" values={values} />
               <p className="ViewMore">Ver mais</p>
               <Carousel slides={carousel} />
               <Content title="Você também pode gostar de:" values={values1} />
               <p className="ViewMore">Ver mais</p>
               <Content lastTitle={true} title="Veja também" values={values2} />
            </div>
         </div>
      </div>
   )
}

export default Home;