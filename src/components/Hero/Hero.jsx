import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experience that inspires</h2>
            <p>
                Passionate fullstack developer | Transforming Ideas into Seamless and
                 Visually Stunning Web Solutions 
            </p>
        </div>

        <div className="hero-img">
            <div>
            <div className="tech-icon">
                <img src='./images/reactjs.png' alt=''  />
            </div>
            <img src='./images/myimag.jpeg' alt=''style={{borderRadius:"15%"}}/>
            </div>

        
        <div>
            <div className="tech-icon">
                <img src='./images/python.png' alt='' />
            </div>

            <div className="tech-icon">
                <img src='./images/nodejs.png' alt='' />
            </div>

            <div className="tech-icon">
                <img src='./images/javascript.png' alt='' />
            </div>

            <div className="tech-icon">
                <img src='./images/java.png' alt='' />
            </div>

            {/* <div className="tech-icon">
                <img src='./images/HTML.png' alt='' />
            </div>

            <div className="tech-icon">
                <img src='./images/CSS.png' alt='' />
            </div> */}

            <div className="tech-icon">
                <img src='./images/database.png' alt='' />
            </div>
        </div>

        </div>
    </section>
  )
}


export default Hero
