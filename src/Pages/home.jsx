import React from 'react'
import HomePageStyle from '../Pages/home.module.css'
import Image from '../images/hero_img.png'
import About_Image from '../images/about_image.png'
import Testimonial_one from '../images/testimonial_one.jpeg'
import Testimonial_two from '../images/testimonial_two.jpeg'
import Testimonial_three from '../images/testimonial_three.jpeg'
import { Link } from 'react-router-dom'
import Page_title from '../components/page_title.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from '../components/footer.jsx'
import ContactLay from '../components/contact_layout.jsx'

const Home = () => {
  return (
    <>
    <main className={HomePageStyle.hero_section}>
      <div className="image_section">
        <img src={Image} alt="Hero Image" className={HomePageStyle.hero_image} loading='lazy'/>
      </div>

      <div className={HomePageStyle.text_section}>
      <h1 className={HomePageStyle.heroText}>Learn Smarter, Create Faster, Achieve More.</h1>

      <p className={HomePageStyle.subText}>
      Learnly gives you the tools to study, write, and create with ease—powered by AI, designed for you.
      </p>
      <button className={HomePageStyle.heroButton}><Link to='/login' className={HomePageStyle.heroButton_text}>Get Started</Link></button>
      </div>
    </main>
    <Page_title Title={'About Us'}/>
    <section className={HomePageStyle.about_section}>

      <div className={HomePageStyle.about_text_content}>
        <h3 className={HomePageStyle.about_text_content_title}>Welcome to Learnly</h3>
        <p className={HomePageStyle.about_text_content_subtitle}>At Learnly, we believe education should be simple, interactive, and accessible to everyone. That’s why we built a platform powered by cutting-edge AI tools designed to make studying, creating, and completing assignments easier than ever before.</p>
      </div>
      <div className={HomePageStyle.about_image_content}>
        <img src={About_Image} alt="About Image" className={HomePageStyle.about_image_content}/>
      </div>
    </section>
      <ContactLay/>
    <div style={{ width: "100%", height: "60vh" }}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070639.283284887!2d3.3710119065334845!3d8.995886348042319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1759525244499!5m2!1sen!2sng" width="600" height="450" style={{border: 0, width: "100%", height: "100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <section className={HomePageStyle.testimonial_section}>
      <Page_title Title={'Testimonials'}/>

      <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  loop={true}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation={true}
  style={{ width: "100%", height: "auto", paddingBottom: "3rem" }}
>
  <SwiperSlide style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <img src={Testimonial_one} alt="Testimonial Image" className={HomePageStyle.testimonial_image}/>
    <p>"Learnly helped me write my assignments 10x faster!"</p>
    <h4>- Jahmon ruthe</h4>
  </SwiperSlide>

  <SwiperSlide style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <img src={Testimonial_two} alt="Testimonial Image" className={HomePageStyle.testimonial_image}/>
    <p>"The AI tools are a game-changer. Highly recommend."</p>
    <h4>-Josh Mond</h4>
  </SwiperSlide>

  <SwiperSlide style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
  <img src={Testimonial_three} alt="Testimonial Image" className={HomePageStyle.testimonial_image}/>
    <p>"Simple, effective, and powerful. Love it!"</p>
    <h4>-John kelly</h4>
  </SwiperSlide>
</Swiper>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Home;