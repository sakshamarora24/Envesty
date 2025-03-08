import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  pageTitle('Services');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.servicesContainer}>
      <PageHeading 
        title='Our Services'
        bgSrc='images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='container'>
        <Div className="row">
          <Div className="col-xl-4">
            <div className={styles.sectionHeading}>
              <SectionHeading
                title='Expert Solutions for Your Business Growth' 
                subtitle='Our Services'
                titleClassName={styles.blackTitle}
              />
            </div>
            <Spacing lg='90' md='45'/>
          </Div>
          <Div className='col-xl-8'>
            <Div className='row'>
              <Div className='col-lg-4 col-sm-6'>
                <div className={styles.serviceCard}>
                  <Card
                    title='Business Advisory'
                    link='/service/business-advisory'
                    src='/images/service_1.jpeg'
                    alt='Business Advisory'
                  />
                </div>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className='col-lg-4 col-sm-6'>
                <div className={styles.serviceCard}>
                  <Card
                    title='Financial Planning'
                    link='/service/financial-planning'
                    src='/images/service_2.jpeg'
                    alt='Financial Planning'
                  />
                </div>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className='col-lg-4 col-sm-6'>
                <div className={styles.serviceCard}>
                  <Card
                    title='Investment Advisory'
                    link='/service/investment-advisory'
                    src='/images/service_3.jpeg'
                    alt='Investment Advisory'
                  />
                </div>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className='col-lg-4 col-sm-6'>
                <div className={styles.serviceCard}>
                  <Card
                    title='Legal Services'
                    link='/service/legal-services'
                    src='/images/service_4.jpeg'
                    alt='Legal Services'
                  />
                </div>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className='col-lg-4 col-sm-6'>
                <div className={styles.serviceCard}>
                  <Card
                    title='Wealth Management'
                    link='/service/wealth-management'
                    src='/images/service_5.jpeg'
                    alt='Wealth Management'
                  />
                </div>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className='col-lg-4 col-sm-6'>
                <div className={styles.serviceCard}>
                  <Card
                    title='Digital Transformation'
                    link='/service/digital-transformation'
                    src='/images/service_6.jpeg'
                    alt='Digital Transformation'
                  />
                </div>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <div className={styles.pricingSection}>
        <Div className="container">
          <div className={styles.sectionHeading}>
            <SectionHeading
              title='Investment Plans' 
              subtitle='Pricing & Packages'
              titleClassName={styles.blackTitle}
            />
          </div>
          <Spacing lg='85' md='40'/>
          <PricingTableList/>
        </Div>
      </div>
      <Spacing lg='125' md='55'/>
      <div className={styles.testimonialSection}>
        <TestimonialSlider/>
      </div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <div className={styles.ctaSection}>
          <Cta 
            title="Let's Discuss Your Business Growth" 
            btnText='Schedule a Consultation' 
            btnLink='/contact' 
            bgSrc='/images/cta_bg.jpeg'
          />
        </div>
      </Div>
      <Spacing lg='80' md='40'/>
    </div>
  )
}
