import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero-container' id='Hero'>
        <div className='hero-content'>
            <h2>FullStack Software Developer</h2>
            <p>
            I'm a passionate and detail-oriented Software Developer with a strong foundation in programming. I specialize in building 
            scalable and secure web applications using JavaScript (React.js, Vue.js, Node.js, Express.js), Python (Flask, FastAPI), 
            Java (Spring Boot), and MongoDB. I focus on creating modular, reusable code with an emphasis on scalability, security, 
            and maintainability. I'm also expanding my expertise in cloud solutions (AWS, Google Cloud) and content delivery networks 
            to enhance application performance and security. Always committed to following best practices for clean, testable code.
            </p>
        </div>

        <div className="hero-img">
            <div>
            <div className="tech-icon">
                <img src='./images/reactjs.png' alt=''  />
            </div>
            <img src='./images/myimage.png' alt=''style={{borderRadius:"15%"}}/>
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
