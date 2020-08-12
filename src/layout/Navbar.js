import React from "react"
import {Link} from 'gatsby'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to={'/'} className={'logo'}>
          <img src={require('../images/golang-logo.png')} />
            <span>Golang</span>
        </Link>

        <div className="options">
          <Link to={'/publicacoes'} className={'option'}>publicações</Link>
          <Link to={'/'} className={'option'}>Videos</Link>
          <Link to={'/'} className={'option'}>Sobre nós</Link>
          <div className="search">
            <input />
              <i className="fas fa-search" />
          </div>
          <a href="https://t.me/joinchat/CS0GhBfKbyqZkpl31RRxJQ" className="icon"><i className="fab fa-telegram-plane" /></a>
          <a href="https://www.youtube.com/channel/UCxRoRvJi7NbC2boKAV70t_g" className="icon"><i className="fab fa-youtube" /></a>
        <a href="https://github.com/go-br/estudos" className="icon"><i className="fab fa-github" /></a>
        <button>programação</button>
      </div>

    </nav>
    </header>
  )
}

export default Navbar