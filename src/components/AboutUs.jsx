import React from 'react'
import competition from '../assets/Business competition-bro 1.png'
import './css/about-us.scss'

const AboutUs = () => {
	return (
		<div className='AboutUs'>
			<h4>About Us</h4>

			<figure>
				<img src={competition} alt='people' />
			</figure>
			<p>
				The model offers a framework for discussing problems related to the
				user's experience, as well as possible ways and means of solving them.
				Application development begins at the top level (strategy), where the
				future software product is described quite abstractly from the point of
				view of the expectations of both users and the customer.
			</p>
			<div className='wrapper-info-cards'>
				<div className='InfoCards'>
					<span className='value'>800</span> <br />
					<span className='type'>Pupils</span>
				</div>
				<div className='InfoCards'>
					<span className='value'>18</span> <br />
					<span className='type'>Teachers</span>
				</div>
				<div className='InfoCards'>
					<span className='value'>6</span> <br />
					<span className='type'>Foreign languages</span>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
