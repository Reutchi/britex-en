import React from 'react'
import { SectionHero } from '../components/SectionHero'
import { SectionSkills } from '../components/SectionSkills'
import AboutUs from '../components/AboutUs'
import SectionPricing from '../components/SectionPricing'
import ContactUs from '../components/ContactUs'
import '../components/css/home-page.scss'

export const Home = function () {
	return (
		<div className='Home-Page'>
			<SectionHero />
			<SectionSkills />
			<AboutUs />
			<SectionPricing />
			<ContactUs />
		</div>
	)
}
