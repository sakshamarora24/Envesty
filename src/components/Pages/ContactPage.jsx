import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import styles from './ContactPage.module.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
  const [statusType, setStatusType] = useState('');

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
    setStatusType('pending');

    emailjs
      .send(
        'service_1pc4xuw',
        'template_kpp8bib',
        {
          from_name: formData.fullName,
          email: formData.email,
          project_type: formData.projectType,
          mobile: formData.mobile,
          project_description: formData.projectDescription,
        },
        'iWcw8c7049mjhgh4X'
      )
      .then(
        (response) => {
          setStatus('Message sent successfully! We will get back to you soon.');
          setStatusType('success');
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
          setStatusType('error');
          console.error('EmailJS error:', error);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className={styles.contactInfoIcon} />,
      title: 'Email Us',
      content: 'info@envesty.com',
    },
    {
      icon: <Phone className={styles.contactInfoIcon} />,
      title: 'Call Us',
      content: '+91 98768 19933',
    },
    {
      icon: <MapPin className={styles.contactInfoIcon} />,
      title: 'Visit Us',
      content: 'Noida, Uttar Pradesh, India',
    },
  ];

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      
      <section className={styles.contactSection}>
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5">
              <div className={styles.contactCard}>
                <SectionHeading
                  title="Let's Start Your Project Together"
                  subtitle="Get in Touch"
                >
                  {/* <p className={styles.contactDescription}>
                    Ready to transform your business? We're here to help you achieve your goals. 
                    Reach out to us for expert financial and business consulting services tailored to your needs.
                  </p> */}
                </SectionHeading>
                <Spacing lg="40" md="30" />
                
                <div className={styles.contactInfo}>
                  {contactInfo.map((info, index) => (
                    <div key={index} className={styles.contactInfoItem}>
                      {info.icon}
                      <div>
                        <h4 className={styles.contactInfoTitle}>{info.title}</h4>
                        <p className={styles.contactInfoText}>{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Div>

            <Div className="col-lg-7">
              <div className={styles.contactCard}>
                <form onSubmit={sendEmail}>
                  <Div className="row">
                    <Div className="col-sm-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Full Name*</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={styles.formField}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                    </Div>
                    
                    <Div className="col-sm-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={styles.formField}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </Div>

                    <Div className="col-sm-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Project Type*</label>
                        <input
                          type="text"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={styles.formField}
                          required
                          placeholder="e.g., Business Consulting"
                        />
                      </div>
                    </Div>

                    <Div className="col-sm-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Mobile*</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          className={styles.formField}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </Div>

                    <Div className="col-sm-12">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Project Description*</label>
                        <textarea
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          className={`${styles.formField} ${styles.textarea}`}
                          required
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>
                    </Div>

                    <Div className="col-sm-12">
                      <button type="submit" className={styles.submitButton}>
                        <span>Send Message</span>
                        <Send size={20} />
                      </button>
                    </Div>
                  </Div>
                </form>

                {status && (
                  <div className={`${styles.statusMessage} ${styles[`status${statusType.charAt(0).toUpperCase() + statusType.slice(1)}`]}`}>
                    {status}
                  </div>
                )}
              </div>
            </Div>
          </Div>
        </Div>
      </section>

      <Spacing lg="80" md="60" />
      
      <Div className="container">
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57679.38447412827!2d77.35810928593924!3d28.535512189937712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c3ed6e742f%3A0xb8f3246ec4faed67!2sNoida!5e0!3m2!1sen!2sin!4v1601365171085!5m2!1sen!2sin"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </Div>
      
      <Spacing lg="50" md="40" />
    </>
  );
}
