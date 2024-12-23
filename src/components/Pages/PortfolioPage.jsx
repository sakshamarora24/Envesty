import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function PortfolioPage() {
  pageTitle('Portfolio');
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: 'Rental Website',
      subtitle: 'See Details',
      href: '/portfolio/s',
      src: '/images/website1.jpg',
      category: 'Website_Development',
    },
    {
      title: 'Hearbal cart',
      subtitle: 'See Details',
      href: '/portfolio/',
      src: '/images/website2.jpg',
      category: 'Website_Development',
    },
    {
      title: 'App Design',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/app4.jpeg',
      category: 'App_Development',
    },
    {
      title: 'App Designs',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/app2.jpeg',
      category: 'App_Development',
    },
    {
      title: 'Brand strategies',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/brand1.jpeg',
      category: 'Brand_Strategizing',
    },
    {
      title: 'Carpooling In blockchain',
      subtitle: 'See Details',
      href: '/portfolio/',
      src: '/images/block2.jpeg',
      category: 'BlockChain_Development',
    },
    {
      title: 'Voting System in Blockchain',
      subtitle: 'See Details',
      href: '/portfolio/',
      src: '/images/block1.jpeg',
      category: 'BlockChain_Development',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/cms1.jpg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_5.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_6.jpeg',
      category: 'web_design',
    },
  ];
  const categoryMenu = [
    {
      title: 'Digital Marketing',
      category: 'Digital_Marketing',
    },
    {
      title: 'Website Development',
      category: 'Website_Development',
    },
    {
      title: 'App Development',
      category: 'App_Development',
    },
    {
      title: 'Brand Strategizing',
      category: 'Brand_Strategizing',
    },
    
    {
      title:'Content Management Systems',
      category:'Content Management Systems'
    },
    {
      title:'BlockChain Development',
      category:'BlockChain_Development'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some Great Projects" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 4 || index === 8 ? 'col-lg-12' : 'col-lg-6'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>
        <Spacing lg="25" md="25" />

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
