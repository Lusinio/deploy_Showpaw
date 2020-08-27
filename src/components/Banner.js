import React from 'react'
import './banner.css'
export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p style={{fontWeight:"bold"}}>{subtitle}</p>
      {children}

    </div>
  )
}
