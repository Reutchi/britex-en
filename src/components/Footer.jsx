import React from 'react'
import logo from '../assets/Logo.svg'
import './css/footer.scss'

const Footer = () => {
	return (
		<div className='Footer'>
			<hr />
			<div className='wrapper-footer'>
				<figure>
					<img src={logo} alt='logo' />
				</figure>
				<ul>
					<li>
						<a href=''>Terms and Conditions</a>
					</li>
					<li>
						<a href=''>Privacy Policy</a>
					</li>
					<li>
						<a href=''>Cookie Policy</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
