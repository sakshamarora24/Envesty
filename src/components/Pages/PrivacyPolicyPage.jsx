import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import Div from '../Div';
import Spacing from '../Spacing';
import SEO from '../SEO';
import './privacy-policy.scss';

export default function PrivacyPolicyPage() {
  pageTitle('Privacy Policy');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Envesty's Privacy Policy - Learn how we protect your personal information and data. Our comprehensive privacy policy outlines our commitment to your privacy and security."
        keywords="privacy policy, data protection, personal information, security, Envesty privacy"
      />
      <PageHeading
        title='Privacy Policy'
        bgSrc='/images/hero_bg_3.jpeg'
        pageLinkText='Privacy Policy'
      />
      <Spacing lg='150' md='80'/>
      <Div className='container'>
        <Div className='row'>
          <Div className='col-lg-12'>
            <article className="privacy-policy-content">
              <h1 className="privacy-main-title">Privacy Policy</h1>
              
              <section className="privacy-section">
                <p className="last-updated"><strong>Last Updated: January 13, 2025</strong></p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Data Collection and Usage</h2>
                <p>We collect personal data such as name, email, phone number, and usage data (e.g., IP address, browser type). This data helps us improve our services, manage user accounts, process transactions, and communicate with users.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Cookies and Tracking</h2>
                <p>We use cookies and similar technologies to enhance user experience and analyze service usage. Users can manage cookie preferences through their browser settings.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Data Sharing</h2>
                <p>Your personal data may be shared with service providers, affiliates, business partners, and during business transactions, with proper safeguards. It will not be shared without your consent unless required by law.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Data Retention and Security</h2>
                <p>We retain personal data as needed to fulfill purposes outlined in this policy, comply with legal obligations, and ensure service integrity. While we implement robust security measures, we cannot guarantee absolute security.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Children's Privacy</h2>
                <p>We do not knowingly collect data from individuals under 13. Parents should contact us if they suspect their child has shared personal data.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Your Rights</h2>
                <p>You can access, update, or delete your data by contacting us or managing settings within your account. Certain data may be retained as required by law.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Third-Party Links</h2>
                <p>Our website may include links to external sites. We are not responsible for their privacy practices.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Policy Updates</h2>
                <p>This policy may be updated periodically. Users will be notified of significant changes.</p>
              </section>

              <section className="privacy-section">
                <h2 className="section-title">Contact Us</h2>
                <p>For questions or concerns about our privacy policy, please contact us at:</p>
                <p>Email: support@envesty.in<br />
                Phone: +91 7086975636</p>
              </section>
            </article>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
    </>
  );
}
