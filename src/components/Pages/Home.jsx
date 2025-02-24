import React, { useState, useEffect } from 'react';
// import InfoLine from '../InfoLine';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ConsultationForm from '../ConsultationForm/ConsultationForm';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showConsultation, setShowConsultation] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
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

  useEffect(() => {
    pageTitle('Home');
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % showcaseData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [showcaseData.length]);

  useEffect(() => {
    // Show popup after 3 seconds if it hasn't been shown before
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowConsultation(true);
        setHasShownPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasShownPopup]);

  const currentShowcase = showcaseData[currentSlide];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <ConsultationForm 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)} 
      />
      <Hero
        title={currentShowcase.title}
        // btnText="Book a Free Consultation"
        // btnLink="/contact"
        // subtitle="Big4 Services at MSME Prices!"
        scrollDownId="#service"
        bgImageUrl={currentShowcase.bgImageUrl}
      />

      {/* <Div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <InfoLine
            variant="cs-type1"
            title={`"Empowering Dreams, Simplifying Success – Big4 Services at MSME Prices!"`}
          />
        </motion.div>
      </Div> */}

      <Div className={styles.ctaSection}>
        <motion.div
          className={styles.ctaButtons}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <Link to="/services" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
            <span className={styles.buttonText}>Explore Our Services</span>
            <span className={styles.buttonBorder}></span>
          </Link>
        
          <Link to="/contact" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
            <span className={styles.buttonText}>Book a Free Consultation</span>
            <span className={styles.buttonBorder}></span>
          </Link>

        </motion.div>
      </Div>

      <Spacing lg="150" md="80" />

      <Div className="container">
        <SectionHeading
          title="Services We Offer"
          subtitle="How We Can Help"
          variant="cs-style1 text-center"
        />
        <Spacing lg="50" md="30" />
        <Div className={styles.servicesGrid}>
          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/business.svg" alt="Virtual Co-Founder" />
            </div>
            <h3>Virtual Co-Founder</h3>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/digital.svg" alt="Digital Transformation" />
            </div>
            <h3>Digital Transformation</h3>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/legal.svg" alt="Legal Consultancy" />
            </div>
            <h3>Legal Consultancy</h3>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/consulting.svg" alt="Business Consultancy" />
            </div>
            <h3>Business Consultancy</h3>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/financial.svg" alt="Personal Finance" />
            </div>
            <h3>Personal Finance</h3>
          </motion.div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />

      <Div className={styles.missionVisionSection}>
        <Div className="container">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="What Drives Us"
            variant="cs-style1 text-center text-white"
          />
          <Spacing lg="50" md="30" />
          <Div className={styles.missionVisionGrid}>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.cardIcon}>
                <img src="/images/icons/mission_icon.svg" alt="Mission" />
              </div>
              <h3>Our Mission</h3>
              <p>To empower businesses and individuals with accessible, high-quality professional services that drive growth and ensure success.</p>
              <ul className={styles.missionPoints}>
                <li>Democratize access to premium services</li>
                <li>Foster growth and innovation</li>
                <li>Build lasting partnerships</li>
                <li>Deliver measurable impact</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.visionCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.cardIcon}>
                <img src="/images/icons/vision_icon.svg" alt="Vision" />
              </div>
              <h3>Our Vision</h3>
              <p>To create a world where every business and individual has access to the expertise and resources needed to thrive.</p>
              <ul className={styles.visionPoints}>
                <li>World-class expertise for all</li>
                <li>Simplified compliance</li>
                <li>Digital transformation</li>
                <li>Sustainable growth</li>
              </ul>
            </motion.div>
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
                Supporting business compliance, financial advisory, and mentorship to help them scale and succeed.
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
