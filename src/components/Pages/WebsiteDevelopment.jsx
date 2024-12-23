import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../WebsiteAccordian'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function WebsiteDevelopment() {
    pageTitle('Website Development');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHeading
                title='Website Development'
                bgSrc='/images/service_hero_bg.jpeg'
                pageLinkText={params.serviceDetailsId}
            />
            <Spacing lg='145' md='80' />
            <Div className="container">
                <SectionHeading
                    title='Design working process'
                    subtitle='Development'
                    variant='cs-style1 text-center'
                />
                <Spacing lg='90' md='45' />
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Custom Website Design'
                            subtitle='Stand out with a unique and visually stunning website tailored
                            to your brand. We design custom websites that captivate your audience.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='E-Commerce Website Development'
                            subtitle='Create a seamless online shopping experience
                            with our e-commerce solutions. We build secure and user-friendly e-commerce websites
                            that drive sales.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Responsive Web Design'
                            subtitle='Reach users on all devices with responsive web design. Our
                            websites adapt to various screen sizes, ensuring a consistent and accessible
                            experience.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                </Div>
            </Div>



            <Spacing lg='120' md='50' />
            <Div className="container">
                <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                        <Div className="cs-radius_15 cs-shine_hover_1">
                            <img src="/images/website.jpeg" alt="Service" height="150px" width="200px" className='cs-radius_15 w-100' />
                        </Div>
                        <Spacing lg='0' md='40' />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h5 className="cs-font_50 cs-m0">A sleek and functional website is the cornerstone of your online presence. We design
and develop stunning websites that not only look great but also deliver exceptional user
experiences</h5>

                    </Div>
                </Div>
            </Div>
            <Spacing lg='90' md='45' />
            <div className='container'>
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Content Management Systems (CMS)'
                            subtitle='Easily manage and update your website
                            content with our CMS solutions. We provide user-friendly systems that put you in control.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Web Application Development'
                            subtitle='Turn your ideas into interactive web applications. Our
                            developers create dynamic web applications that engage users and deliver value.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Website Redesign and Updates'
                            subtitle='Give your existing website a fresh look and enhanced
                            functionality. We revamp and update websites to keep them relevant and effective.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                </Div>
            </div>

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
