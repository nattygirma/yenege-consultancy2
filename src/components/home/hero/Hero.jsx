import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO YENEGE' title='Your Journey to Wellness Begins Here!' />
            <p className="motto">Non-profit organization aiming to give Ethiopian nationals the best experience in India.</p>
            <div className='button'>
              <Link className='btn1' to="/contact">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </Link>
              <Link className='btn2' to="/services">
               VIEW WHAT WE DO <i className='fa fa-long-arrow-alt-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
