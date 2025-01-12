import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
// import DropDown from './DropDown';
import styles from './Header.module.css';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/latest/image.png" alt="Logo" style={{ width: 'max-content', height: 'max-content' }} />
                </Link>

              </Div>
              <Div className="cs-main_header_center mx-2">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li >
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>

                    </li>
                    <li className="" >
                      <NavLink
                        to="services"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </NavLink>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link to="/service/digitalmarketing" onClick={() => setMobileToggle(false)}>
                            Digital Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="service/appdevelopment"
                              onClick={() => setMobileToggle(false)}
                            >
                              App Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="service/websitedevelopment"
                              onClick={() => setMobileToggle(false)}
                            >
                             Web Development
                            </Link>
                          </li> */}
                      {/* <li>
                            <Link
                              to="service/brandstrategizing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Brand Strategizing
                            </Link>
                          </li> */}
                      {/* <li>
                            <Link
                              to="service/creativedirection"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Direction
                            </Link>
                          </li> */}
                      {/* <li>
                            <Link
                              to="service/cms"
                              onClick={()Our Target Audience
￼
Families
Focused on financial literacy, long-term planning, and guidance for children’s skill acquisition.

￼
Startups & MSMEs
Supporting legal compliance, financial advisory, and mentorship to help them scale and succeed.

￼
Young Entrepreneurs
Targeting Gen-Z innovators with mentorship and business advisory to help them build succe => setMobileToggle(false)}
                            >
                              CMS (Content Management Systems)
                            </Link>
                          </li> */}
                      {/* <li>
                            <Link
                              to="service/erp"
                              onClick={() => setMobileToggle(false)}
                            >
                              ERP (Enterprise Resource Planning)
                            </Link>
                          </li> */}
                      {/* <li>
                            <Link
                              to="service/blockchaindevelopment"
                              onClick={() => setMobileToggle(false)}
                            >
                              BlockChain Development
                            </Link>
                          </li>
                          
                        </ul>
                      </DropDown> */}
                    </li>
                    {/* <li >
                      <NavLink
                        to="/courses"
                        
                      >
                        Courses
                      </NavLink>
                      
                    </li> */}
                    {/* <li>
                      <NavLink
                        to="portfolio"
                        
                      >
                        Portfolio
                      </NavLink>
                      
                    </li> */}
                    <li className="">
                      <Link to="career" onClick={() => setMobileToggle(false)}>
                        career
                      </Link>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Social Media
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Websiteblog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Web Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/SeoBlog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Seo Guide
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="AppBlog"
                              onClick={() => setMobileToggle(false)}
                            >
                              App Development
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}

                    </li>
                    <li >
                      <Link to="/contact" onClick={() => setMobileToggle(false)}>
                        Contact
                      </Link>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              About
                            </Link>
                          </li>
                        </ul> */}
                      {/* </DropDown> */}
                    </li>
                    <li >
                      <Link to="/about" onClick={() => setMobileToggle(false)}>
                        About
                      </Link>

                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
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
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
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
            <img src="/images/latest/image.png" className={`${styles.logo} ${isSticky ? styles.sticky : ''}`} alt="Logo" />
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
