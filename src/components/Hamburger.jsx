import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../components/css/hamburger.scss'

const toggleMenu = ({ isOpen }) => {
	const menuWrap = document.querySelector('.bm-menu-wrap')
	isOpen
		? menuWrap.setAttribute('aria-hidden', false)
		: menuWrap.setAttribute('aria-hidden', true)
}

const Hamburger = () => {
	return (
		<Menu noOverlay onStateChange={toggleMenu}>
			<a className='menu-item' href='/'>
				Home
			</a>
			<a className='menu-item' href='/about'>
				About
			</a>
			<a className='menu-item' href='/contact'>
				Contact
			</a>
		</Menu>
	)
}

export default Hamburger
