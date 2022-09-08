import React from 'react'
import logo from '../assets/Logo.svg'
import './css/footer.scss'

const Footer = () => {
	const infoFooter = [
		{
			title: 'Terms and Conditions',
			link: '/terms'
		},
		{
			title: 'Privacy Policy',
			link: '/privacy'
		},
		{
			title: 'Cookie Policy<',
			link: '/policy'
		}
	]
	return (
		<div className='Footer'>
			<hr />
			<div className='wrapper-footer'>
				<figure>
					<img src={logo} alt='logo' />
				</figure>
				<ul>
					{infoFooter.map((item, index) => {
						return (
							<li key={index}>
								<a href={item.link}>{item.title}</a>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Footer
