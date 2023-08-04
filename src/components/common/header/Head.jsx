import React from "react"
import { Link } from "react-router-dom"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className="flex">
          <img className="logopic" src="./images/logo-y.png" alt="Logo" width={55} height={55}/>
          <div className='logo'>
            <h1>YENEGE</h1>
            <span> Medical Tourism</span>
          </div>
          </div>
          <div className='social'>
            +91 9036299247
           <Link to="https://www.instagram.com/yenege.co/" target="_blank" rel="noopener noreferrer"> <i className='fab fa-facebook-f icon'></i></Link>
           <Link to="https://www.instagram.com/yenege.co/" target="_blank" rel="noopener noreferrer"> <i className='fab fa-instagram icon'></i></Link> 
           <Link to="https://t.me/Yenege_consultancy" target="_blank" rel="noopener noreferrer">   <i className='fab fa-telegram icon'></i></Link> 
           <Link to="https://www.instagram.com/yenege.co/" target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube icon'></i></Link> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
