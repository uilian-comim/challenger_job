import React from "react"
import { useRouter } from "next/router"

const Home = function () {
  const router = useRouter();
  return (
    <div className="Home__container">
      <div></div>
      <div className="Home__container__screen">
        <h2>Bem vindo!</h2>
        <p>Para acessar a plataforma, continue <span>abaixo:</span></p>
        <button onClick={() => router.push("/login")}>Entrar</button>
      </div>
    </div>
  )
}

export default Home
