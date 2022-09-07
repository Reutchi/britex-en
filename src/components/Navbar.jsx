import React from 'react'
import logo from '../assets/Logo.svg'
import './css/navbar.scss'
import Hamburger from './Hamburger'

const MenuItem = [
	{
		title: 'Home',
		url: '/',
		cName: 'nav-links'
	},
	{
		title: 'Skills',
		url: '/skills',
		cName: 'nav-links'
	},
	{
		title: 'About Us',
		url: '/about-us',
		cName: 'nav-links'
	},
	{
		title: 'Pricing',
		url: '/pricing',
		cName: 'nav-links'
	},
	{
		title: 'Contacts',
		url: '/contacts',
		cName: 'nav-links'
	}
]

export const Navbar = function () {
	React.useEffect(() => {
		const menuWrap = document.querySelector('.bm-menu-wrap')
		if (menuWrap) {
			menuWrap.setAttribute('aria-hidden', true)
		}
	}, [])

	return (
		<div className='NavBarItems'>
			<figure>
				<img src={logo} alt='logo' />
			</figure>
			<ul className='ListItems'>
				{MenuItem.map((item, index) => {
					return (
						<li key={index} className='ListItem'>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					)
				})}
			</ul>
			<Hamburger />
			<button className='BtnTalk'>Let's Talks</button>
		</div>
	)
}

export default Navbar
