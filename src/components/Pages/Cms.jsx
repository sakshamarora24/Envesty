import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../cmsAccordian'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function Cms() {
    pageTitle('Content Management Systems');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHeading
                title='Content Management Systems'
                bgSrc='/images/service_hero_bg.jpeg'
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
                            title='WordPress Development'
                            subtitle='Harness the power of WordPress with our expert
                            development services. We customize and optimize your WordPress site for your
                            unique needs.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Custom CMS Solutions'
                            subtitle='When off-the-shelf CMS platforms do not fit, we build
                            custom solutions tailored to your content management needs.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='CMS Integration and Customization'
                            subtitle=' Integrate your chosen CMS seamlessly
                            with your website. We customize and enhance CMS functionality to suit your
                            workflow.'
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
                            <img src="/images/cms.jpeg" alt="Service"  height="150px" width="200px" className='cs-radius_15 w-100' />
                        </Div>
                        <Spacing lg='0' md='40' />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h6 className="cs-font_50 cs-m0">Effortlessly manage your website content with our user-friendly CMS solutions. Update,
edit, and publish content with ease, all while maintaining your site's integrity.</h6>

                    </Div>
                </Div>
            </Div>
            <Spacing lg='90' md='45' />
            <div className='container'>
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Training and Support'
                            subtitle='Empower your team to manage your CMS effectively.
                            We provide training and ongoing support to ensure you get the most from your
                            CMS.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Plugin and Module Development'
                            subtitle='Extend the capabilities of your CMS with
                            custom plugins and modules. We develop solutions to meet your specific
                            requirements.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Content Migration'
                            subtitle='Seamlessly migrate content from your old system to your
                            new CMS. Our experts ensure a smooth transition without data loss.'
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
