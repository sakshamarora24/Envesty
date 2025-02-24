import React from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import Spacing from '../Spacing';
import styles from './TermsOfService.module.css';

export default function TermsOfService() {
  pageTitle('Terms of Service');

  return (
    <>
      <PageHeading 
        title="Terms of Service"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Terms of Service"
      />
      <Spacing lg="150" md="80"/>
      <Div className={styles.termsContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Terms of Service</h2>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className={styles.section}>
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using Envesty's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </section>

              <section className={styles.section}>
                <h3>2. Services Description</h3>
                <p>Envesty provides business consulting and digital transformation services, including:</p>
                <ul>
                  <li>Virtual Co-Founder Services</li>
                  <li>Digital Transformation Solutions</li>
                  <li>Legal Consultancy</li>
                  <li>Business Consultancy</li>
                  <li>Personal Finance & Counselling</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h3>3. User Responsibilities</h3>
                <p>As a user of our services, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any account information</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any unauthorized use of our services</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h3>4. Intellectual Property</h3>
                <p>All content, features, and functionality of our services are owned by Envesty and are protected by international copyright, trademark, and other intellectual property laws.</p>
              </section>

              <section className={styles.section}>
                <h3>5. Limitation of Liability</h3>
                <p>Envesty shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
              </section>

              <section className={styles.section}>
                <h3>6. Changes to Terms</h3>
                <p>We reserve the right to modify these terms at any time. We will notify users of any material changes through our website or email.</p>
              </section>

              <section className={styles.section}>
                <h3>7. Contact Information</h3>
                <p>For any questions about these Terms of Service, please contact us at:</p>
                <p>Email: support@envesty.in</p>
                <p>Phone: +91 7086975636</p>
              </section>
            </div>
          </div>
        </div>
      </Div>
      <Spacing lg="150" md="80"/>
    </>
  );
}
