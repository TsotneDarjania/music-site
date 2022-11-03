import React from 'react'
import "./style.css"

import icon from "../../../img/beethoven_icon.png"
import Backgroundeffect from '../../backgroundEffect'
import HomePagebuttons from '../../homePageButtons'

const HomePage = () => {

  return (
    <div className='home-page'>
        <Backgroundeffect />
        <img onClick={ () => {window.open("https://www.youtube.com/watch?v=rOjHhS5MtvA")}} className='web-icon center' src={icon} alt="web-icon" />
        <HomePagebuttons />
    </div>
  )
}

export default HomePage