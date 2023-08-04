import React, { useState } from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        {/* <Router> */}
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to='/medical-tourism'>Medical Help</Link>
            </li> */}
            <li>
              <Link to='/hospitals'>Partner Hospitals</Link>
            </li>
            <li>
              <Link to='/Treatments'>Treatments</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>

          </ul>
          <div className='start'>
            <div className='button'>GET STARTED</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        {/* </Router> */}
      </header>
    </>
  )
}

export default Header
