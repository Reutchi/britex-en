import React from 'react'
import './css/contact-us.scss'
import contact from '../assets/contact.png'

function ContactUs() {
	return (
		<div className='ContactUs'>
			<div className='wrapper-contact'>
				<h4>Contact Us</h4>
				<figure>
					<img src={contact} alt='' />
				</figure>
				<p>
					Discover your current English level by taking our free online English
					test. Sign up to our newsletter for learning tips and free resource
				</p>
				<form action=''>
					<input placeholder='Enter Your E-mail' type='email' required />
					<button className='btn contact'>Subscribe</button>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
