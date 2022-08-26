import React from 'react'
import '../styles/Header.css'
import Logo from './Logo'

const Header = () => {
  return (
    <header>
      <Logo />
      <div className="info">
        <div className="contacts">
          <a href="mailto:okoprom@gmail.com">okoprom@gmail.com</a>
          <a href="tel:+18007073101">+1 (800) 707-31-01</a>
        </div>
        <div>
          <span>Доставка и оплата</span>
          <span>Гарантия</span>
        </div>
      </div>
    </header>
  )
}

export default Header
