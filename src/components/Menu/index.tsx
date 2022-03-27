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
            <div>
               <CgCamera />
            </div>
            <div>
               <BsHeadset />
            </div>
            <div>
               <FiBookOpen />
            </div>
            <div>
               <IoRocketOutline />
            </div>
         </div>
      </div>
   )
}