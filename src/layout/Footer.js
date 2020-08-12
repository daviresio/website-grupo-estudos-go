import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="first-part">
        <h1>Grupo de estudos</h1>
        <h2>Golang</h2>
      </div>
      <div className="second-part">
        <div className="links">
          <Link to={"/"}>termos</Link>
          <Link to={"/"}>privacidade</Link>
          <Link to={"/"}>contato</Link>
        </div>
        <div className="comentario">
          <span>Feito com muito </span> <i className="fas fa-heart"/> <span> pela comunidade</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer