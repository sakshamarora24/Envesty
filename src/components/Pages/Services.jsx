import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function DigitalMarketing() {
    pageTitle('Services');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHeading
                title='Our Services'
                bgSrc='/images/hero_bg_3.jpeg'
                pageLinkText={params.serviceDetailsId}
            />
            <Spacing lg='145' md='80' />
            <Div className="container">
                <SectionHeading
                    title='Design working process'
                    subtitle=''
                    variant='cs-style1 text-center'
                />
                <Spacing lg='90' md='45' />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Search Engine Optimization (SEO)'
                            subtitle='Enhance your online visibility and organic search rankings with our SEO services.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Content Marketing'
                            subtitle='Craft compelling content to resonate with your target audience. We help tell your brand story effectively.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Social Media Marketing'
                            subtitle='Engage with your audience through tailored social media strategies to drive conversions.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                </Div>
            </Div>

            {/* New Section with Moving Service Boxes */}
            <Spacing lg='120' md='50' />
            <Div className="container">
                <SectionHeading title="Our Services" subtitle="Explore our wide range of digital marketing services" />
                <Spacing lg='55' md='30' />
                <Div className="row service-boxes">
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_1.svg' alt="PPC" />
                            <h4>Pay-Per-Click (PPC) Advertising</h4>
                            <p>Get immediate results with PPC advertising campaigns, maximizing ROI.</p>
                        </div>
                    </Div>
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_2.svg' alt="Email Marketing" />
                            <h4>Email Marketing</h4>
                            <p>Boost customer retention with personalized email campaigns and higher sales.</p>
                        </div>
                    </Div>
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_3.svg' alt="Influencer Marketing" />
                            <h4>Influencer Marketing</h4>
                            <p>Partner with influencers to broaden your reach and create authentic campaigns.</p>
                        </div>
                    </Div>
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_4.svg' alt="Video Marketing" />
                            <h4>Video Marketing</h4>
                            <p>Engage and captivate your audience with impactful video content strategies.</p>
                        </div>
                    </Div>
                </Div>
            </Div>

            <Spacing lg='150' md='80' />
            <TestimonialSlider />
            <Spacing lg='145' md='80' />
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
                            <Spacing lg='90' md='45' />
                        </Div>
                        <Div className="col-lg-6 offset-xl-1">
                            <Accordion />
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    )
}
