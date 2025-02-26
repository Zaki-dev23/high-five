import React from 'react'
import "./css/rapport.css"

export default function Rapport() {
    return (
        <div className='info'>
            <div className="contact-info">
                <h2 className="contact-title">Contact Us </h2>
                <p className="contact-parag">Get in touch with us to learn more about our services or to ask a question. Contact us today and we'll be happy to help!</p>
            </div>
            <form action="" className="contact">
                <div className="user-info">
                    <label htmlFor="" className="first-name">First Name</label><br/>
                    <input type="text" placeholder='Enter First Name' />
                    <label htmlFor="" className="last-name">Last Name</label><br/>
                    <input type="text" placeholder='Enter Last Name' />
                </div>
                <div className="info-global">
                    <label htmlFor="" className="last-name">Your Email</label>
                    <input type="text" placeholder='Enter ' />
                    <label htmlFor="" className="last-name">Subject</label>
                    <input type="text" placeholder='Subject' />
                    <label htmlFor="" className="last-name">Your Message</label>
                    <textarea type="text" placeholder='Enter All You Want' />
                </div>
                <button type='submit'> submit</button>

            </form>
        </div>
    )
}