import React from 'react'
import "./style.css"

import icon from "../../../img/beethoven_icon.png"
import Backgroundeffect from '../../backgroundEffect'

const HomePage = () => {
  return (
    <div className='home-page'>
        <Backgroundeffect />
        <img onClick={ () => {window.open("https://www.youtube.com/watch?v=rOjHhS5MtvA")}} className='web-icon center' src={icon} alt="web-icon" />

        <button style={{animationDelay : "1s"}} className='select-songs-btn select-songs-btn-1'> მუსიკალური ქვიზები </button>
        <button style={{animationDelay : "1.5s"}} className='select-songs-btn select-songs-btn-2'> სოციალური ქსელი </button>
        <button style={{animationDelay : "2.5s"}} className='select-songs-btn select-songs-btn-3'> ჩემს შესახებ </button>
        <button style={{animationDelay : "2s"}} className='select-songs-btn select-songs-btn-4'> ბლოგები </button>
    </div>
  )
}

export default HomePage