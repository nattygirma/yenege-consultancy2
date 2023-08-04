import React from "react"
import { steps } from "../../dummydata"

import "./a.css"
import Heading from "../common/heading/Heading"


const ServicesCard = () => {
  return (
<>
<Heading subtitle='How Jivo Works' title='How your treatment will go?' />
    <div className="grid-steps">
      {steps.map(step=>(
        <div className="card">
        <img src={step.img} alt="a"/>
        <div className="card-body">
          <h2>{step.heading}</h2>
          <p>{step.content}</p>

        </div>
      </div>
      ))}
        </div>
        </>
  )
}

export default ServicesCard
