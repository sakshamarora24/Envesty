import React, { useState, useEffect } from 'react';
import Card from '../Card';
// import FunFact from '../FunFact';
import InfoLine from '../InfoLine'
// import Cta from '../Cta';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
// import PortfolioSlider from '../Slider/PortfolioSlider';

// import TestimonialSlider from '../Slider/TestimonialSlider';

// import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
import styles from './Home.module.css';

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(1);
  pageTitle('Home');

  const showcaseData = [
    {
      title: 'Empower Your Business with Financial and <br> Legal Expertise',
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Master Financial Planning and Grow Your Wealth <br> with Confidence',
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Navigate Your Financial Future <br> with Tailored Advice',
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Creating a community of <br> Successful Startups',
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Simplify Your Business Compliance <br> and Scale with Ease',
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Develop the Skills You Need <br> to Succeed in the Modern Economy',
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Unlock Your Entrepreneurial Potential and Build <br> a Thriving Business',
      bgImageUrl: '/images/slider_1.jpeg',
    },
  ];


  // Hero Social Links
  // const heroSocialLinks = [
  //   {
  //     name: 'Instagram',
  //     links: '/',
  //   },
  //   {
  //     name: 'Twitter',
  //     links: '/',
  //   },
  // ];

  // FunFact Data
  // const funfaceData = [
  //   {
  //     title: 'Global Happy Clients',
  //     factNumber: '40',
  //   },
  //   {
  //     title: 'Project Completed',
  //     factNumber: '50',
  //   },
  //   {
  //     title: 'Team Members',
  //     factNumber: '10',
  //   },
  //   {
  //     title: 'Digital products',
  //     factNumber: '2',
  //   },
  // ];

  useEffect(() => {
    pageTitle('Home');
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % showcaseData.length);
    }, 6000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [showcaseData.length]);

  const currentShowcase = showcaseData[currentSlide];



  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title={currentShowcase.title}
        // subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        // btnText="Get a Quote"
        // btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        // heroSocialLinks={heroSocialLinks}
        bgImageUrl={currentShowcase.bgImageUrl}
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <InfoLine
          variant="cs-type1"
          title={`"Empowering Dreams, Simplifying Success – Big4 Services at MSME Prices!"`}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/services"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Skill Development"
                    link="/service/service-details"
                    src="/images/Appblog2.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Financial Compliance"
                    link="/service/service-details"
                    src="/images/latest/pexels-shkrabaanthony-5816298.jpg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Business Compliance"
                    link="/service/service-details"
                    src="/images/demo/The Importance Of Reconciling Your Accounts 1️⃣….jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Transformation"
                    link="/service/service-details"
                    src="/images/block1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />


      {/* <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div> */}
      {/* End Portfolio Section */}


      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          At Envesty, we turn financial challenges into opportunities. With our expert guidance,
          your financial goals become achievable, helping you adapt, grow, and thrive in a constantly changing world.
        </h2>

        {/* <Spacing lg="70" md="70" /> */}
        {/* <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        /> */}
      </Div>


      {/* // Inside your Home component */}
      <Spacing lg="150" md="80" />

      {/* Start Vision and Mission Section */}
      <Div className="container">
        <SectionHeading
          title="Core Vision and Mission"
          subtitle="Our Purpose and Pathway"
          variant="cs-style1 text-center"
        />
        <Spacing lg="50" md="30" />
        <Div className="row">
          {/* Vision Column */}
          <Div className="col-lg-6">
            <Div className="cs-shadow_box_1 p-4">
              <h3 className="cs-font_40 cs-m0">Vision</h3>
              <p className="cs-font_16">
                To empower families, MSMEs, and startups in Tier 2 and Tier 3 cities with financial literacy,
                skill development, mentorship, and legal compliance.
              </p>
            </Div>
          </Div>

          {/* Mission Column */}
          <Div className="col-lg-6">
            <Div className="cs-shadow_box_1 p-4">
              <h3 className="cs-font_40 cs-m0">Mission</h3>
              <p className="cs-font_16">
                We strive to bridge the gap between global opportunities and local talent, ensuring that every individual and small business has the tools,
                knowledge, and mentorship they need to achieve financial stability, grow sustainably, and realize their dreams.
              </p>
            </Div>
          </Div>
        </Div>
      </Div>


      <Spacing lg="150" md="80" />

      {/* Start Target Audience Section */}
      <Div className="container">
        <SectionHeading
          title="Our Target Audience"
          subtitle="Who We Serve"
          variant="cs-style1 text-center"
        />
        <Spacing lg="50" md="30" />
        <Div className="row">
          {/* Families */}
          <Div className="col-lg-4">
            <Div className={`cs-shadow_box_1 ${styles['cs-target_card']}`}>
              <img src="/images/demo/“My Mom Has ADHD__ Stories of Growing Up with an ADD Mother.jpeg" alt="Families" className="cs-icon" />
              <h4 className="cs-font_30">Families</h4>
              <p className="cs-font_16">
                Focused on financial literacy, long-term planning, and guidance for children’s skill acquisition.
              </p>
            </Div>
          </Div>

          {/* Startups & MSMEs */}
          <Div className="col-lg-4">
            <Div className={`cs-shadow_box_1 ${styles['cs-target_card']}`}>
              <img src="/images/demo/Supermarket.jpeg" alt="Startups & MSMEs" className="cs-icon" />
              <h4 className="cs-font_30">Startups & MSMEs</h4>
              <p className="cs-font_16">
                Supporting legal compliance, financial advisory, and mentorship to help them scale and succeed.
              </p>
            </Div>
          </Div>

          {/* Young Entrepreneurs */}
          <Div className="col-lg-4">
            <Div className={`cs-shadow_box_1 ${styles['cs-target_card']}`}>
              <img src="/images/demo/Sprint%20Start%20Up%20Illustrations%20-%20Illustrations.jpeg" alt="Young Entrepreneurs" className="cs-icon" />
              <h4 className="cs-font_30">Young Entrepreneurs</h4>
              <p className="cs-font_16">
                Targeting Gen-Z innovators with mentorship and business advisory to help them build successful ventures.
              </p>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Target Audience Section */}

      <Spacing lg="150" md="80" />

      {/* Start Key Offerings Section */}
      <Div className="container">
        <SectionHeading
          title="Key Offerings"
          subtitle="What We Provide"
          variant="cs-style1 text-center"
        />
        <Spacing lg="50" md="30" />
        <Div className="row">
          {/* Financial Literacy and Advisory */}
          <Div className="col-lg-3 col-sm-6">
            <Div className={`cs-shadow_box_2 ${styles['cs-key_card']}`}>
              <img src="/images/latest/home5.jpeg" alt="Financial Literacy" className="cs-icon" />
              <h5 className="cs-font_20">Financial Literacy and Advisory</h5>
              <p className="cs-font_16">
                We help families and businesses make smart investments and plan for a secure future.
              </p>
            </Div>
          </Div>

          {/* Skill Development */}
          <Div className="col-lg-3 col-sm-6">
            <Div className={`cs-shadow_box_2 ${styles['cs-key_card']}`}>
              <img src="/images/latest/home6.jpeg" alt="Skill Development" className="cs-icon" />
              <h5 className="cs-font_20">Skill Development</h5>
              <p className="cs-font_16">
                Offering skill-building programs in trending fields like AI, digital marketing, and entrepreneurship.
              </p>
            </Div>
          </Div>

          {/* Legal Compliance */}
          <Div className="col-lg-3 col-sm-6">
            <Div className={`cs-shadow_box_2 ${styles['cs-key_card']}`}>
              <img src="/images/BusinessCompliance.jpg" alt="Business Compliance" className="cs-icon" />
              <h5 className="cs-font_20">Business Compliance</h5>
              <p className="cs-font_16">
                We offer registration, tax compliance, and legal advisory services to businesses and families.
              </p>
            </Div>
          </Div>

          {/* Mentorship Services */}
          <Div className="col-lg-3 col-sm-6">
            <Div className={`cs-shadow_box_2 ${styles['cs-key_card']}`}>
              <img src="/images/latest/home8.jpeg" alt="Mentorship Services" className="cs-icon" />
              <h5 className="cs-font_20">Mentorship Services</h5>
              <p className="cs-font_16">
                Providing personalized mentorship programs for startups, young entrepreneurs, and parents.
              </p>
            </Div>
          </Div>

          {/* Community Building */}
          <Div className="col-lg-3 col-sm-6">
            <Div className={`cs-shadow_box_2 ${styles['cs-key_card']}`}>
              <img src="/images/latest/home9.jpeg" alt="Community Building" className="cs-icon" />
              <h5 className="cs-font_20">Community Building</h5>
              <p className="cs-font_16">
                Creating a platform for networking and knowledge sharing within the startup and family ecosystem.
              </p>
            </Div>
          </Div>

          {/* Legal Consultancy */}
          <Div className="col-lg-3 col-sm-6">
            <Div className={`cs-shadow_box_2 ${styles['cs-key_card']}`}>
              <img src="/images/demo/legal.jpeg" alt="Legal Consultancy" className="cs-icon" />
              <h5 className="cs-font_20">Legal Consultancy</h5>
              <p className="cs-font_16">
                We help families and businesses work efficiently by advising them in all legal matters.
              </p>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Key Offerings Section */}

      <Spacing lg="150" md="80" />

      {/* End Vision and Mission Section */}

      {/* <Spacing lg="150" md="80" /> */}

      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/*<Spacing lg="150" md="80" />*/}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}




    </>
  );
}
