import React from "react"

const LogoIcon = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={24} height={24} rx={3} fill="#fff" />
    <path
      d="M21 3.002V21l-6-.002V24l6 .002c1.894 0 3-1.106 3-3V3.004c0-1.893-1.106-3.002-3-3.002L15 0v3l6 .002ZM3 21.002v-18L9 3V0L3 .002c-1.894 0-3 1.109-3 3.002v18c0 1.894 1.106 2.998 3 2.998L9 24v-3l-6 .002Z"
      fill="#161616"
    />
    <path fill="#161616" d="M8 8.004h8v8H8z" />
  </svg>
)

export default LogoIcon