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
      "question": "What sets your graphic design services apart in creating a brand's visual identity?",
      "answer": "Our graphic design services are tailored to create unique and visually stunning designs, ensuring that every element, from logos to marketing materials, distinctly represents your brand's identity."
    },
    {
      "question": "How do you ensure the effectiveness of your video production and editing services?",
      "answer": "Our video production process is comprehensive, from concept to editing, focusing on creating engaging and meaningful content that aligns perfectly with your brand's messaging and audience's interests."
    },
    {
      "question": "What role do your photography services play in enhancing a brand's storytelling?",
      "answer": "Our photography services capture the essence of your brand, using high-quality visuals to tell your story in a compelling way, enhancing the overall narrative and emotional connection with your audience."
    },
    {
      "question": "How do your creative campaign development services achieve marketing goals?",
      "answer": "We focus on innovative and targeted creative campaign development, aligning our strategies with your marketing goals to create campaigns that resonate with your audience and drive desired outcomes."
    }
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
