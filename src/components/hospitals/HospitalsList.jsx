import React from "react"
import "./hospitals.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const HospitalsList = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='' title='PARTNER HOSPITALS' />
          <div className='hospitals-list'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HospitalsList
