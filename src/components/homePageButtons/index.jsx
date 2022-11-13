import React, { useEffect, useRef } from 'react'
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { useState } from 'react'
import "./style.css"

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

    const [animateTopButton, setAnimateTopButton] = useState("")
    const [animateLeftButton, setAnimateLeftButton] = useState("")
    const [animateBottomButton, setAnimateBottomButton] = useState("")
    const [animateRightButton, setAnimateRightButton] = useState("")



    useEffect(() => {
        topButtonRef.current.addEventListener('animationend', (anim) => {
            if (anim.animationName === "hide-option-btn") {
                setAnimateTopButton("display-none")
            }
        });
        leftButtonRef.current.addEventListener('animationend', (anim) => {
            if (anim.animationName === "hide-option-btn") {
                setAnimateLeftButton("display-none")
            }
        });
        rightButtonRef.current.addEventListener('animationend', (anim) => {
            if (anim.animationName === "hide-option-btn") {
                setAnimateRightButton("display-none")
            }
        });
        bottomButtonRef.current.addEventListener('animationend', (anim) => {
            if (anim.animationName === "hide-option-btn") {
                setAnimateBottomButton("display-none")
            }
        });
    },[])


    const selectOption = (option) => {
        setAnimateTopButton("animate-top-button")
        setAnimateLeftButton("hide-option-btn")
        setTimeout(() => {
            setAnimateBottomButton("hide-option-btn")
        },400);
        setTimeout(() => {
            setAnimateRightButton("hide-option-btn")
            props.webIconClass("web-icon-to-right-anim")
            props.newPageMode("quiz");
        },800);
    }

    function backToHome(){
        topButtonRef.current.style.animationDirection = "alternate-reverse";
        topButtonRef.current.style.animationName = "top-button-anim-reverse";

        setAnimateRightButton(" ")
        setAnimateLeftButton(" ")
        setAnimateBottomButton(" ")
    }

  return (
    <div>
        {/* onAnimationEnd={} */}
        <button  ref={topButtonRef} onClick={ () => {selectOption("quiz")}} style={{animationDelay : "1s"}} className={'select-option-btn center select-option-btn-top ' + animateTopButton}> მუსიკალური ქვიზები </button>
        <button ref={leftButtonRef} onClick={ () => {selectOption("social")}} style={{animationDelay : "1.5s"}} className={'select-option-btn center select-option-btn-left ' + animateLeftButton}> სოციალური ქსელი </button>
        <button ref={rightButtonRef} onClick={ () => {selectOption("about")}} style={{animationDelay : "2s"}} className={'select-option-btn center select-option-btn-right ' + animateRightButton}> ჩემს შესახებ </button>
        <button ref={bottomButtonRef} onClick={ () => {selectOption("blogs")}} style={{animationDelay : "2.5s"}} className={'select-option-btn center select-option-btn-bottom ' + animateBottomButton}> ბლოგები </button> 
    </div>
  )
})

export default HomePagebuttons