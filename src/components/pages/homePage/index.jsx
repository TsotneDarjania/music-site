
import "./style.css"

import icon from "../../../img/beethoven_icon.png"
import closeButton from "../../../img/close_button.png"
import Backgroundeffect from '../../backgroundEffect'
import HomePagebuttons from '../../homePageButtons'
import { useState } from 'react'
import { useRef } from 'react'
import { motion} from "framer-motion"
import { screenWidth } from "../../../helpers/constants"

const HomePage = () => {

  const childRef = useRef();

  const[mainPageMode, setMainPageMode] = useState("intro")

  const [backgroundEffectClass,setbackgroundEffectClass] = useState("")



  const webIconAnimations = {
    init : {opacity:1, scale:1},
    toRight : {opacity:1, scale:1,backgroundColor:"rgb(1, 11, 22)",
    border:"2px", right:"-90vw"},
    toTop : {opacity:1, scale:1,backgroundColor:"rgb(1, 11, 22)",
    border:"2px", right:"-92vw",top:"-85vh"},

    hide: {display: "none"},

    reverseToTop:{opacity:1, scale:1,backgroundColor:"rgb(1, 11, 22)",
    border:"2px", right:"-90vw"},
    reverseToRight:{opacity:1, scale:1}
  }
  const [webIconAnimation,setWebIconAnimation] = useState("init");

  const closeButtonAnimations = {
    init : {opacity:1},
    hide : {opacity:0,display:"none"}
  }

  const [closeButtonAnimation,setCloseButtonAnimation] = useState("hide");

  function backToIntro(){
    setMainPageMode("intro")


    if(screenWidth < 1100){
      setbackgroundEffectClass("show-anim")
      setWebIconAnimation("init")
    } else {
      setWebIconAnimation("reverseToTop")
    }


    childRef.current.backToHome();
  }

  const changeMode = (mode) => {  
    setMainPageMode(mode);

    screenWidth < 1100 &&  setTimeout(() => {
      setCloseButtonAnimation("init")

    }, 500);

    screenWidth < 1100 ? setWebIconAnimation("hide") : setWebIconAnimation("toRight")
    setbackgroundEffectClass("hide-anim")
  
  }

  return (
    <div className='home-page'>
        {
          mainPageMode !== "intro" && 
          <motion.img 
            animate = {closeButtonAnimation}
            variants = {closeButtonAnimations}
            transition={ {duration:0.8 } }
            onClick={backToIntro} 
            className='close-button' 
            src={closeButton} 
            alt="close-button"   
          />
        }
        <div className={backgroundEffectClass}> <Backgroundeffect /> </div> 
        <motion.img 
          animate = {webIconAnimation}
          variants = {webIconAnimations}
          transition={ {delay: webIconAnimation === "init" ? 0.5 : 0.3, duration: 0.2 } }
          onAnimationComplete={ (anim)=> {
            if(anim === "toRight"){
              setWebIconAnimation("toTop")
            }
            if(anim === "reverseToRight"){
              setTimeout(() => {
                setbackgroundEffectClass("show-anim")
              }, 500);
            }
            if(anim === "reverseToTop"){
              setWebIconAnimation("reverseToRight")
            }
            

            if(anim === "toTop"){
              setCloseButtonAnimation("init")
            }
          }}
          onClick={ () => {window.open("https://www.youtube.com/watch?v=rOjHhS5MtvA")}} 
          className={'web-icon center '} src={icon} alt="web-icon"
         />
        <HomePagebuttons 
          ref={childRef}
          changeMode = {(mode) => {
              changeMode(mode);
          }} 
        />
    </div>
  )
}

export default HomePage