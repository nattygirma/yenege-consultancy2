import React from "react"
import Heading from "../common/heading/Heading"
import "./services.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import { Link } from "react-router-dom"

const ServicesCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='What We Do' title='We provide the following services' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <Link to={val.link}>
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                      <a>Load More...</a>
                    </div>
                  </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default ServicesCard
