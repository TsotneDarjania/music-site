import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { useState } from 'react'
import "./style.css"
import {screenWidth} from "../../helpers/constants"

import HomePageButton from '../homePageButton';


const HomePagebuttons =  forwardRef ( (props,ref) => {

    useImperativeHandle( ref, () => {
        return{
            backToHome : backToHome
        }
    })


    const [extraClassTopButton,setextraClassTopButton] = useState("");
    const [extraClassBottomButton,setextraClassBottomButton] = useState("");
    const [extraClassLeftButton,setextraClassLeftButton] = useState("");
    const [extraClassRightButton,setextraClassRIghtButton] = useState("");


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
        stretching: {display:"block",
        width: screenWidth < 1100 ? "95vw" : 500, 
        opacity:1
        },
        expand: {display:"block",width: screenWidth < 1100 ? "95vw" : 500, opacity:1,height:80,fontSize:"25px",color:"aqua",borderBottom:"1px solid aqua"},
        toTop: {display:"block",width: screenWidth < 1100 ? "95vw" : 500, opacity:1,height:80,fontSize:"25px",color:"aqua",background:"none",borderBottom:"1px solid aqua",top:"-87vh"},

        reverseStretching: {display:"block",screenWidth: screenWidth < 500 ? "95vw" : 500, opacity:1,height:80,fontSize:"20px",color:"aqua",background:"none",borderBottom:"1px solid aqua",top:"-87vh"},
        reverseExpand: {display:"block",screenWidth: screenWidth < 500 ? "95vw" : 500, opacity:1,height:60,top:"-87vh"},
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

    {/* Top Button */}
    <HomePageButton
        currentAnimation = {topButtonAnimation}
        animations = {topButtonAnimations}
        delay = {topButtonAnimation === "init" ? 0.7:0}
        animationDuration = {0.6}
        animationMode = {"anticipate"}
        className="select-option-btn-top"
        extraClass = {extraClassTopButton}
        innerText = {"მუსიკალური ქვიზები"}
        onClick = { () => {
            setextraClassTopButton("select-option-none-transition") 

            setTopButtonAnimation("stretching")
            setLeftButtonAnimation("hide")
            setRightButtonAnimation("hide")
            setBottomButtonAnimation("hide")

            selectOption("quiz")
        }}
        animationComplete={ (anim) => {
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
    />

    {/* Left Button */}
    <HomePageButton
        currentAnimation = {leftButtonAnimation}
        animations = {leftButtonAnimations}
        delay = {leftButtonAnimation === "init" ? 0.6:0}
        animationDuration = {leftButtonAnimation === "hide" ? 0.2:2}
        animationMode = {"anticipate"}
        className="select-option-btn-left"
        extraClass = {extraClassLeftButton}
        innerText = {"სოციალური ქსელი"}
        onClick = { () => {
        
        }}
        animationComplete={ (anim) => {
            if(anim === "hide"){
                setLeftButtonAnimation("disabled")  
            }
        }}
    />

    {/* Bottom Button */}
    <HomePageButton
        currentAnimation = {bottomButtonAnimation}
        animations = {bottomButtonAnimations}
        delay = {bottomButtonAnimation === "init" ? 1.2:0}
        animationDuration = {bottomButtonAnimation === "hide" ? 0.2:2}
        animationMode = {"anticipate"}
        className="select-option-btn-bottom"
        extraClass = {extraClassBottomButton}
        innerText = {"ბლოგები"}
        onClick = { () => {
        
        }}
        animationComplete={ (anim) => {
            if(anim === "hide"){
                setBottomButtonAnimation("disabled")  
            }
        }}
    />

      {/* Right Button */}
      <HomePageButton
        currentAnimation = {rightButtonAnimation}
        animations = {rightButtonAnimations}
        delay = {rightButtonAnimation === "init" ? 1.8:0}
        animationDuration = {rightButtonAnimation === "hide" ? 0.2:2}
        animationMode = {"anticipate"}
        className="select-option-btn-right"
        extraClass = {extraClassRightButton}
        innerText = {"ჩემს შესახებ"}
        onClick = { () => {
        
        }}
        animationComplete={ (anim) => {
            if(anim === "hide"){
                setBottomButtonAnimation("disabled")  
            }
        }}
    />
       
      
    </div>
  )
})

export default HomePagebuttons