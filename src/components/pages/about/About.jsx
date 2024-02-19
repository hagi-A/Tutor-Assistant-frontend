import React from 'react'

import Back from '../../common/back/Back'
import AboutCard from './AboutCard'


const About = () => {
  return (
    <>
      <Back title="About Us" />
      <div className="h-full bg-cyan-800">
        <AboutCard />
      </div>
    </>
  );
}

export default About

