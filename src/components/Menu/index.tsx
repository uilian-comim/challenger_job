import { AiOutlineRise } from 'react-icons/ai';
import { BsHeadset } from 'react-icons/bs';
import { FiBookOpen } from 'react-icons/fi';
import { IoRocketOutline } from 'react-icons/io5';
import { CgCamera } from 'react-icons/cg';

export function Menu() {
   return (
      <div className="Menu__Container">
         <div className="Menu__Container__OnHigh">
            <AiOutlineRise />
            <p>Em alta:</p>
         </div>
         <div className="Menu__Container__Items">
            <div className="menu__items">
               <CgCamera />
               <p>Vídeos</p>
            </div>
            <div className="menu__items">
               <BsHeadset />
               <p>Podcasts</p>
            </div>
            <div className="menu__items">
               <FiBookOpen />
               <p>Artigos</p>
            </div>
            <div className="menu__items">
               <IoRocketOutline />
               <p>Apresentações</p>
            </div>
         </div>
      </div>
   )
}