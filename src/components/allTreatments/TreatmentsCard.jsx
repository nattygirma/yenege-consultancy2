import React from "react"
import "./courses.css"
import { treatmentsCard } from "../../dummydata"
import Heading from "../common/heading/Heading"
import "../services/a.css"

const CoursesCard = () => {
  return (
    <>
      <section className='treatmentsCard'>
        <Heading subtitle='Treatments' title='Treatments we provide' />
        <div className="grid-steps">
      {treatmentsCard.map(step=>(
        <div className="card">
        <img src={step.img} alt="a"/>
        <div className="card-body">
          <h2>{step.header}</h2>
          {step.details.map((detail)=>(
                            <p> - {detail}</p>
                            ))}
          {/* <p>{step.content}</p> */}

        </div>
      </div>
      ))}
        </div>
        {/* <div className='container grid2'>
          {treatmentsCard.map((val) => (
            <div className='items'>
                  <div className='img'>
                    <img src={val.img} alt='' />
                  </div>

              <div className='price'>
              <div className="price2">
                <h2>
                  {val.header}
                </h2>
                <div className='text'>
                  <div className='details'>
                        <div className='box'>
                          <div className='para'>
                            {val.details.map((detail)=>(
                            <h4> - {detail}</h4>
                            ))}
                          </div>
                        </div>
                  </div>
                </div>
                </div>
                
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </>
  )
}

export default CoursesCard
