import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../BrandAccordian'
import Button from '../Button'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function BrandStrategizing() {
  pageTitle('Brand Strategizing');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Brand Strategizing'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Design working process' 
          subtitle='' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Brand Identity Development'
              subtitle='We work with you to define the essence of your
              brand, crafting a unique and memorable identity that resonates with your target
              audience.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Brand Positioning'
              subtitle='Discover where your brand fits in the market. We develop
              strategies to position your brand effectively and differentiate it from competitors.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Market Research and Analysisg'
              subtitle='Gain a deep understanding of your market and
              audience. Our research and analysis services provide valuable insights to inform
              your brand strategy.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/brand.jpeg" alt="Service"  height="150px" width="200px" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our Brand Improvising Stratigies</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/digitalmarketing' btnText='Brand Messaging and Storytelling' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Logo Design and Visual Branding' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Brand Guidelines and Standards' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Competitive Analysis' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Brand Launch Strategies' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                
              </Div>
             
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        Your brand is your identity. We work closely with you to define and refine your brand
strategy, ensuring consistency and resonance across all touchpoints.
        </h2>
        
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
     
    </>
  )
}
