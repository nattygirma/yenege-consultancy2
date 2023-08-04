import React from "react"
import "../services/a.css"
import { treatmentsCard } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom"

const TreatmentsCard = () => {
  return (
    <>
      <section className='treatmentsCard'>
        <Heading subtitle='Treatments' title='Treatments we provide' />
        <div className="grid-steps">
      {treatmentsCard.slice(0,4).map(step=>(
        <div className="card">
        <img src={step.img} alt="a"/>
        <div className="card-body">
          <h2>{step.header}</h2>
          {step.details.map((detail)=>(
                            <p> - {detail}</p>
                            ))}

        </div>
      </div>
      ))}
        </div>

        <div className="flexSeeMore">
        <Link to="/treatments">See More...</Link>
        </div>
      </section>
    </>
  )
}

export default TreatmentsCard
