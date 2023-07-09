import React from "react"
import "../about/about.css"
import Back from "../common/back/Back"
import UniversitiesList from "./UniversitiesList"

const Universities = () => {
  return (
    <>
      <Back title='Parner Universities' className="back-ec"/>
      <UniversitiesList />
    </>
  )
}

export default Universities
