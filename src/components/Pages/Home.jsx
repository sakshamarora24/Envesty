import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import InfoLine from '../InfoLine';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';
import styles from './Home.module.css';
import { motion } from 'framer-motion';
import ConsultationForm from '../ConsultationForm/ConsultationForm';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showConsultation, setShowConsultation] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const navigate = useNavigate();
  pageTitle('Home');

  const showcaseData = [
    {
      title: 'Your Virtual Co-Founder and Wealth Partner',
      buttons: (
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/services')}
          >
            Explore Our Services
          </button>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/contact')}
          >
            Book Free Consultation
          </button>
        </div>
      ),
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Unlock Your Entrepreneurial Potential and Build a Thriving Business',
      buttons: (
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/services')}
          >
            Explore Our Services
          </button>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/contact')}
          >
            Book Free Consultation
          </button>
        </div>
      ),
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Simplify Your Business Compliance and Scale with Ease',
      buttons: (
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/services')}
          >
            Explore Our Services
          </button>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/contact')}
          >
            Book Free Consultation
          </button>
        </div>
      ),
      bgImageUrl: '/images/slider_1.jpeg',
    },
    {
      title: 'Master Financial Planning and Grow Your Wealth with Confidence',
      buttons: (
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/services')}
          >
            Explore Our Services
          </button>
          <button 
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={() => navigate('/contact')}
          >
            Book Free Consultation
          </button>
        </div>
      ),
      bgImageUrl: '/images/slider_1.jpeg',
    },
    // {
    //   title: 'Navigate Your Financial Future <br> with Tailored Advice',
    //   bgImageUrl: '/images/slider_1.jpeg',
    // },
    // {
    //   title: 'Develop the Skills You Need <br> to Succeed in the Modern Economy',
    //   bgImageUrl: '/images/slider_1.jpeg',
    // },
    // {
    //   title: 'Unlock Your Entrepreneurial Potential and Build <br> a Thriving Business',
    //   bgImageUrl: '/images/slider_1.jpeg',
    // },
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

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <>
      <ConsultationForm 
        isOpen={showConsultation} 
        onClose={() => setShowConsultation(false)} 
      />
      <Hero
        title={currentShowcase.title}
        subtitle={currentShowcase.subtitle}
        description={currentShowcase.description}
        buttons={currentShowcase.buttons}
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

      {/* <Div className={styles.ctaSection}>
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
      </Div> */}
      <Spacing lg="150" md="80" />

<Div className={styles.statsContainer}>
  {[
    { value: '20+', label: 'Business Scaled' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24x7', label: 'Support' },
    { value: '10+', label: 'Expert Mentors' }
  ].map((stat, index) => (
    <motion.div
      key={index}
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className={styles.statValue}>{stat.value}</h3>
      <p className={styles.statLabel}>{stat.label}</p>
    </motion.div>
  ))}
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

      <Div className={styles.missionVisionSection}>
        <Div className="container">
          <SectionHeading
            title="Choose Your Growth Plan"
            subtitle="Comprehensive solutions for both business scaling and personal wealth management."
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
                <img src="/images/icons/mission_icon.svg" alt="Business Service" />
              </div>
              <h3>Business Service</h3>
              <p>Scale your business with experts and comprehensive support</p>
              <ul className={styles['aligned-list']}>
                <li>Customised solutions tailored to your business needs</li>
                <li>Expert guidance and support throughout the journey</li>
                <li>Support for business development, marketing, and finance</li>
                <li>Access to a network of industry experts and resources</li>
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
                <img src="/images/icons/vision_icon.svg" alt="Personal Finance" />
              </div>
              <h3>Personal Finance</h3>
              <p>Build and manage your wealth with personalised startegies</p>
              <ul className={styles['aligned-list']}>
                <li>Long and Short term Financial Planning</li>
                <li>Complete Wealth Management</li>
                <li>Guidance and Investment Advisory</li>
                <li>Masterclasses to uplift your knowledge</li>
              </ul>
            </motion.div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />

      <Div className="container">
        <SectionHeading
          title="Business Growth Services"
          subtitle="Comprehensive Solutions to scale your business with expert guidance"
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
              <img src="/images/icons/virtual-co-founder.svg" alt="Virtual Co-Founder" />
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
              <img src="/images/icons/digital-transformation.svg" alt="Digital Transformation" />
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
              <img src="/images/icons/legal-advisory.svg" alt="Legal Consultancy" />
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
              <img src="/images/icons/business-advisory.svg" alt="Business Advisory" />
            </div>
            <h3>Business Advisory</h3>
          </motion.div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />

      <Div className="container">
        <SectionHeading
          title="Personal Finance Solutions"
          subtitle="Build and manage your wealth with expert guidance and proven strategies"
          variant="cs-style1 text-center"
        />
        <Spacing lg="50" md="30" />
        <Div className={styles.financeGrid}>
          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/financial.svg" alt="Wealth Management" />
            </div>
            <h3>Wealth Management</h3>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/consulting.svg" alt="Financial Planning" />
            </div>
            <h3>Financial Planning</h3>
          </motion.div>

          <motion.div
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.cardIcon}>
              <img src="/images/icons/investment-advisory.svg" alt="Investment Advisory" />
            </div>
            <h3>Investment Advisory</h3>
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
              <p>To empower businesses and individuals with innovative financial solutions and expert guidance for sustainable growth and wealth creation.</p>
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
              <p>To become world's most trusted platform for integrated business growth and wealth management services.</p>
            </motion.div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="50" md="80" />

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
