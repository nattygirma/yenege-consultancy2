import React from "react"
import ServicesCard from "../services/ServicesCard"
import Hospitals from "../hospitals/HospitalsList"
import Hero from "./hero/Hero"
import Hsteps from "./HSteps"
import Treatments from "./HTreatments"
import ContactUs from "../contact/ContactCard"
import Faq from "../pricing/Faq"

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesCard />
      <Hsteps />
       <Hospitals /> 
       <Treatments/>
       <ContactUs />
      <Faq/>
    </>
  )
}

export default Home
