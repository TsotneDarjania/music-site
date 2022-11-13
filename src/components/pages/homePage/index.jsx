import React, { useEffect } from 'react'
import "./style.css"

import icon from "../../../img/beethoven_icon.png"
import closeButton from "../../../img/close_button.png"
import Backgroundeffect from '../../backgroundEffect'
import HomePagebuttons from '../../homePageButtons'
import { useState } from 'react'
import { useRef } from 'react'

const HomePage = () => {

  const webIconReferenc = useRef();
  const childRef = useRef();

  const[mainPageMode, setMainPageMode] = useState("intro")
  const[newPageMode, setNewPageMode] = useState("")

  const [webIconClass,setWebIconClass] = useState("")
  const [backgroundEffectClass,setbackgroundEffectClass] = useState("")

  useEffect(() => {
    webIconReferenc.current.addEventListener('animationend', (anim) => { 
      anim.animationName === "web-icon-to-right-anim" && ChangeMode(newPageMode)
    });
  })

  function backToIntro(){
    setNewPageMode("intro")
    document.querySelector(".close-button").style.display = "none"

    childRef.current.backToHome();

    webIconReferenc.current.style.animationDirection = "alternate-reverse";
    webIconReferenc.current.style.animationName = "web-icon-to-right-anim-reverse";
  }

  function ChangeMode(mode){
    setMainPageMode(mode);
    setbackgroundEffectClass("hide-anim")
  }

  return (
    <div className='home-page'>
        {
          mainPageMode !== "intro" && <img onClick={backToIntro} className='close-button' src={closeButton} alt="close-button"   />
        }
        <div className={backgroundEffectClass}> <Backgroundeffect /> </div> 
        <img ref={webIconReferenc} onClick={ () => {window.open("https://www.youtube.com/watch?v=rOjHhS5MtvA")}} className={'web-icon center ' + webIconClass} src={icon} alt="web-icon" />
        <HomePagebuttons ref={childRef} newPageMode={setNewPageMode} webIconClass = {setWebIconClass} />
    </div>
  )
}

export default HomePage