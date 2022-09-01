import Hero from '../assets/Hero.png';
import Button from './Button.jsx';
import './css/section-hero.scss';
import Lamp from '../assets/Lamp.svg'
export const SectionHero = function (){
    const sectionItems = [
        {
            title: 'Learn Any Foreign Language',
            paragraph: 'With our teachers who write a program for each student, you will be able to makeyour first sketch after the first lesson.'
        },
    ]
return(
<>
    {sectionItems.map((item, index) =>{
        return(
            <div className='HeroSection' key={index}>
                <div className='content'>
                    <figure>
                        <img src={Lamp} alt="lamp" className='lamp' />
                        <img src={Hero} alt="hero" className='hero'/>
                    </figure> 
                    <h1>{item.title}</h1>
                    <p>{item.paragraph}</p>
                    <div className="wrapperButton">
                        <Button className='button'
                            title={'Get started'}  
                        />
                    </div>
                </div> 
            </div>
            )
    })} 
</>
)
}


    