import React from 'react'
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a 
        href="https://www.linkedin.com/company/envesty/"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a 
        href="https://www.instagram.com/envesty.in/profilecard/?igsh=bHgwa3BtZDB2Z2Fu"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://youtube.com/@envesty-in?si=jlgq4s4Z83n4iuK7"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </a>
      <a 
        href="https://www.threads.net/@envesty.in"
        className="cs-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaThreads />
      </a>
    </Div>
  )
}
