import React from "react"
import Back from "../common/back/Back"
import TreatmentsCard from "./TreatmentsCard"


const CourseHome = () => {
  return (
    <>
      <Back title='Treatments' className="back-treatments"/>
      <TreatmentsCard />
      {/* <OnlineCourses /> */}
    </>
  )
}

export default CourseHome
