import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
// import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
// import { Link } from 'react-router-dom'
import './footer.scss'

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    }
  ]

  const serviceMenu = [
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'careers',
      href: '/careers'
    },
    {
      title: 'Contact Us',
      href: '/contact'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row flex">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc='/images/latest/image.png'
                  logoAlt='Logo'
                  logoStyle={{ height: 'auto'}}  // Adjust the height as needed
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget 
                  title="Contact Us"
                  email="support@envesty.in"
                  phone="+91 7086975636"
                  address="Bangalore, India"
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Services' />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title='Book a Free Consultation'
                  placeholder='example@gmail.com'
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright 2024 Envesty.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant='cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
