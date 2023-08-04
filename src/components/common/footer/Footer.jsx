import React from "react"
import  { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='footer-wrapper'>
          <div className='box logo footer-intro'>
            <h1>Yenege</h1>
            <span>MEDICAL TOURISM</span>
            <p> ETHIOPIANS FOR ETHIOPIANS.</p>

            <Link to="https://www.instagram.com/yenege.co/" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></Link>
            <Link to="https://t.me/Yenege_consultancy" target="_blank" rel="noopener noreferrer"><i className='fab fa-telegram icon'></i></Link>
            <Link to="https://www.instagram.com/yenege.co/" target="_blank" rel="noopener noreferrer"> <i className='fab fa-instagram icon'></i></Link>
          </div>
          <div className="footer-links">
          <div className='link footer-explore'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link footer-quick-links'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
            </div>
            </div>
          <div className='last footer-last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Banglalore, India
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 9036299247
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                yenege.co@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | YENEGE
        </p>
      </div>
    </>
  )
}

export default Footer
