import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog', 
      src:'/images/blog1.png', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'Unleashing the Potential: A Deep Dive into Social Media Marketing for Small Businesses'
    },
    {
      url:'/Websiteblog', 
      src:'/images/webblog1.png', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'Responsive Web Design: Ensuring a Seamless User Experience'
    },
    {
      url:'/SeoBlog', 
      src:'/images/seoblog2.png', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Learn how to identify and optimise keywords for improved search engine visibility.'
    },
    {
      url:'/AppBlog', 
      src:'/images/Appblog1.png', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'Emerging Technologies Shaping the Future'
    },
    {
      url:'/Websiteblog', 
      src:'/images/websiteblog3.png', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Advantages of Responsive Design'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
