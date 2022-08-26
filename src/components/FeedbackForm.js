import React, { useState } from 'react'
import '../styles/FeedbackForm.css'

const FeedbackForm = () => {
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  const handleSubmit = (e) => {
    e.preventDefault()
    let response = `Feedback sent!
    Name: ${name}
    Phone: ${phone}`
    if(email !== '') response += `\nEmail: ${email}`
    alert(response)
  }
  return (
    <div id="feedback-form">
      <div className="info">
        <h1>Будем рады ответить на все интересующие вопросы</h1>
        <p>Оставьте заявку и мы вам вскоре позвоним и проконсультируем
        по всем интересующим вопросам</p>
      </div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          name="phone"
          placeholder="+1 (___) ___ __ __"
          pattern={/^[+]?[0-9]{8,}$/}
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail (необязательно)"
          pattern={emailRegex}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="noselect">Отправить</button>
      </form>
    </div>
  )
}

export default FeedbackForm
