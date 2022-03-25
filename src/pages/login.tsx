import Link from "next/link";

import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = function () {
   return (
      <div className='Login__container'>
         <div className='Login__container__screen'>
            <h2>Bem vindo!</h2>
            <div>
               <IoPersonCircleOutline />
               <input type='text' placeholder='teste@none.com' />
            </div>

            <div>
               <RiLockPasswordLine />
               <input type='password' placeholder='•••••••' />
            </div>

            <Link href='/home' passHref>
               <button>Logar</button>
            </Link>
         </div>
      </div>
   )
}

export default Login;