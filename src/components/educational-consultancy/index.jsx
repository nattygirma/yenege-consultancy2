import React from "react"
import Back from "../common/back/Back"
import "./edu.css"
import { Link } from "react-router-dom"

const Educational_Consultancy = () => {
  return (
    <>
      <Back title='Educational Consultancy' className="back-ec"/>
      <div className="blog_detail_container">
      <div className="blog_detail">
      <article class="article-recent">
<div class="article-recent-main">
   <h2 class="article-title">Academic Guidance</h2>
   <p class="article-body">We provide expert advice on choosing the right educational path, including schools, colleges, and universities. We assist in identifying suitable courses and programs based on individual interests, abilities, and career goals.</p>
   <p className="article-body">At our educational consultancy, we understand that choosing the right educational path can be a daunting task. With the vast array of options available, it's easy to feel overwhelmed. That's where our expert advisors step in. We have years of experience in the education field and a deep understanding of various educational systems and institutions.</p>
   <p className="article-body">Our primary goal is to help students and their families navigate through the complex world of education and make informed decisions. We take the time to listen to each student's aspirations, strengths, and interests. By getting to know them on a personal level, we can offer tailored guidance that aligns with their unique goals and ambitions.</p>
   <p className="article-body">We stay up-to-date with the latest developments in the academic landscape, including changes in curriculum, admission requirements, and emerging fields of study. This knowledge allows us to provide accurate and relevant advice to our clients. Whether a student is interested in pursuing a traditional degree or exploring alternative pathways, we have the expertise to guide them towards the best options available.</p>
</div>

<div class="article-recent-secondary">
<img src="https://www.studyinternational.com/wp-content/uploads/2022/12/IMG_4949-002-1.jpg" alt="" class="article-image"/>
<img src="https://news.stanford.edu/wp-content/uploads/2019/09/Ethiopia_instructors_1500x1000.jpg" alt="" class="article-image"/>
<img src="https://c8.alamy.com/comp/2DJBPGA/study-in-india-group-of-five-african-college-students-on-campus-at-university-yard-hold-white-blank-abroad-countries-for-student-concept-2DJBPGA.jpg" alt="" class="article-image"/>
<img src="https://live.staticflickr.com/7408/27499169023_5afacf9444_b.jpg" alt="sdd"  class="article-image"/>
</div>
</article>

<article class="article-recent">
<div class="article-recent-main">
   <h2 class="article-title">Study Abroad Programs</h2>
   <p class="article-body">Discover opportunities for studying abroad, including information on universities, application processes, scholarships, and visa requirements. We guide students through the entire application journey.</p>
   <p class="article-body">Expand your horizons and experience a global education with our study abroad guidance. Our knowledgeable consultants assist you in selecting the right study destination, choosing suitable programs, managing application procedures, and understanding visa requirements. We strive to make your study abroad journey seamless and enriching.</p>
</div>

<div class="article-recent-secondary">
   <img src="https://www.studyinternational.com/wp-content/uploads/2022/12/IMG_4949-002-1.jpg" alt="" class="article-image"/>
</div>
</article>

<article class="article-recent">
<div class="article-recent-main">
   <h2 class="article-title">Test Preparation</h2>
   <p class="article-body">We offer comprehensive resources and strategies to help students prepare for standardized tests such as SAT, ACT, GRE, GMAT, IELTS and TOEFL. Our guidance aims to maximize their performance and increase their chances of admission to desired institutions.</p>
</div>

<div class="article-recent-secondary">
<img src="https://d28wu4rrwshdah.cloudfront.net/155646.png" alt="" class="article-image"/>
</div>
</article>
</div>

<aside class="sidebar">
            <Link to='/services' >
            <div class="sidebar-widget">
               <h2 class="widget-title">ABOUT US</h2>
               <img src="./images/logo.png" alt="" class="article-image"/>
               <p class="widget-body">Services we provide</p>
            </div>
            </Link>

            <Link to='/team' >
            <div class="sidebar-widget">
               <h2 class="widget-title">Partner Universities</h2>
               <img src="./images/logo.png" alt="" class="article-image"/>
               <p class="widget-body">List of Partner Univrsities</p>
            </div>
            </Link>

            <Link to='/universities' >
            <div class="sidebar-widget">
               <h2 class="widget-title">Our Team</h2>
               <img src="./images/logo.png" alt="" class="article-image"/>
               <p class="widget-body">The Team Aiming to give you the best exprience abroad</p>
            </div>
            </Link>
            
            
         </aside>
         </div>


    </>
  )
}

export default Educational_Consultancy
