import React from 'react'
import {motion} from "framer-motion"


const HomePageButton = (props) => {

  return (
    <motion.button  
        type='button'
        animate = {props.currentAnimation}
        variants = {props.animations}
        transition={ { delay: props.delay, ease:props.animationMode, duration: props.animationDuration} }
        className={'select-option-btn center '+props.className+ ' ' +props.extraClass}
        onClick={props.onClick}
        onAnimationComplete={props.animationComplete}
        >
        {props.innerText} 
    </motion.button>
  )
}

export default HomePageButton