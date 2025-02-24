import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(true);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 ${variant ? variant : ''} ${
          isSticky ? 'cs-sticky_header' : ''
        }`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in" style={{ padding: '10px 30px' }}>
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/latest/image.png" alt="Logo" className="cs-site_logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center mx-2">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className={`cs-nav_list ${mobileToggle ? 'cs-active' : ''}`}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="/services"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link 
                              to="/services#virtual-cofounder"
                              onClick={() => setMobileToggle(false)}
                            >
                              Virtual Co-Founder Services
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services#digital-transformation"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Transformation
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services#legal-consultancy"
                              onClick={() => setMobileToggle(false)}
                            >
                              Legal Consultancy
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services#business-consultancy"
                              onClick={() => setMobileToggle(false)}
                            >
                              Business Consultancy
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services#personal-finance"
                              onClick={() => setMobileToggle(false)}
                            >
                              Personal Finance
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link to="/career" onClick={() => setMobileToggle(false)}>
                        Career
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setMobileToggle(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={`cs-munu_toggle ${mobileToggle ? 'cs-active' : ''}`}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right" style={{ paddingRight: '30px' }}>
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>
      <Div
        className={`cs-side_header ${sideHeaderToggle ? 'cs-active' : ''}`}
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/latest/image.png" alt="Logo" className="cs-site_logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Connect with us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Book A Free Consultation"
              // subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
