import React from 'react'

const All = (props) => {
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
          d="M4 4h6v6H4V4Zm0 10h6v6H4v-6ZM14 4h6v6h-6V4Zm0 10h6v6h-6v-6Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default All
