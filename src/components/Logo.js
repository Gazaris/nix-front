import React from 'react'
import '../styles/Logo.css'
import LogoIcon from '../svg/LogoIcon'

const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon />
      <span className="noselect">okoprom</span>
    </div>
  )
}

export default Logo
