import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/Catalog.css'
import Service from '../svg/Service'
import Delivery from '../svg/Delivery'
import Guarantee from '../svg/Guarantee'
import All from '../svg/All'
import Sale from '../svg/Sale'
import P1 from '../img/s2-3.png'
import P2 from '../img/sg-006-1.png'
import P3 from '../img/sg-006-2.png'
import Divider from './Divider'

const Catalog = () => {
  const options = [
    'Станки для разделки кабеля',
    'Сепараторы / Дробилки для кабеля',
    'Запасные части',
    'Станки для разделки теплообменников',
    'Разделка радиаторов',
    'Другое'
  ]
  const tagTypes = [
    {
      text: "-10%",
      color: "var(--tags-red)"
    },
    {
      text: "Броня",
      color: "var(--tags-blue)"
    },
    {
      text: "Пресс",
      color: "var(--tags-green)"
    }
  ]
  const allProducts = [
    {
      img: P1,
      tags: [1, 2],
      name: "S2-3 Автоматический мини"
    },
    {
      img: P2,
      tags: [0, 1, 2],
      name: "SG-006-1 Станок для разделки кабеля (Автоматический)"
    },
    {
      img: P3,
      tags: [],
      name: "SG-006-1 Станок для разделки кабеля (Автоматический)"
    }
  ]
  const baseAllProducts = [0, 1, 2, 1, 2, 0, 0, 1, 2]
  const discountedProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  const cableProducts = [1, 2, 2, 1, 1, 2, 2, 1, 1]
  const [ currBaseProducts, setCurrBaseProducts ] = useState([...baseAllProducts])
  const [ shownProducts, setShownProducts ] = useState([...baseAllProducts])
  const productDescr = [
    {
      name: "Вес",
      value: "13 кг"
    },
    {
      name: "Двигатель",
      value: "180 Вт"
    },
    {
      name: "Диам. обраб.",
      value: "от 1,5 до 25мм"
    }
  ]
  const moveChosen = i => {
    // Clearing the class from the chosen option
    document.getElementById('catalog')
      .getElementsByClassName('options')[0]
      .getElementsByClassName('chosen')[0]
      .classList.remove('chosen');

    // Making the new chosen active
    document.getElementById('catalog')
      .getElementsByClassName('options')[0]
      .children[i]
      .classList.add("chosen");

    // Changing shown products
    switch (i) {
      case 1:
        setShownProducts([...discountedProducts])
        setCurrBaseProducts([...discountedProducts])
        break
      case 2:
        setShownProducts([...cableProducts])
        setCurrBaseProducts([...cableProducts])
        break
      case 2:
        setShownProducts([...cableProducts])
        setCurrBaseProducts([...cableProducts])
        break
      default:
        setShownProducts([...baseAllProducts])
        setCurrBaseProducts([...baseAllProducts])
        break
    }
  }
  const showMore = () => {
    if(shownProducts.length < 126)
      setShownProducts(shownProducts.concat(currBaseProducts))
  }
  return (
    <div id="catalog">
      <Divider />
      <div className="guarantees">
        <div>
          <div className="icon"><Service /></div>
          <div className="main">
            <span className="heading">Всегда на связи</span>
            <span>Консультируем при покупке и в дальнейшем при эксплуатации нашего оборудования</span>
          </div>
        </div>
        <div>
          <div className="icon"><Delivery /></div>
          <div className="main">
            <span className="heading">Доставка</span>
            <span>Отправим товар транспортной компанией или почтовым отправлением (оплата при получении)</span>
          </div>
        </div>
        <div>
          <div className="icon"><Guarantee /></div>
          <div className="main">
            <span className="heading">Гарантия на всё</span>
            <span>Предоставляется гарантия сроком до 1 года со дня приобретения товара</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="categories">
          <h1>Вся продукция</h1>
          <div className="options">
            <div
              className="special chosen"
              onClick={() => moveChosen(0)}
            >
              <span className="noselect">Вся продукция</span>
              <All />
            </div>
            <div
              className="special"
              onClick={() => moveChosen(1)}
            >
              <span className="noselect">Скидки</span>
              <Sale />
            </div>
            {options.map((opt, i) => {
              return <div
                key={i}
                onClick={() => moveChosen(i + 2)}
              >
                <span className="noselect">{opt}</span>
              </div>
            })}
          </div>
        </div>
        <div className="list">
          <span>126 товаров</span>
          <div className="main">
            <div id="products">
              {shownProducts.map((i, ii) => {
                return <div key={ii} className="p-card">
                  <div className="preview">
                    <img src={allProducts[i].img} />
                    <div className="taglist">
                      {allProducts[i].tags.map((t, it) => {
                        return <div
                          key={it}
                          className="noselect tag"
                          style={{backgroundColor: tagTypes[t].color}}
                        >{tagTypes[t].text}</div>
                      })}
                    </div>
                  </div>
                  <div className="info">
                    <div className="descr">
                      <span className="heading">{allProducts[i].name}</span>
                      <div>
                        {productDescr.map(d => {
                          return <div key={d.name}>
                            <span className="name">{d.name}</span>
                            <span className="val">{d.value}</span>
                          </div>
                        })}
                      </div>
                    </div>
                    <div className="buy">
                      <div className="prices">
                        <span className="actual">34 990 $</span>
                        {allProducts[i].tags.includes(0) &&
                          <s className="discounted">24 450 ₽</s>}
                      </div>
                      <Link to={"/item/" + i}>Купить</Link>
                    </div>
                  </div>
                </div>
              })}
            </div>
            <button onClick={showMore}>Показать ещё</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
