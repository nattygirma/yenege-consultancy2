import React from "react"
import "../about/about.css"
import Back from "../common/back/Back"
import HospitalsList from "./HospitalsList"

const Hospitals = () => {
  return (
    <>
      <Back title='Parner Hospitals' className="back-ec"/>
      <HospitalsList />
    </>
  )
}

export default Hospitals
