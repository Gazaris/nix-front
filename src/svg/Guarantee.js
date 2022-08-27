import React from 'react'

const Guarantee = (props) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M17 15.246v6.872a.5.5 0 0 1-.757.429L12 20.001l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0v-.001Zm-8 1.173v3.05l3-1.8 3 1.8v-3.05a7.98 7.98 0 0 1-3 .582 7.98 7.98 0 0 1-3-.582Zm3-1.418a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
          fill="#161616"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Guarantee
