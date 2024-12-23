import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../CreativeAccordian'
import Button from '../Button'

import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function Creativedirection() {
  pageTitle('Creative Direction');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Creative Direction'
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
              title='Graphic Design'
              subtitle='Make a visual impact with stunning graphics and visuals. Our
              graphic design services cover everything from logos to marketing materials.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Video Production and Editing'
              subtitle='Engage your audience with compelling video
              content. We handle everything from concept development to video editing and
              production.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Photography Services'
              subtitle='Capture the essence of your brand with high-quality
              photography. Our photography services help you tell your brand story through
              visuals.'
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
              <img src="/images/creative.jpeg" alt="Service"   height="150px" width="200px" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most creative Directions </h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/creativedirection' btnText='Art Direction' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/creativedirection' btnText='Copywriting and Content Creation' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/creativedirection' btnText='Concept Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/creativedirection' btnText='Creative Consulting' variant='cs-type2'/>
                
              </Div>

            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        Creativity knows no bounds at Wordlord Media. Our creative direction services bring
fresh ideas and artistic flair to your projects, making your brand truly memorable.
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
