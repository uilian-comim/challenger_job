import Link from "next/link"
import React from "react"

const Home = function () {
  return (
    <div className="Home__container">
      <div className="Home__container__screen">
        <h2>Bem vindo!</h2>
        <p>Para acessar a plataforma, continue abaixo:</p>
        <Link href='/login' passHref>
          <button>Entrar</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
