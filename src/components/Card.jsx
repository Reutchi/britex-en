import React from 'react'
import './css/card.scss'
import Button from './Button'

export const Card = function ({ data: { cName, title, description, img } }) {
	return (
				<div className={cName}>
					<figure>
						<img src={require(`../assets/cards/${img}.png`)} alt='' />
					</figure>
					<h3>{title}</h3>
					<p>{description}</p>
					<Button className='more' title={'Learn more'} />
				</div>
	)
}

export default Card
