import React from "react"
import { useRouter } from "next/router"

const Welcome = function () {
  const router = useRouter();
  return (
    <div className="Welcome__container">
      <div></div>
      <div className="Welcome__container__screen">
        <h2>Bem vindo!</h2>
        <p>Para acessar a plataforma, continue <span>abaixo:</span></p>
        <button onClick={() => router.push("/login")}>Entrar</button>
      </div>
    </div>
  )
}

export default Welcome;
