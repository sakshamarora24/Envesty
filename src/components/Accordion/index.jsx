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
      "question": "How do your SEO services enhance website visibility and organic search rankings?",
      "answer": "Our SEO services are focused on optimizing your website for better visibility in search engines. We employ advanced strategies including keyword optimization, backlink building, and on-page SEO techniques to improve your organic search rankings, driving more traffic and leads to your business."
    },
    {
      "question": "Can you detail the approach your team takes in crafting effective content marketing strategies?",
      "answer": "Our content marketing approach is centered around understanding your brand and audience. We create high-quality, engaging content tailored to your target market. From blog posts to infographics, our aim is to tell your brand's story in a way that resonates with your audience and fosters lasting connections."
    },
    {
      "question": "What makes your social media marketing strategies successful in building brand loyalty and driving conversions?",
      "answer": "Our social media marketing strategies are built on deep audience insights and creative storytelling. We create engaging content and campaigns that resonate with your audience. Our focus is on building a strong brand presence across various platforms, engaging with your audience, and driving conversions through targeted social media tactics."
    },
    {
      "question": "How do you ensure PPC advertising campaigns are cost-effective and yield high ROI?",
      "answer": "Our PPC advertising campaigns are meticulously planned and executed. We focus on targeting the right audience at the right time with the right message. Our strategies are data-driven, ensuring that every campaign is cost-effective and designed to maximize your return on investment."
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
