// import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'

import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage() {
  const params = useParams()
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading 
        title='Social Media Marketing'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={params.blogDetailsId}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src="/images/blog1.png" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">07 Mar 2023</span>
                  <Link to="/blog" className="cs-post_avatar">Social Media Marketing</Link>
                </Div>
                <h2 className="cs-post_title">Unleashing the Potential: A Deep Dive into Social Media Marketing for Small Businesses</h2>
                <p>Social media marketing has become a pivotal tool for small businesses aiming to expand their reach and engage with their audience in a more effective manner. This extended blog will delve deeper into the myriad of strategies and tactics that small businesses can employ to optimize their presence on various social media platforms, thus driving growth and fostering a robust online community.</p>
                {/* <blockquote className="cs-primary_font">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, who expound the actual teachings of the great explorer of the truth, the master.
                  <small>Loren Mulari</small>
                </blockquote> */}
                <p>In the dynamic world of social media marketing, small businesses must navigate various strategies to effectively connect with their audience. Central to this endeavor is a deep understanding of the target audience, encompassing their preferences, behaviors, and demographics. This insight allows businesses to create content that truly resonates. Selecting the right platforms is also critical; not every channel is a one-size-fits-all solution, and choices like Instagram, Facebook, LinkedIn, Twitter, or even TikTok should reflect where the audience is most engaged. The cornerstone of social media success lies in the content - it should be engaging, informative, and relevant, ranging from compelling blog posts to visually striking infographics and interactive live sessions.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog1-1.png" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog2-2.png" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                {/* <h3>Art is powerful and imaginary source</h3> */}
                <p>Consistency in posting and maintaining a distinct brand voice are fundamental in building trust and recognition. Moreover, actively engaging with the community through comments, messages, and posts fosters a sense of loyalty and connection. Utilizing analytics tools is key to understanding the effectiveness of different types of content and refining strategies based on performance metrics. Small businesses can leverage the power of targeted social media advertising to reach a wider or more specific audience in a cost-effective way.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            {/* <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form> */}
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      
      {/* End CTA Section */}
    </>
  )
}
