import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(NaN)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      "Question": "How can I start a business with limited funds?",
      "Answer": "Starting a business with limited funds requires creativity and strategic planning. Focus on creating a minimum viable product (MVP), use free or low-cost tools, and leverage partnerships or collaborations. Crowdfunding and small business loans can also help."
    },
    {
      "Question": "What certifications are necessary to grow my business?",
      "Answer": "The certifications depend on your industry. For startups, certifications like GST registration, MSME registration, and business incorporation under the Companies Act are essential. For individuals, certifications in project management (e.g., PMP) or financial literacy (e.g., NISM) can enhance credibility."
    },
    {
      "Question": "How can I ensure my startup complies with legal regulations?",
      "Answer": "Compliance involves adhering to tax laws, labor regulations, and business-specific laws. Tools like ClearTax and VakilSearch can help automate compliance. Partnering with a legal consultant is also highly recommended."
    },
    {
      "Question": "What are the trending skills my team or I should focus on?",
      "Answer": "Trending skills include AI and machine learning, digital marketing, content creation, and financial management. Platforms like Coursera, Udemy, and LinkedIn Learning offer affordable courses to help develop these skills."
    },
    {
      "Question": "How do I create a business plan for my startup?",
      "Answer": "A business plan should include an executive summary, market analysis, financial projections, and a marketing strategy. Templates from platforms like LivePlan or Canva can simplify the process."
    },
    {
      "Question": "What mentorship options are available for startups?",
      "Answer": "Mentorship options include joining accelerators or incubators, connecting with industry experts on platforms like LinkedIn, or participating in online startup communities."
    },
    {
      "Question": "How can I upskill myself while managing my business?",
      "Answer": "Use flexible learning platforms like Skillshare or Udemy that offer self-paced courses. Dedicate specific hours weekly for skill development to balance learning with business operations."
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.Question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.Answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
