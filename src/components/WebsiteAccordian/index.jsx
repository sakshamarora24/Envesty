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
      "question": "What approach do you take to ensure a custom website design truly reflects a brand’s identity?",
      "answer": "We focus on understanding your brand’s unique identity and goals. Our approach involves personalized consultations to capture the essence of your brand, followed by creating a visually stunning and unique website design that captivates and engages your audience."
    },
    {
      "question": "How do you build e-commerce websites that enhance online shopping experiences and drive sales?",
      "answer": "Our e-commerce website development is centered around creating a seamless and user-friendly shopping experience. We incorporate secure payment gateways, intuitive navigation, and effective product displays to ensure a smooth shopping journey that encourages sales."
    },
    {
      "question": "Can you describe how responsive web design is integrated into your website projects?",
      "answer": "Responsive web design is a key component in our projects. We ensure that our websites are optimized for various screen sizes and devices, providing a consistent and accessible experience for users on desktops, tablets, and smartphones."
    },
    {
      "question": "How do your CMS solutions empower clients to manage and update their website content?",
      "answer": "Our CMS solutions are designed to be user-friendly and intuitive, allowing clients to easily manage and update their website content. We provide training and support to ensure clients can confidently control and refresh their web content as needed."
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
