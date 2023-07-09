import React from "react"
import "./universities.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const UniversitiesList = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='PARTNER UNIVERSITIES' title='Choose to study in the following Universities' />
          <div className='universities-list'>
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

export default UniversitiesList
