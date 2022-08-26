import React from 'react'
import '../styles/Footer.css'
import Instagram from '../svg/Instagram'
import Youtube from '../svg/Youtube'
import Divider from './Divider'
import Logo from './Logo'

const Footer = () => {
  const products = [
    'Станки для разделки кабеля',
    'Сепараторы',
    'Станок для разделки теплообменников',
    'Разделка радиаторов',
    'Запасные части',
    'Другое'
  ]
  const info = [
    'Доставка и оплата',
    'Гарантия',
    'Служба контроля качества',
    'Наше производство',
    'О компании',
    'Контакты',
  ]
  return (
    <footer>
      <Logo />
      <Divider />
      <div className="main">
        <div className="contacts">
          <span>+1 (800) 707-31-01</span>
          <span>okoprom@gmail.com</span>
          <div className="links">
            <a className="noselect" href="https://www.whatsapp.com/">Whatsapp</a>
            <a className="noselect" href="https://web.telegram.org/">Telegram</a>
          </div>
        </div>
        <div className="about">
          <div>
            <span className="heading">Наша продукция</span>
            {products.map(product => {
              return <span className="link" key={product}>{product}</span>
            })}
          </div>
          <div>
            <span className="heading">Информация</span>
            {info.map(i => {
              return <span className="link" key={i}>{i}</span>
            })}
          </div>
        </div>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/okoprom"><Instagram /></a>
        <a href="https://www.youtube.com/channel/UCQ4TdwHUPEyRBkFo3nHby4A"><Youtube /></a>
        <span>Подписывайтесь на нас в социальных сетях</span>
      </div>
      <Divider />
      <div className="legal">
        <span>Интернет магазин "Окопром" © 2021 Все права защищены</span>
        <span>Политика конфиденциальности</span>
      </div>
    </footer>
  )
}

export default Footer
