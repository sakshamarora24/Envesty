import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../erpAccordian'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function Erp(){
    pageTitle('Enterprise Resource Planning');
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHeading
                title='Enterprise Resource Planning'
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
                            title='ERP System Integration'
                            subtitle='Integrate an ERP system tailored to your business. We
                            connect all your processes for improved efficiency and data accuracy.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='ERP Customization'
                            subtitle='Customize your ERP solution to match your unique business
                            needs. We adapt the software to align with your specific workflows'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='ERP Implementation'
                            subtitle='Implement your ERP system smoothly. We guide you through the
                            entire process, ensuring minimal disruptions to your operations.'
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
                            <img src="/images/erp.jpeg"   height="150px" width="200px" alt="Service" className='cs-radius_15 w-100' />
                        </Div>
                        <Spacing lg='0' md='40' />
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                        <h6 className="cs-font_50 cs-m0">Streamline your business operations with our robust ERP solutions. Gain real-time
insights, enhance productivity, and drive growth with our tailored ERP systems.</h6>

                    </Div>
                </Div>
            </Div>
            <Spacing lg='90' md='45' />
            <div className='container'>
                <Div className="row">
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_1.svg'
                            title='ERP Software Selection'
                            subtitle=' Impress users with stunning visuals and intuitive interfaces.
                            Our design experts focus on user experience (UX) and user interface (UI) to create
                            engaging mobile apps.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_2.svg'
                            title='Inventory Management'
                            subtitle='Optimize your inventory control with our ERP solutions. Track
                            stock levels, reduce waste, and improve supply chain management.'
                        />
                        <Spacing lg='30' md='30' />
                    </Div>
                    <Div className="col-lg-4">
                        <IconBox
                            icon='/images/icons/service_icon_3.svg'
                            title='Financial Managementg'
                            subtitle='Gain better financial visibility with our ERP financial modules.
                            Manage budgets, financial reporting, and more with ease.'
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
