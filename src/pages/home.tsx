import { Aside } from "components/Aside";
import { Header } from "components/Header";
import { Menu } from "components/Menu";
import { Recommended } from "components/Home/Recommended";
import { Carousel } from "components/Carousel";
import { MayAlsoLike } from "components/Home/MayAlsoLike";
import { SeeToo } from "components/Home/SeeToo";

const Home = function () {

   return (
      <div className="Home">
         <Header />
         <Menu />
         <div className="Home__Container">
            <Recommended />
            <p className="view__more">Ver mais</p>
            <Carousel />
            <MayAlsoLike />
            <p className="view__more">Ver mais</p>
            <SeeToo />
         </div>
      </div>
   )
}

export default Home;