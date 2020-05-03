import React from "react"

const Banner = ({ title, info, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <h2>{info}</h2>
      {children}
    </div>
  )
}

export default Banner