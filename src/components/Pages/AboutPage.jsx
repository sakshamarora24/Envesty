import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import { ChevronsRight } from 'lucide-react';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  pageTitle('About');

  const funfaceData = [
    {
      title: 'Virtual Co-Founder',
      link: '/services#virtual-cofounder'
    },
    {
      title: 'Digital Transformation',
      link: '/services#digital-transformation'
    },
    {
      title: 'Legal Consultancy',
      link: '/services#legal-consultancy'
    },
    {
      title: 'Business Consultancy',
      link: '/services#business-consultancy'
    },
    {
      title: 'Personal Finance & Counselling',
      link: '/services#personal-finance'
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="About Us"
        bgSrc="/images/hero_bg_3.jpeg"
        pageLinkText="About Us"
      />

      <section className={styles.aboutSection}>
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <div className={styles.aboutCard}>
                <SectionHeading
                  title="Your trusted partner for Personal Finance and Business Services"
                  subtitle="About Our Company"
                  titleClassName={styles.blackTitle}
                >
                  <div className={styles.aboutContent}>
                    <p>
                      At Envesty Solutions, we empower families, startups, and small businesses by bridging gaps in financial literacy, skill development, and business compliance. With a mission to create sustainable futures, we provide tailored, data-driven solutions that foster long-term financial stability.
                    </p>
                    <p>
                      From guiding families in education planning to helping MSMEs optimize finances, our experienced team delivers clear strategies and personalized support for the best outcomes.
                    </p>
                  </div>
                  <div className={styles.separator}></div>
                </SectionHeading>
              </div>
            </Div>
            <Div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className={styles.aboutCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src="images/demo/🔍 Is Your Business Ready for an Audit_ Knowing….jpeg"
                    alt="About Envesty"
                    className="w-100"
                  />
                </div>
              </div>
            </Div>
          </Div>

          <Spacing lg="80" md="60" />

          <div className={styles.funFactGrid}>
            {funfaceData.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className={styles.funFactCard}
              >
                <h3 className={styles.funFactTitle}>{item.title}</h3>
              </a>
            ))}
          </div>

          <Spacing lg="80" md="60" />

          <Div className="row align-items-center">
            <Div className="col-xl-6 col-lg-6">
              <div className={styles.aboutCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src="/images/finance.png"
                    alt="Financial Services"
                    className="w-100"
                  />
                </div>
              </div>
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className={styles.aboutCard}>
                <SectionHeading
                  title="Why Choose Envesty?"
                  subtitle="Our Expertise"
                  titleClassName={styles.blackTitle}
                >
                  <div className={styles.aboutContent}>
                    <p>
                      We bring years of experience in financial advisory, business consulting, and legal services. Our holistic approach ensures that your business not only complies with regulations but thrives in today's competitive market.
                    </p>
                    <p>
                      Our team of experts is dedicated to providing personalized solutions that align with your unique goals and challenges. We believe in building long-term relationships based on trust, transparency, and results.
                    </p>
                    <p className="cs-m0">
                      <ChevronsRight /> Affordable Solutions: We are committed to making our services cost-effective without compromising quality.
                    </p>

                    <p className="cs-m0">
                      <ChevronsRight /> Tailored Approach: Every client is unique, and so are our strategies to address their needs.
                    </p>

                    <p className="cs-m0">
                      <ChevronsRight /> Expert Network: Access to a diverse network of professionals, from financial advisors to legal
                      experts and mentors.
                    </p>

                    <p className="cs-m0">
                      <ChevronsRight /> Technology-Driven: Leveraging the latest tools to deliver efficient and impactful solutions.
                    </p>
                  </div>
                  <div className={styles.separator}></div>
                </SectionHeading>
              </div>
            </Div>
          </Div>
        </Div>
      </section>

      <Spacing lg="70" md="50" />
      <Cta
        title={`" Transforming Ideas Into <br /> Sustainable Business Growth "`}
        btnText="Schedule A Meeting"
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </>
  );
}
