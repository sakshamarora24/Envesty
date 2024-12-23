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
      "question": "How do you ensure seamless ERP system integration for enhanced business efficiency?",
      "answer": "We focus on tailoring the ERP integration to your specific business needs, connecting all your processes to improve overall efficiency and data accuracy, ensuring a seamless and cohesive operational environment."
    },
    {
      "question": "What is your approach to customizing ERP solutions for unique business workflows?",
      "answer": "Our approach to ERP customization involves a deep analysis of your unique business workflows. We adapt and tailor the ERP software to align perfectly with your operational needs, ensuring it complements and enhances your business processes."
    },
    {
      "question": "Can you describe your process for helping businesses select the right ERP software?",
      "answer": "We assist in ERP software selection by evaluating your business goals and operational requirements. Our process involves comparing different ERP options, guiding you to choose the software that best aligns with your business objectives."
    },
    {
      "question": "How do your ERP solutions contribute to more efficient inventory and financial management?",
      "answer": "Our ERP solutions optimize inventory control by enabling accurate tracking of stock levels, reducing waste, and improving supply chain management. Additionally, our financial modules offer enhanced visibility into budgeting, financial reporting, and more, streamlining your financial management processes."
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
