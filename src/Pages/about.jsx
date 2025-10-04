import React from 'react'
import Aboutstyle from './about.module.css'
import AboutHeroImage from '../images/about_image.png'
import StoryImg from '../images/story_image.png'
import MissionImg from '../images/our_mission_image.png'
import Footer from '../components/footer.jsx'
const About = () => {
  return (
    <>
    <main className={Aboutstyle.main_section}>
      <div className={Aboutstyle.about_image_section}>
        <img src={AboutHeroImage} alt="" className={Aboutstyle.about_img} />
      </div>
      <div className={Aboutstyle.about_text_section}>
        <h1 className={Aboutstyle.about_hero_text}>About Learnly</h1>
        <p className={Aboutstyle.about_hero_subtext}>
        At Learnly, we believe education should be simple, interactive, and accessible to everyone. That’s why we built a platform powered by cutting-edge AI tools designed to make studying, creating, and completing assignments easier than ever before.
        </p>
      </div>
    </main>

    <div>
      <h1 style={{textAlign: 'center'}}>Story</h1>
    </div>
    <main className={Aboutstyle.story_section}>

    <div className={Aboutstyle.story_text_section}>
        <h1 className={Aboutstyle.about_hero_text}>Our Story</h1>
        <p className={Aboutstyle.about_hero_subtext}>
        Learnly began with a simple observation: traditional learning methods often feel outdated and overwhelming. Students struggle to keep up, creators face roadblocks in execution, and professionals crave tools that help them grow without slowing them down. Out of this need, Learnly was born — a space that combines technology, creativity, and simplicity into one seamless experience.
        </p>
      </div>
      <div>
        <img src={StoryImg} alt="Story Image" className={Aboutstyle.story_img}/>
      </div>
    </main>

    <h1 style={{textAlign: 'center'}}>Mission</h1>
    <main className={Aboutstyle.mission_section}>
    <div className={Aboutstyle.mission_text_section}>
    <h1>Our Mission</h1>
    <p className={Aboutstyle.about_hero_subtext}>
    Our mission is to empower learners at every stage of life. Whether you’re a student tackling assignments, a professional upgrading your skills, or a creative thinker bringing projects to life, Learnly is here to guide, support, and inspire.
    </p>
    <p>
    <h2>We believe that:</h2>
    <ul>
    <li>Knowledge should be accessible – no barriers, no unnecessary complications.</li>
    <li>Creativity should be encouraged – because innovation starts with new ideas.</li>
    <li>Growth should be continuous – both personally and professionally.</li>
    </ul>
    </p>
    </div>
    <div className={Aboutstyle.mission_image_section}>
      <img src={MissionImg} alt="Mission Image" className={Aboutstyle.mission_img}/>
    </div>
    </main>
    <main>
      <Footer/>
    </main>
    </>
  )
}

export default About;