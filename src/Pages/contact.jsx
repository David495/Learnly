import React from 'react'
import Contact_layout from '../components/contact_layout.jsx'
import Footer from '../components/footer.jsx'
const Contact = () => {
  return (
   <main>
    <Contact_layout/>
    <main style={{marginBottom: '50px'}}>
    <div style={{ width: "100%", height: "60vh" }}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070639.283284887!2d3.3710119065334845!3d8.995886348042319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1759525244499!5m2!1sen!2sng" width="600" height="450" style={{border: 0, width: "100%", height: "100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </main>

    <footer>
      <Footer/>
    </footer>  
   </main>
  )
}

export default Contact;