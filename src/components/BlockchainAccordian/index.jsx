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
      "question": "What expertise do you offer in smart contract development for blockchain platforms?",
      "answer": "We specialize in creating, auditing, and deploying robust smart contracts on platforms like Ethereum and Binance Smart Chain. Our services ensure trust and automation in your business processes through expertly coded smart contract solutions."
    },
    {
      "question": "How do you approach decentralized application (DApp) development for various sectors?",
      "answer": "Our DApp development process involves leveraging blockchain technology to build decentralized, secure applications for diverse use cases, including finance, gaming, supply chain, and healthcare, ensuring transparency and security in operations."
    },
    {
      "question": "Can you describe your services in private blockchain development and its benefits for enterprises?",
      "answer": "We offer private blockchain development services to create permissioned networks that provide enhanced security and control. These networks ensure data privacy and selective access, making them ideal for enterprise applications seeking confidentiality and efficiency."
    },
    {
      "question": "What kind of blockchain integration services do you provide for existing business systems?",
      "answer": "Our blockchain integration services focus on enhancing your existing systems with blockchain technology to improve transparency, security, and efficiency. We ensure seamless integration, facilitating smooth adoption and optimizing your business processes."
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
