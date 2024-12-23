import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../BlockchainAccordian'
import Button from '../Button'

import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function BlockChainDevelopment() {
  pageTitle('BlockChain Development');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='BlockChain Development '
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
              title='Smart Contract Development'
              subtitle='Smart contracts are self-executing contracts with
              the terms of the agreement directly written into code. We specialize in
              developing, auditing, and deploying smart contracts on various blockchain
              platforms like Ethereum, Binance Smart Chain, and more. Ensure trust and
              automation in your business processes with our smart contract expertise.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Decentralized Application (DApp) Developmen'
              subtitle=' DApps leverage the power of
              blockchain technology to create decentralized and secure applications. Our team
              of developers can design and build DApps for a variety of use cases, from
              finance and gaming to supply chain and healthcare.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Private Blockchain Development'
              subtitle='For organizations seeking enhanced security
              and control, we provide private blockchain development services. Create
              permissioned networks that ensure data privacy and selective access, ideal for
              enterprise applications.'
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
              <img src="/images/Blockchain.jpeg" alt="Service"  height="150px" width="200px" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our Brand Blockchain Teaching Skills Stratigies</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/digitalmarketing' btnText='Blockchain Consultation' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Blockchain Security and Auditing' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Consensus Algorithm Development' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/digitalmarketing' btnText='Blockchain Wallet Development' variant='cs-type2'/>
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
