import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '',
    mobile: '',
    projectDescription: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_1pc4xuw', // Replace with your EmailJS Service ID
        'template_kpp8bib', // Replace with your EmailJS Template ID
        {
          from_name: formData.fullName,
          email: formData.email,
          project_type: formData.projectType,
          mobile: formData.mobile,
          project_description: formData.projectDescription,
        },
        'iWcw8c7049mjhgh4X' // Replace with your EmailJS User ID (public key)
      )
      .then(
        (response) => {
          setStatus('Message sent successfully!');
          setFormData({
            fullName: '',
            email: '',
            projectType: '',
            mobile: '',
            projectDescription: '',
          });
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Get Started with envesty Today"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={sendEmail} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="cs-form_field"
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="cs-form_field"
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="cs-form_field"
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="cs-form_field"
                  required
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Project Description*</label>
                <textarea
                  name="projectDescription"
                  cols="30"
                  rows="7"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="cs-form_field"
                  required
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
            <Spacing lg="20" md="20" />
            {status && <p>{status}</p>}
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
