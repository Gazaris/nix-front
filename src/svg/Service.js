import React from "react"

const Service = (props) => {
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
          d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8 8 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0ZM3 10v4h1v-4H3Zm17 0v4h1v-4h-1ZM7.76 15.787l1.06-1.696A5.973 5.973 0 0 0 12 15a5.973 5.973 0 0 0 3.18-.91l1.06 1.696A7.963 7.963 0 0 1 12 17a7.964 7.964 0 0 1-4.24-1.215Z"
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

export default Service