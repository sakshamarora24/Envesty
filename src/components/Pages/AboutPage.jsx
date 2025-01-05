import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
// import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
import {ChevronsRight} from 'lucide-react';
export default function AboutPage() {
  pageTitle('About');

  const funfaceData = [
    {
      title: 'Holistic Financial Advisory\n',
      //factNumber: '4K',
    },
    {
      title: 'Skill Development Consultancy',
      //factNumber: '65',
    },
    {
      title: 'Business Compliance Services\n',
      //factNumber: '20',
    },
    {
      title: 'Mentorship Programs\n',
      //factNumber: '20',
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}

      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
                title="Your trusted partner for Financial and Legal Services"
                subtitle="About Our Company"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Envesty Solutions, we believe in empowering families, startups, and small businesses
                by bridging the gaps in financial literacy, skill development, and legal compliance.
                Our mission is to create a sustainable future for our clients by providing holistic
                solutions tailored to their unique needs.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Our team’s vast experience allows us to provide not only clear financial strategies but also personalized solutions that help you achieve long-term financial stability. Whether it's guiding families on how to plan for their children's education or helping MSMEs optimize their finances, our experts use a data-driven approach to ensure the best possible outcomes.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                    src="/images//latest/About1.jpeg"
                    alt="About"
                    className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>

        </Div>
      </Div>

      <Div>
        <Spacing lg="0" md="40" />
      </Div>



      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/finance.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Expert Financial Guidance with Years of Experience"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              {/*<p className="cs-m0">*/}
              {/*  At Envesty Solutions Pvt. Ltd., we distinguish ourselves through our highly experienced team of financial experts who bring decades of combined knowledge and hands-on expertise. This is the main factor that sets us apart from our competition and enables us to offer specialized financial advisory services tailored to your unique needs.*/}
              {/*</p>*/}
              <Spacing lg="15" md="15" />
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
                    <Spacing lg="30" md="30"/>
                    <Div className="cs-separator cs-accent_bg"></Div>
                    <Spacing lg="25" md="0"/>
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" /> */}
      <Div className="container">
        {/* <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" /> */}
        {/* <TeamSlider /> */}
      </Div>
      {/* End Team Section */}

        {/*<Spacing lg="150" md="80" />*/}
        {/*<Div className="container">*/}
        {/*  <Div className="row">*/}
        {/*    <Div className="col-xl-5 col-lg-7">*/}
        {/*      <SectionHeading*/}
        {/*        title="Your trusted partner for Financial and Legal Services"*/}
        {/*        subtitle="About Our Company"*/}
        {/*      >*/}
        {/*        <Spacing lg="30" md="20" />*/}
        {/*        <p className="cs-m0">*/}
        {/*          At Envesty Solutions, we believe in empowering families, startups, and small businesses*/}
        {/*          by bridging the gaps in financial literacy, skill development, and legal compliance.*/}
        {/*          Our mission is to create a sustainable future for our clients by providing holistic*/}
        {/*          solutions tailored to their unique needs.*/}
        {/*        </p>*/}
        {/*        <Spacing lg="30" md="30" />*/}
        {/*        <Div className="cs-separator cs-accent_bg"></Div>*/}
        {/*        <Spacing lg="25" md="40" />*/}
        {/*      </SectionHeading>*/}
        {/*    </Div>*/}
        {/*    <Div className="col-lg-5 offset-xl-2">*/}
        {/*      <img*/}
        {/*        src="/images/about_img_1.jpeg"*/}
        {/*        alt="About"*/}
        {/*        className="w-100 cs-radius_15"*/}
        {/*      />*/}
        {/*      <Spacing lg="25" md="25" />*/}
        {/*    </Div>*/}
        {/*    <Div className="col-lg-7">*/}
        {/*      <img*/}
        {/*        src="/images/about_img_2.jpeg"*/}
        {/*        alt="About"*/}
        {/*        className="w-100 cs-radius_15"*/}
        {/*      />*/}
        {/*      <Spacing lg="25" md="25" />*/}
        {/*    </Div>*/}
        {/*    <Div className="col-lg-5">*/}
        {/*      <img*/}
        {/*        src="/images/about_img_3.jpeg"*/}
        {/*        alt="About"*/}
        {/*        className="w-100 cs-radius_15"*/}
        {/*      />*/}
        {/*      <Spacing lg="25" md="25" />*/}
        {/*    </Div>*/}
        {/*  </Div>*/}
        {/*</Div>*/}
        {/*<Spacing lg="75" md="55" />*/}
         {/*End About Section*/}

         {/*Start Fun Fact Section*/}
        <Spacing lg="150" md="55" />
              <Div className="container">
                <FunFact
                  title="Our Core Services"
                  data={funfaceData}
                />
              </Div>
         {/*End Fun Fact Section*/}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title={`" Transforming Ideas Into <br /> Sustainable Business Growth "`}
          btnText="Schedule A Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
