import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import styles from './CareerPage.module.css';
import { MapPin, Send, Clock } from 'lucide-react';

export default function CareerPage() {
  pageTitle('Join Our Team');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    profile: '',
    coverLetter: '',
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

  const jobListings = [
    {
      title: 'HR Head',
      description: 'Join our team to manage human resources and help build a strong, collaborative workplace culture.',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      title: 'Legal and Financial Services',
      description: 'We are looking for a highly motivated Legal/Financial professional to assist in providing comprehensive support across various projects.',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      title: 'Business Development Executive',
      description: 'We are seeking a Business Development Executive to help grow our brand and establish strategic partnerships.',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      title: 'Marketing and Sales Executive',
      description: 'Join our marketing and sales team to help drive business growth, enhance client relationships, and strengthen our brand presence.',
      location: 'Remote',
      type: 'Full-Time'
    }
  ];

  const sendApplication = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setStatusType('pending');

    emailjs
      .send(
        'service_1pc4xuw',
        'template_11s5rr2',
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          area_of_interest: formData.areaOfInterest,
          profile: formData.profile,
          cover_letter: formData.coverLetter,
        },
        'iWcw8c7049mjhgh4X'
      )
      .then(
        (response) => {
          setStatus('Application submitted successfully! We will review your application and get back to you soon.');
          setStatusType('success');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            areaOfInterest: '',
            profile: '',
            coverLetter: '',
          });
        },
        (error) => {
          setStatus('Failed to submit the application. Please try again.');
          setStatusType('error');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <>
      <PageHeading
        title="Join Our Team"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Careers"
      />
      
      <section className={styles.careerSection}>
        <Div className="container">
          <SectionHeading
            title="Current Openings"
            subtitle="Explore Opportunities"
          >
            <p>
              Join our dynamic team and be part of an innovative company that's transforming the financial and business consulting landscape.
            </p>
          </SectionHeading>

          <div className={styles.jobListing}>
            {jobListings.map((job, index) => (
              <div key={index} className={styles.jobCard}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobDescription}>{job.description}</p>
                <div className={styles.jobMeta}>
                  <MapPin size={18} className={styles.jobIcon} />
                  <span>{job.location}</span>
                  <Clock size={18} className={styles.jobIcon} style={{ marginLeft: '1rem' }} />
                  <span>{job.type}</span>
                </div>
              </div>
            ))}
          </div>

          <Spacing lg="80" md="60" />
          
          <SectionHeading 
            title="Apply Now" 
            subtitle="Send Your Application"
          >
            <p>
              Take the first step towards an exciting career with us. Fill out the application form below and we'll get back to you soon.
            </p>
          </SectionHeading>

          <div className={styles.applicationForm}>
            <form onSubmit={sendApplication}>
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
                    <label className={styles.formLabel}>Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.formField}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </Div>

                <Div className="col-sm-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Area of Interest*</label>
                    <input
                      type="text"
                      name="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={handleChange}
                      className={styles.formField}
                      required
                      placeholder="e.g., Business Development"
                    />
                  </div>
                </Div>

                <Div className="col-sm-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Profile*</label>
                    <input
                      type="text"
                      name="profile"
                      value={formData.profile}
                      onChange={handleChange}
                      className={styles.formField}
                      required
                      placeholder="Full-Time, Part-Time, or Intern"
                    />
                  </div>
                </Div>

                <Div className="col-sm-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Cover Letter*</label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className={`${styles.formField} ${styles.textarea}`}
                      required
                      placeholder="Tell us about yourself and why you'd be a great fit for this role..."
                    ></textarea>
                  </div>
                </Div>

                <Div className="col-sm-12">
                  <button type="submit" className={styles.submitButton}>
                    <span>Submit Application</span>
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
      </section>
      
      <Spacing lg="50" md="40" />
    </>
  );
}
