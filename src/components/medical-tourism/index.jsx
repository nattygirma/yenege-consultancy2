import React from "react"
import Back from "../common/back/Back"
import "./edu.css"
import { Link } from "react-router-dom"

const MedicalTourism = () => {
  return (
    <>
      <Back title='Medical Tourism' className="back-mt"/>
      <div className="blog_detail_container">
      <div className="blog_detail">
      <div class="article-secondary">
   <h2 class="article-title">Welcome</h2>
   <p class="article-body">Yenege Medical Tourism is a non-profit organization that aims to help Ethiopian nationals get the best treatment here in India<b> For Free</b> </p>
</div>
      <article class="article-recent">
<div class="article-recent-main">
   <h2 class="article-title">Counseltation</h2>
   <p class="article-body">At yenege Medical Tourism, we understand that receiving quality healthcare at an affordable cost is a priority for many individuals. Our mission is to connect patients with renowned hospitals and medical professionals around the world, offering top-notch medical treatments and personalized care. With our expertise in medical tourism, we aim to make your healthcare journey smooth, safe, and successful.</p>
   <p className="article-body">    We have partnered with internationally recognized hospitals that maintain high standards of healthcare delivery. Our network consists of leading medical institutions that specialize in various treatments, ensuring you receive the best possible care for your specific medical needs.</p>
   <p className="article-body">Our network of medical professionals includes highly skilled doctors, surgeons, and specialists who are globally renowned for their expertise. They are committed to providing exceptional medical care and ensuring positive outcomes for our patients.
</p>
</div>

<div class="article-recent-secondary">
<img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/E6TLLQXWSBOAND2CFTBECQZPCI.jpg" alt="" class="article-image"/>
<img src="https://www.financialexpress.com/wp-content/uploads/2020/04/1-64.jpg?w=660" alt="" class="article-image"/>
<img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2019/01/03/Photos/Processed/hospital-kziF--621x414@LiveMint.JPG" alt="" class="article-image"/>
</div>
</article>

<article class="article-recent">
<div class="article-recent-main">
   <h2 class="article-title"> Personalized Care and Assistance</h2>
   <p class="article-body">We understand that traveling for medical treatment can be daunting. That's why our dedicated team of patient coordinators is here to support you every step of the way. From assisting with travel arrangements to coordinating appointments and providing language interpretation services, we strive to make your medical journey hassle-free.</p>
   <p class="article-body">  We offer tailored treatment packages that cater to your unique healthcare needs. Our comprehensive packages include medical consultations, diagnostic tests, surgeries, post-operative care, and recovery support. We work closely with you and your medical team to create a personalized treatment plan that ensures optimal results.</p>
</div>

<div class="article-recent-secondary">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWhJx5P6ffkpyNgY5IL0pa643Il2lk-Wz9g&usqp=CAU" alt="" class="article-image"/>
</div>
</article>

<article class="article-recent">
<div class="article-recent-main">
   <h2 class="article-title">Travel and Tourism Support</h2>
   <p class="article-body">While focusing on your health is essential, we also want you to enjoy a memorable experience. We provide assistance with travel arrangements, including visa support, airport transfers, accommodation bookings, and local tourism recommendations. Our goal is to ensure that your medical journey is not only successful but also culturally enriching.</p>
</div>

<div class="article-recent-secondary">
<img src="https://imageio.forbes.com/specials-images/imageserve/607474a482297be0b6199223/Dr--Suma-Ganesh/0x0.jpg?format=jpg&crop=1999,1124,x0,y0,safe&width=960" alt="" class="article-image"/>
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

export default MedicalTourism
