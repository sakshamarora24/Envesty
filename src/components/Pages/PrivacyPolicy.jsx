import React from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import Spacing from '../Spacing';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  pageTitle('Privacy Policy');

  return (
    <>
      <PageHeading 
        title="Privacy Policy"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Privacy Policy"
      />
      <Spacing lg="150" md="80"/>
      <Div className={styles.privacyContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Privacy Policy</h2>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className={styles.section}>
                <h3>1. Information We Collect</h3>
                <p>We collect information that you provide directly to us, including:</p>
                <ul>
                  <li>Name and contact information</li>
                  <li>Business information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Respond to your inquiries</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h3>3. Information Sharing</h3>
                <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
                <ul>
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h3>4. Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h3>5. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
