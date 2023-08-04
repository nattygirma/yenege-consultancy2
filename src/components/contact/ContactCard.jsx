import React from "react"
import "./contact.css"

const Contact = () => {
  // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <section className='contacts padding'>
        <div className='container shadow flexSB flexSe'>
          {/* <div className='left row'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089920332!2d77.46612630002026!3d12.953945614242215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1688882415458!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myLocation"></iframe>
          </div> */}
          <div className='right'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>bangalore, India</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 9036299247</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>yenege.co@gmail.com</p>
              </div>
            </div>

            <form action="https://formsubmit.co/nattygirma28@gmail.com" method="POST">
              <div className='flexSB'>
                <input type='text' placeholder='name' name="name"/>
                <input type='email' placeholder='email' name="email"/>
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='5' name="message" placeholder="Enter Your Message Here">
              </textarea>
              <input type="hidden" name="_captcha" value="false"></input>
              <button className='primary-btn' type="submit">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
