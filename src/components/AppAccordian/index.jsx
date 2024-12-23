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
      "question": "What strategies does your team use to ensure Android apps are compatible across various devices?",
      "answer": "Our Android development team prioritizes compatibility by using responsive design techniques and thorough testing on multiple devices. We focus on optimizing performance and user experience across a wide range of Android devices, ensuring that your app delivers consistent functionality and aesthetics regardless of the device."
    },
    {
      "question": "How do you approach iOS app development to deliver seamless experiences on Apple devices?",
      "answer": "For iOS app development, we leverage the latest tools and technologies provided by Apple. Our team focuses on creating sleek, intuitive apps that fully utilize the capabilities of iPhones and iPads. We pay close attention to Apple's design guidelines to ensure a seamless and engaging user experience."
    },
    {
      "question": "Can you explain the benefits of choosing cross-platform app development over native app development?",
      "answer": "Cross-platform app development offers the advantage of broader audience reach with a single codebase. It is a cost-effective solution that saves significant time and resources while maintaining app performance and user experience across multiple platforms. This approach is ideal for businesses looking to target both Android and iOS users without the need for developing separate apps for each platform."
    },
    {
      "question": "What is your process for mobile app UI/UX design to ensure high user engagement and satisfaction?",
      "answer": "Our UI/UX design process involves in-depth research into user behavior and preferences. We focus on creating visually appealing designs coupled with intuitive navigation to enhance user engagement. Our design experts prioritize usability while infusing creativity to ensure that the app not only looks great but also provides an effortless user experience."
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
