  import React from 'react'
  import './css/card.scss'
  import Button from './Button'
  import talks from '../assets/cards/Talks.png'

  
export const Card = function (){
    return(
      <div className="Card">
        <div className="wrapper-card">
          <div className="cardItem">
            <figure>
                <img src={talks} alt="" />
              </figure>
              <h3>Speaking</h3>
              <p>Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free fora limited time only</p>
              <p>Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
              <Button
              className="more" 
              title={'Learn more'}/>
          </div>
          <div className="cardItem">
            <figure>
                <img src={talks} alt="" />
              </figure>
              <h3>Reading</h3>
              <p>perception and response actions of the user resulting from the use andor up coming use of the product, system or service</p>
              <Button
              className="more" 
              title={'Learn more'}/>
          </div>
          <div className="cardItem">
            <figure>
                <img src={talks} alt="" />
              </figure>
              <h3>Listening</h3>
              <p>Here you can find activities to practise your listening skills. Listening will help you to improve your understanding </p>
              <Button
              className="more" 
              title={'Learn more'}/>
          </div>
        </div>
      </div>
  )
}


export default Card
  