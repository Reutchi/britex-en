import React from 'react'
import test from '../assets/cardpricing/Online test-bro 1.png'
import lesson from '../assets/cardpricing/Lesson-bro 1.png'
import webinar from '../assets/cardpricing/Webinar-bro 2.png'
import './css/card-pricing.scss'

function CardPricing() {
	return (
		<div className='CardPricing'>
			<h4 className='Pricing'>Pricing</h4>
			<div className='wrapper-cards'>
				<div className='CardItem'>
					<figure className='Card__img'>
						<img src={test} alt='hero-tiping' />
					</figure>
					<span className='Card__title'>Self-study online course</span>
					<p className='Card__desc'>
						Start learning English online in live classes with qualified EC
						teachers and students from all over the world.
					</p>
					<button className='Card__btn'>
						£5.99 <span>per month</span>
					</button>
				</div>
				<div className='CardItem'>
					<figure className='Card__img'>
						<img src={lesson} alt='lesson' />
					</figure>
					<span className='Card__title'>Self-study online course</span>
					<p className='Card__desc'>
						Start learning English online in live classes with qualified EC
						teachers and students from all over the world.
					</p>
					<button className='Card__btn'>
						£5.99 <span>per month</span>
					</button>
				</div>
				<div className='CardItem'>
					<figure className='Card__img'>
						<img src={webinar} alt='hero-tiping' />
					</figure>
					<span className='Card__title'>Self-study online course</span>
					<p className='Card__desc'>
						Start learning English online in live classes with qualified EC
						teachers and students from all over the world.
					</p>
					<button className='Card__btn'>
						£5.99 <span>per month</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default CardPricing
