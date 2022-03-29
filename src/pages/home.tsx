import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { Carousel } from "components/Carousel";
import { DataProps } from "interfaces";
import { Content } from "components/Home/Content";

import firstImage from "assets/Images/First_Image.jpg";
import secondImage from "assets/Images/Second_Image.jpg";
import thirdImage from "assets/Images/Third_Image.jpg";

const Home = function () {

   const values: DataProps[] = [
      {
         title: "Recomendados",
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "10:45",
         imageSrc: firstImage,
         imageAlt: "First Image",
         lastContent: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "13:20",
         imageSrc: secondImage,
         imageAlt: "Second Image",
         lastContent: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "12",
         imageSrc: thirdImage,
         imageAlt: "Third Image",
         lastContent: true
      }
   ]

   const values1: DataProps[] = [
      {
         title: "Você também pode gostar de:",
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "10:45",
         imageSrc: firstImage,
         imageAlt: "First Image",
         lastContent: false
      },
      {
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "13:20",
         imageSrc: secondImage,
         imageAlt: "Second Image",
         lastContent: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "12",
         imageSrc: thirdImage,
         imageAlt: "Third Image",
         lastContent: true
      }
   ]

   const values2: DataProps[] = [
      {
         title: "Veja também:",
         category: "Internal",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "10:45",
         imageSrc: firstImage,
         imageAlt: "First Image",
         lastContent: false
      },
      {
         category: "Confidential",
         type: "video",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "13:20",
         imageSrc: secondImage,
         imageAlt: "Second Image",
         lastContent: false
      },
      {
         category: "Internal",
         type: "slide",
         text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates doloremque consequatur omnis tempore! Repudiandae nihil autem alias, maxime quod suscipit, inventore at minima dolorem exercitationem impedit ex nam ea illo!",
         quantity: "12",
         imageSrc: thirdImage,
         imageAlt: "Third Image",
         lastContent: false
      }
   ]

   
   return (
      <div className="Home">
         <Header />
         <div className="Home__Container">
            <Menu />
            <Content values={values} />
            <Carousel />
            <Content values={values1} />
            <Content values={values2} />
            {/* <MayAlsoLike />
            <SeeToo /> */}
         </div>
      </div>
   )
}

export default Home;