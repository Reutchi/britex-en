import React from 'react'
import {Card} from './Card.jsx'
import './css/cards.scss'

export const Cards = function () {
	const cardsItems = [
		{
			id: 1,
			img: `Audicence`,
			title: `Speaking`,
			description: `Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free fora limited time only`,
			cName: 'cardItem a'
		},
		{
			id: 2,
			img: `House`,
			title: `Listening`,
			description: `Here you can find activities to practise your listening skills. Listening will help you to improve your understanding`,
			cName: 'cardItem b'
		},
		{
			id: 3,
			img: `Talks`,
			title: `Listening`,
			description: `Here you can find activities to practise your listening skills. Listening will help you to improve your understanding`,
			cName: 'cardItem c'
		},
		{
			id: 4,
			img: `Type`,
			title: `Reading`,
			description: `perception and response actions of the user resulting from the use andor up coming use of the product, system or service`,
			cName: 'cardItem d'
		}
	]
	return (
		<div className='Cards'>
			<div className='wrapper-card'>
				<div className='Card'>
					{
					cardsItems.map((card) => (<Card data={card} key={card.id} />))
					}
				</div>
			</div>
		</div>
	)
}

export default Cards
