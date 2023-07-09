import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title, className}) => {
  const location = useLocation()

  return (
    <>
      <section className={`back ${className}`}>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
