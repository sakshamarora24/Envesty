import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
// import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function CareersPage() {
  pageTitle('Careers');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Careers"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Careers"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-12">
            <SectionHeading
              title="Join Our Team"
              subtitle="Current Openings"
            />
            <Spacing lg="55" md="30" />

            <Div className="job-listing">
              <Div className="job-item">
                <h3>HR Head</h3>
                <p>
                  Join our team to manage human resources.
                </p>
                <p><strong>Location:</strong> Remote</p>
              </Div>

              <Div className="job-item">
                <h3>Legal and Financial Services</h3>
                <p>
                  We are looking for a highly motivated Legal/Financial team to assist in providing legal support across various projects.
                </p>
                <p><strong>Location:</strong> Remote</p>
              </Div>

              <Div className="job-item">
                <h3>Business Development Executive</h3>
                <p>
                  We are seeking a Business Development Executive to help grow our brand.
                </p>
                <p><strong>Location:</strong> Remote</p>
              </Div>

              <Div className="job-item">
                <h3>Marketing and Sales Executive</h3>
                <p>
                  Join our marketing and sales team to help business with clients and brand presence.
                </p>
                <p><strong>Location:</strong> Remote</p>
              </Div>
            </Div>

            <Spacing lg="50" md="30" />
            <SectionHeading title="Apply Now" subtitle="Send Your Resume" />
            <Spacing lg="55" md="30" />

            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="email" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Phone*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Area Of Interest*</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Profile*</label>
                <input type="text" placeholder="Intern or Part-Time" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Cover Letter*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  placeholder="Tell us why you'd be a great fit!"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Submit Application</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57679.38447412827!2d77.35810928593924!3d28.535512189937712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c3ed6e742f%3A0xb8f3246ec4faed67!2sNoida!5e0!3m2!1sen!2sin!4v1601365171085!5m2!1sen!2sin"
          allowFullScreen
          title="Google Map"
        ></iframe>
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
