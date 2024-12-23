import React, { useEffect } from 'react';
import SectionHeading from '../SectionHeading';

import Div from '../Div';
import Hero3 from '../Hero/Hero3';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Portfolio2 from '../Portfolio/Portfolio2';
import Portfolio3 from '../Portfolio/Portfolio3';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';
import PricingTableList from '../PricingTable/PricingTableList';

export default function CreativePortfolioHome() {
  pageTitle('Courses offers');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];
  const portfolioData = [
    {
      title: 'WhatsApp Marketing Course',
      subtitle: 'Course 01',
      btnText: 'See Details',
      btnLink: '/whatsaapdetail',
      imageUrl: '/images/whatsaap.jpeg',
      category: 'Marketing',
    },
    {
      title: 'Instagram Marketing Course',
      subtitle: 'Course 02',
      btnText: 'See Details',
      btnLink: '/instagramdetail',
      imageUrl: '/images/Instagram.jpeg',
      category: 'Marketing',
    },
    {
      title: 'Facebook Marketing Course',
      subtitle: 'Course 03',
      btnText: 'See Details',
      btnLink: '/facebookdetail',
      imageUrl: '/images/Facebook.jpeg',
      category: 'Marketing',
    }
  ];
  return (
    <>
      {/* Start Hero Section */}
      <Hero3
        title="Explore Our Digital <br>Marketing Courses"
        
        // btnText={`Let's talk`}
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/hero_bg_4.jpeg"
      />
      {/* End Hero Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ),
      )}
      {/* End Portfolio Section */}

      {/* Start Case Study Section */}
      <Spacing lg="45" md="10" />
      
      
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
      <Spacing lg="150" md="80" />
      {/* End Case Study Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

     
      
    </>
  );
}
