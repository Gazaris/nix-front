import React from 'react'
import '../styles/Navbar.css'
import Search from '../svg/Search'
import CartIcon from '../svg/CartIcon'
import { Link } from 'react-router-dom'

const Navbar = () => {
  let ways = ['Наше производство', 'О компании', 'Контакты']
  return (
    <div id='navbar'>
      <div className="navigation">
        <Link className="btn" to="/">Каталог</Link>
        {ways.map(way => {
          return <span className="noselect btn" key={way}>{way}</span>
        })}
      </div>
      <div className="acc">
        <div className="icons">
          <div className="search"><Search /></div>
          <div className="cart-icon"><CartIcon /></div>
        </div>
        <div className="noselect btn">Запросить консультацию</div>
      </div>
    </div>
  )
}

export default Navbar
