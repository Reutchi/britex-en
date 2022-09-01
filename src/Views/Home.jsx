import React from 'react'
import {SectionHero} from '../components/SectionHero'
import {SectionSkills} from '../components/SectionSkills'

export const Home = function () {
  return (
    <div className='Home-Page'>
      <SectionHero/>
      <SectionSkills/>
    </div>
    )
}