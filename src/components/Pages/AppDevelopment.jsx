import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../AppAccordian'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function AppDevelopment() {
    pageTitle('App Development');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHeading
                title='App Development'
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
                            title='Android App Development'
                            subtitle='Create powerful and user-friendly Android applications
                            tailored to your specific business needs. Our Android development team ensures
                            compatibility across a wide range of devices.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='iOS App Development'
                            subtitle='Deliver seamless experiences to Apple users with our iOS app
                            development services. We build sleek and intuitive apps for iPhones and iPads.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Cross-Platform App Development'
                            subtitle='Reach a broader audience with apps that work on
                            multiple platforms. Our cross-platform solutions save time and resources while ensuring
                            a consistent user experience.'
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
                            <img src="/images/App.jpeg" height="150px" width="200px" alt="Service" className='cs-radius_15 w-100' />
                        </Div>
                        <Spacing lg='0' md='40' />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h6 className="cs-font_50 cs-m0">In a world that runs on mobile, having a standout app is essential. Our app development
team crafts user-friendly and feature-rich applications for iOS and Android, tailored to
your unique requirements.</h6>

                    </Div>
                </Div>
            </Div>
            <Spacing lg='90' md='45' />
            <div className='container'>
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='Mobile App UI/UX Design'
                            subtitle=' Impress users with stunning visuals and intuitive interfaces.
                            Our design experts focus on user experience (UX) and user interface (UI) to create
                            engaging mobile apps.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='App Maintenance and Support'
                            subtitle='Keep your app running smoothly with our maintenance
                            and support services. We provide updates, bug fixes, and technical assistance to ensure
                            optimal performance.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='App Prototyping and Wireframing'
                            subtitle=' Start your app development journey with a solid
                            foundation. Our prototyping and wireframing services help you visualize and refine your
                            app concept.'
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
