import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import '../styles/Product.css'
import part1 from '../img/parts/1.png'
import part2 from '../img/parts/2.png'
import part3 from '../img/parts/3.png'
import part4 from '../img/parts/4.png'
import P1 from '../img/s2-3.png'
import P2 from '../img/sg-006-1.png'
import P3 from '../img/sg-006-2.png'
import Delivery from '../svg/Delivery'
import Guarantee from '../svg/Guarantee'
import YoutubeEmbed from './YoutubeEmbed'

const Product = () => {
  const navigate = useNavigate()
  const [ additOpt, setAdditOption ] = useState(0);
  const { id } = useParams()
  const usedId = Number(id);
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
  const moreProducts = [1, 1, 2, 0]
  const productDescr = [
    {
      name: "Диаметр обработки",
      value: "от 1,5 до 130мм"
    },
    {
      name: "Размеры",
      value: "90*68*120 см"
    },
    {
      name: "Мощность",
      value: "3 кВт 380 В"
    }
  ]
  const specifications = [
    {
      name: "Диапазон входа",
      value: "1-45 мм"
    },
    {
      name: "Размеры изделия",
      value: "63х37х48 см"
    },
    {
      name: "Вес изделия",
      value: "77 кг"
    },
    {
      name: "Среднее производство",
      value: "Свыше 500 кг"
    },
    {
      name: "Мощность двигателя",
      value: "1,5 кВт"
    },
    {
      name: "Напряжение",
      value: "220 Вольт"
    }
  ]
  const parts = [
    {
      name: "Звездочка для цепи",
      img: part1,
      price: "600"
    },
    {
      name: "Кнопка Стопа аварийная",
      img: part2,
      price: "500"
    },
    {
      name: "Рукоятка",
      img: part3,
      price: "200"
    },
    {
      name: "Нож дисковый",
      img: part4,
      price: "400"
    }
  ]
  useEffect(() => {
    if(!Number.isInteger(usedId) || id >= allProducts.length || id < 0) {
      navigate("/404", { replace: true })
    }
  }, [])
  if(!usedId)
    return <div></div>
  else
    return (
      <div id="product">
        <div className="card">
          <div className="primary">
            <h1>{allProducts[usedId].name}</h1>
            <div className="descr">
              {productDescr.map((i, ii) => {
                return <div key={ii}>
                  <p>{i.name}</p>
                  <p>{i.value}</p>
                </div>
              })}
            </div>
            <h2>209 000  ₽</h2>
            <div className="divider" />
            <div className="btns">
              <div className="noselect">Проконсультироваться</div>
              <div className="noselect">Добавить в корзину</div>
            </div>
          </div>
          <div className="secondary">
            <div className="preview">
              <img src={allProducts[usedId].img} alt={allProducts[usedId].name} />
              <div className="taglist">
                {allProducts[usedId].tags.map((t, it) => {
                  return <div
                    key={it}
                    className="noselect tag"
                    style={{backgroundColor: tagTypes[t].color}}
                  >{tagTypes[t].text}</div>
                })}
              </div>
            </div>
            <div className="phones">
              <span>Связаться со специалистом</span>
              <div>
                <span>+1 (800) 707-31-01</span>
                <span>+1 (963) 656-66-26</span>
              </div>
            </div>
          </div>
        </div>
        <div className="additional">
          <div className="menu">
            <div className="divider" />
            <div className="options">
              <div onClick={() => setAdditOption(0)} className={"noselect" + (additOpt === 0 ? " chosen" : "")}>Описание</div>
              <div onClick={() => setAdditOption(1)} className={"noselect" + (additOpt === 1 ? " chosen" : "")}>Характеристики</div>
              <div onClick={() => setAdditOption(2)} className={"noselect" + (additOpt === 2 ? " chosen" : "")}>Видео</div>
              <div onClick={() => setAdditOption(3)} className={"noselect" + (additOpt === 3 ? " chosen" : "")}>Запасные части</div>
            </div>
          </div>
          {additOpt === 0 && <div className="content description">
            <div className="text">
              <p>{`Универсальность этого станка состоит в том что на нем можно разделать не только обычные кабеля в пвх изоляции, но и бронированные кабеля до 45 мм диаметром. Это возможно за счет редуктора и небольшого оборота двигателя, ведь бронированные кабеля тяжелее прорезаются и нужно больше силы на то что бы протянуть кабель через отверстие. На станках же с ременной передачей и быстрой скоростью работы бронированный кабель просто-напросто застрянет в станке.`}</p>
              <p>{`На станке 7 отверстий первые два не только режут кабель но и давят. Остальные отверстия режут кабель с Двух сторон, что облегчает работу оператора. `}</p>
              <p>{`У станка есть амортизационные пружины которые давят на верхний вал. Во время работы, пропуская кабель через отверстия верхние валы приподнимается и прорезает изоляцию. Двумя барашками сверху можно регулировать силу давления и настроиться под определенную глубину изоляции кабеля.`}</p>
              <p>{`Установлены сменные дисковые ножи которые в случае необходимости можно легко заменить. Так же легко заменить ремни станка, это основные расходные материалы в работе со станком`}</p>
              <p>{`На нем есть три кнопки: Аварийный Стоп (сверху) - нужен для мгновенной остановки двигателя в случае если застрял кабель или перчатку оператора затянуло в отверстие, кнопка старта и кнопка стоп. Последние два нужно использовать в обычном режиме, Аварийный же только в крайнем случае иначе это привет к его быстрому износу.`}</p>
            </div>
            <div className="guarantees">
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
          </div>}
          {additOpt === 1 && <div className="content specifications">
            {specifications.map(s => {
              return <div key={s.name}>
                <p>{s.name}</p>
                <p>{s.value}</p>
              </div>
            })}
          </div>}
          {additOpt === 2 && <div className="content">
            <YoutubeEmbed embedId="X2JrvRSBaro" />
          </div>}
          {additOpt === 3 && <div className="content parts">
            {parts.map(p => {
              return <div key={p.name} className="part">
                <div className="main">
                  <div className="preview">
                    <img src={p.img} />
                  </div>
                  <span>{p.name}</span>
                </div>
                <div className="buy">
                  <span>{p.price} $</span>
                  <div>Купить</div>
                </div>
              </div>
            })}
          </div>}
        </div>
      </div>
    )
}

export default Product
