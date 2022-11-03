import React from 'react'
import "./style.css"

const HomePagebuttons = () => {

    const buttons = [];

    function makeButtons(buttons){
        const buttonTexts = ["მუსიკალური ქვიზები","სოციალური ქსელი","ჩემს შესახებ","ბლოგები"];
        const options = ["quiz","social","about","blogs"]
        const classNames = ["select-option-btn-top","select-option-btn-left","select-option-btn-right","select-option-btn-bottom"]
        let animationDelay = 1;

        for (let i = 0; i < 4; i++) {
            const button = <button key={i} onClick={ () => {selectOption(options[i])}} style={{animationDelay : animationDelay+"s"}}
            className={"select-option-btn " + classNames[i]}>{buttonTexts[i]} </button>

            buttons.push(button)

            animationDelay += 0.5;
        }     
    }

    makeButtons(buttons)

    const selectOption = (option) => {
        
    }

  return (
    <div>
        {
            buttons
        }
    </div>
  )
}

export default HomePagebuttons