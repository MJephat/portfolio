import React from 'react'
import "./contactMe.css"
import ContactInfoCard from '../contactInfoCard/contactInfoCard'
import ContactForm from '../contactForm/contactForm'

const ContactMe = () => {
  return (
   <section className='contact-container' id='Contact'>
    <h5>Contact Me</h5>

    <div className="contact-content">
        <div style={{flex: 1}}>
        <ContactInfoCard
        iconUrl="./images/email.png"
        text="mukundijephat22@gmail.com"
        />
        <ContactInfoCard
        iconUrl="./images/github.png" 
        text="https://github.com/MJephat"
        />
        </div>
        <div style={{flex: 1}}>
            <ContactForm />
        </div>

    </div>
   </section>
  )
}

export default ContactMe
