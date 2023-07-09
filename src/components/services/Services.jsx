import React from "react"
import "./services.css"
import Back from "../common/back/Back"
import ServicesCard from "./ServicesCard"

const About = () => {
  return (
    <>
      <Back title='Services' className="back-s"/>
      <ServicesCard />
    </>
  )
}

export default About
