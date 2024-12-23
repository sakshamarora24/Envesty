import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title: 'Rental Website',
      subtitle: 'See Details',
      href: '/portfolio/',
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
      href: '/portfolio/',
      src: '/images/app4.jpeg',
      category: 'App_Development',
    },
    {
      title: 'App Designs',
      subtitle: 'See Details',
      href: '/portfolio/',
      src: '/images/app2.jpeg',
      category: 'App_Development',
    },
    {
      title: 'Brand strategies',
      subtitle: 'See Details',
      href: '/portfolio/',
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
    
    
    
  ];
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
