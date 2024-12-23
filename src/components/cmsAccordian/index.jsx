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
      "question": "How do your WordPress development services enhance the functionality of a website?",
      "answer": "Our WordPress development services focus on customizing and optimizing WordPress sites to meet unique client needs. We tailor every aspect of the site for enhanced functionality and user experience."
    },
    {
      "question": "What approach do you take in developing custom CMS solutions for unique content management needs?",
      "answer": "We build custom CMS solutions from the ground up, tailored specifically to a client's content management needs. Our approach involves understanding your workflow and creating a system that aligns perfectly with your operational requirements."
    },
    {
      "question": "How do you ensure effective CMS integration and customization for businesses?",
      "answer": "Our CMS integration services are designed to seamlessly meld your chosen CMS with your website. We customize the CMS for enhanced functionality, ensuring it suits your specific workflow and business processes."
    },
    {
      "question": "What kind of training and support do you offer for managing CMS effectively?",
      "answer": "We provide comprehensive training and ongoing support to empower your team in managing the CMS. Our focus is on ensuring that you can effectively utilize all features of your CMS, maximizing its potential for your business."
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
