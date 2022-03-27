import { Aside } from "components/Aside";
import { Header } from "components/Header";
import { Menu } from "components/Menu";

const Home = function () {
   return (
      <div className="Home__Container">
         <Header />
         <Menu />
      </div>
   )
}

export default Home;