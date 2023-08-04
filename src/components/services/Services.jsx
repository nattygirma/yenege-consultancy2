import React from "react"
import "./services.css"
import Back from "../common/back/Back"
import ServicesCard from "./ServicesCard"
import Card from "./Card"

const About = () => {
  return (
    <>
      <Back title='Services' className="back-s"/>
      <Card/>
      <ServicesCard />
    </>
  )
}

export default About
