import { useRouter } from "next/router";
import React, { useState } from "react";

import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';

const Login = function () {
   const [button, setButton] = useState(false);
   const router = useRouter();

   function handleSubmit(e: React.SyntheticEvent) {
      e.preventDefault();
      const target = e.target as typeof e.target & {
         login: { value: string };
         password: { value: string };
      };
      
      const login = target.login.value;
      const password = target.password.value;

      if (login != "" && password != "") {
         router.push("/home");
      } else {
         alert("Complete todos os campos");
      }
   }
   return (
      <form className='Login__container' onSubmit={handleSubmit}>
         <div></div>
         <div className='Login__container__screen'>
            <h2>Bem vindo!</h2>
            <div>
               <IoPersonCircleOutline />
               <input
                  name='login'
                  type='text'
                  placeholder="Nome de usuário"
                  onChange={
                     (e) => e.target.value.length > 0 ? setButton(true) : setButton(false)}
                  />
            </div>

            <div>
               <RiLockPasswordLine />
               <input
                  name='password'
                  type='password'
                  placeholder="Senha"
                  onChange={
                     (e) => e.target.value.length > 0 ? setButton(true) : setButton(false)}
                  />
            </div>

            <button
               type="submit"
               className={`${button ? "-active" : ""}`}
            >
               Logar
            </button>
         </div>
      </form>
   )
}

export default Login;