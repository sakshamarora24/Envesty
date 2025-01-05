import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
// import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
// import TestimonialSlider from '../Slider/TestimonialSlider'
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
            {/*<Spacing lg='145' md='80' />*/}
            {/*<Div className="container">*/}
            {/*    <SectionHeading*/}
            {/*        title='Design working process'*/}
            {/*        subtitle=''*/}
            {/*        variant='cs-style1 text-center'*/}
            {/*    />*/}
            {/*    <Spacing lg='90' md='45' />*/}
            {/*    <Div className="row">*/}
            {/*        <Div className="col-lg-4">*/}
            {/*            <IconBox*/}
            {/*                icon='/images/icons/service_icon_1.svg'*/}
            {/*                title='Search Engine Optimization (SEO)'*/}
            {/*                subtitle='Enhance your online visibility and organic search rankings with our SEO services.'*/}
            {/*            />*/}
            {/*            <Spacing lg='30' md='30' />*/}
            {/*        </Div>*/}
            {/*        <Div className="col-lg-4">*/}
            {/*            <IconBox*/}
            {/*                icon='/images/icons/service_icon_2.svg'*/}
            {/*                title='Content Marketing'*/}
            {/*                subtitle='Craft compelling content to resonate with your target audience. We help tell your brand story effectively.'*/}
            {/*            />*/}
            {/*            <Spacing lg='30' md='30' />*/}
            {/*        </Div>*/}
            {/*        <Div className="col-lg-4">*/}
            {/*            <IconBox*/}
            {/*                icon='/images/icons/service_icon_3.svg'*/}
            {/*                title='Social Media Marketing'*/}
            {/*                subtitle='Engage with your audience through tailored social media strategies to drive conversions.'*/}
            {/*            />*/}
            {/*            <Spacing lg='30' md='30' />*/}
            {/*        </Div>*/}
            {/*    </Div>*/}
            {/*</Div>*/}

            {/* New Section with Moving Service Boxes */}
            <Spacing lg='120' md='50' />
            <Div className="container">
                <SectionHeading title="Our Services" subtitle="" />
                <Spacing lg='55' md='30' />
                <Div className="row service-boxes">
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_1.svg' alt="PPC" />
                            <h4>Financial Advisory
                            </h4>
                            <p>Personalized financial planning to help families achieve goals without debt. Collaborations with certified financial advisors to provide expert guidance.
                            </p>
                        </div>
                    </Div>
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_2.svg' alt="Email Marketing" />
                            <h4>Skill Development COnsultancy</h4>
                            <p>Partnering with ed-tech platforms  to deliver cutting-edge skills. Offering curated resources for trending fields like AI, digital marketing, and entrepreneurship.</p>
                        </div>
                    </Div>
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_3.svg' alt="Influencer Marketing" />
                            <h4>Business Compliance</h4>
                            <p>Simplified compliance solutions for MSMEs and startups, covering taxation, registrations, and filings. Partnerships with experienced lawyers for end-to-end legal support.</p>
                        </div>
                    </Div>
                    <Div className="col-lg-3 col-sm-6">
                        <div className="service-box cs-hover-effect">
                            <img src='/images/icons/service_icon_1.svg' alt="Video Marketing" />
                            <h4>Mentorship Programs</h4>
                            <p>Connecting individuals and businesses with seasoned mentors for guidance and growth. Hosting group mentorship sessions and workshops to inspire innovation.</p>
                        </div>
                    </Div>
                </Div>
            </Div>

            <Spacing lg='200' md='80' />
            {/*<TestimonialSlider />*/}
            {/*<Spacing lg='145' md='80' />*/}
            <Div className="container cs-shape_wrap_4">
                <Div className="cs-shape_4"></Div>
                <Div className="cs-shape_4"></Div>
                <Div className="container">
                    <Div className="row">
                        <Div className="col-xl-5 col-lg-6">
                            <SectionHeading
                                title='Some Frequently Asked Questions and Answers'
                                subtitle=''
                            />
                            <Spacing lg='90' md='45' />
                        </Div>
                        <Div className="col-lg-6 offset-xl-1">
                            <Accordion />
                        </Div>
                    </Div>
                    <Spacing lg='200' md='45' />
                </Div>
            </Div>
        </>
    )
}
