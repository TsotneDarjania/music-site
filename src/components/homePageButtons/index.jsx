import React, { useEffect, useRef } from 'react'
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { useState } from 'react'
import "./style.css"

import {motion} from "framer-motion"


const HomePagebuttons =  forwardRef ( (props,ref) => {

    useImperativeHandle( ref, () => {
        return{
            backToHome : backToHome
        }
    })

    const topButtonRef = useRef();
    const leftButtonRef = useRef();
    const rightButtonRef = useRef();
    const bottomButtonRef = useRef();

    const [extraClassTopButton,setextraClassTopButton] = useState("");
    const [extraClassBottomButton,setextraClassBottomButton] = useState("");
    const [extraClassLeftButton,setextraClassLeftButton] = useState("");
    const [extraClassRightButton,setextraClassRIghtButton] = useState("");

 


    useEffect(() => {
        
    },[])


    const selectOption = (option) => {
       props.changeMode(option)
    }

    function backToHome(){

        const animations = [topButtonAnimation,leftButtonAnimation,rightButtonAnimation,bottomButtonAnimation]
        const setAnimations = [setTopButtonAnimation,setLeftButtonAnimation,setRightButtonAnimation,setBottomButtonAnimation]

        for (let i = 0; i < 4; i++) {

            if(animations[i] === "disabled" || "hide"){ setAnimations[i]("init") } 
            else { setAnimations[i]("reverseStretching") }
            
        }
    }

    const topButtonAnimations = {
        init: {display:"block", opacity: 0.4},
        stretching: {display:"block",width:500, opacity:1},
        expand: {display:"block",width:500, opacity:1,height:80,fontSize:"25px",color:"aqua",borderBottom:"1px solid aqua"},
        toTop: {display:"block",width:500, opacity:1,height:80,fontSize:"25px",color:"aqua",background:"none",borderBottom:"1px solid aqua",top:"-87vh"},

        reverseStretching: {display:"block",width:300, opacity:1,height:80,fontSize:"20px",color:"aqua",background:"none",borderBottom:"1px solid aqua",top:"-87vh"},
        reverseExpand: {display:"block",width:300, opacity:1,height:60,top:"-87vh"},
        reverseToTop:{display:"block", opacity:0.4}
    }
    const [topButtonAnimation,setTopButtonAnimation] = useState("init");

    const leftButtonAnimations = {
        init: {display:"block", opacity: 0.4},
        hide: {display:"block",opacity: 0},
        disable:{display:"none"}
    }
    const [leftButtonAnimation,setLeftButtonAnimation] = useState("init");

    const bottomButtonAnimations = {
        init: {display:"block", opacity: 0.4},
        hide: {display:"block",opacity: 0},
        disable:{display:"none"}
    }
    const [bottomButtonAnimation,setBottomButtonAnimation] = useState("init");

    const rightButtonAnimations = {
        init: {display:"block", opacity: 0.4},
        hide: {display:"block",opacity: 0},
        disable:{display:"none"}
    }
    const [rightButtonAnimation,setRightButtonAnimation] = useState("init");

  return (
    <div>
        <motion.button  
        type='button'
            animate = {topButtonAnimation}
            variants = {topButtonAnimations}
            ref={topButtonRef} 
            transition={ { delay: topButtonAnimation === "init" ? 1:0, ease:"anticipate", duration: 0.6 } }
            onClick={ () => {  
                setextraClassTopButton("select-option-none-transition") 

                setTopButtonAnimation("expand")
                setLeftButtonAnimation("hide")
                setRightButtonAnimation("hide")
                setBottomButtonAnimation("hide")

                selectOption("quiz")

            }} 
            onAnimationComplete={ (anim) => {
                if(anim === "stretching"){
                    setTopButtonAnimation("expand") 
                }
                if(anim === "expand"){
                    setTopButtonAnimation("toTop") 
                }

                if(anim === "reverseStretching"){
                    setTopButtonAnimation("reverseExpand") 
                }
                if(anim === "reverseExpand"){
                    setTopButtonAnimation("reverseToTop") 
                }
            }}
            className={'select-option-btn center select-option-btn-top '+extraClassTopButton}>
            მუსიკალური ქვიზები 
        </motion.button>

        <motion.button  
        type='button'
            animate = {leftButtonAnimation}
            variants = {leftButtonAnimations}
            ref={leftButtonRef} 
            transition={ { delay: leftButtonAnimation === "init" ? 1.5:0, type: 'spring',duration: leftButtonAnimation === "hide" ? 0.2:2 } }
            onClick={ () => {  
             
            }} 
            onAnimationComplete={ (anim) => {
                if(anim === "hide"){
                    setLeftButtonAnimation("disabled")  
                }
            }}
            className={'select-option-btn center select-option-btn-left '+extraClassLeftButton}>
            სოციალური ქსელი
        </motion.button>

        <motion.button  
        type='button'
            animate = {bottomButtonAnimation}
            variants = {bottomButtonAnimations}
            ref={bottomButtonRef} 
            transition={ { delay: bottomButtonAnimation === "init" ? 2:0, type: 'spring',duration: bottomButtonAnimation === "hide" ? 0.2:2 } }
            onClick={ () => {  
             
            }} 
            onAnimationComplete={ (anim) => {
                if(anim === "hide"){
                    setBottomButtonAnimation("disabled")  
                }
            }}
            className={'select-option-btn center select-option-btn-bottom '+extraClassBottomButton}>
            ბლოგები
        </motion.button>

        <motion.button  
        type='button'
            animate = {rightButtonAnimation}
            variants = {rightButtonAnimations}
            ref={rightButtonRef} 
            transition={ {delay: rightButtonAnimation === "init" ? 2.5:0, type: 'spring',duration: rightButtonAnimation === "hide" ? 0.2:2 } }
            onClick={ () => {  
             
            }} 
            onAnimationComplete={ (anim) => {
                if(anim === "hide"){
                    setRightButtonAnimation("disabled")  
                }
            }}
            className={'select-option-btn center select-option-btn-right '+extraClassRightButton}>
            ჩემს შესახებ
        </motion.button>
       
      
    </div>
  )
})

export default HomePagebuttons