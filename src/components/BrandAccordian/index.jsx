import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      "question": "How do you approach brand identity development to resonate with a specific target audience?",
      "answer": "Our approach involves collaborating closely with you to understand and define the core essence of your brand. We focus on crafting a unique and memorable brand identity that not only reflects your values but also deeply resonates with your target audience."
    },
    {
      "question": "What strategies do you use for effective brand positioning in a competitive market?",
      "answer": "We conduct thorough market analysis to understand where your brand stands in relation to competitors. Our strategies are tailored to position your brand distinctively, ensuring it stands out and connects with the right audience."
    },
    {
      "question": "How do your market research and analysis services inform brand strategy development?",
      "answer": "Our market research and analysis provide deep insights into consumer behavior and market trends. This information is crucial in shaping a brand strategy that is both relevant and impactful in your target market."
    },
    {
      "question": "Can you describe your approach to crafting brand messaging and storytelling?",
      "answer": "Our approach to brand messaging centers around creating an authentic and emotional connection with your audience. We help you craft a compelling narrative that effectively tells your brand's story, engaging customers on a deeper level."
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
