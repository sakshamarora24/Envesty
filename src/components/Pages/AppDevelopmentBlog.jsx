import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
// import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogPage() {
  pageTitle('Blog');
  const postData = [
    {
      thumb:'/images/Appblog1.png',
      title:'Emerging Technologies Shaping the Future',
      subtitle:'At the forefront of app development, cutting-edge technologies are steering the industry toward new horizons. From augmented reality (AR) and virtual reality (VR) to edge computing and 5G, these innovations are revolutionising the way apps are conceived, developed, and experienced.      ',
      date:'07 Mar 2023',
      category:'App Development',
      categoryHref:'/blog',
    //   href:'/blog/blog1'
    },
    {
      thumb:'/images/Appblog2.png',
      title:' User-Centric Design: Enhancing the App Experience',
      subtitle:'In a world where user experience reigns supreme, app developers are embracing user-centric design principles. Prioritising user needs, preferences, and feedback is no longer a choice but a necessity. The success of an app hinges on its ability to captivate and engage users through seamless, intuitive, and aesthetically pleasing designs.      ',
      date:'05 Mar 2023',
      category:'App Development',
      categoryHref:'/blog',
    //   href:'/blog/blog2'
    },
    {
      thumb:'/images/Appblog3.png',
      title:'Integration of Artificial Intelligence and Machine Learning',
      subtitle:'The fusion of Artificial Intelligence (AI) and Machine Learning (ML) is reshaping the app development landscape. From personalised recommendations to predictive analytics, AI and ML are propelling apps into realms of efficiency and interactivity previously deemed unattainable.      ',
      date:'04 Mar 2023',
      category:'App Development',
      categoryHref:'/blog',
    //   href:'/blog/blog3'

    },
    {
        thumb:'/images/Appblog4.png',
        title:'Cross-Platform Development Strategies',
        subtitle:'As the demand for versatile apps rises, cross-platform development has emerged as a strategic imperative. Developers are exploring frameworks like Flutter and React Native to create apps that seamlessly operate across diverse platforms, ensuring a consistent and unified user experience.      ',
        date:'14 Mar 2023',
        category:'App Development',
        categoryHref:'/blog',
        // href:'/blog/blog3'
  
      },
    
  
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Future of App Development: Trends to Watch in 2023'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blog'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
            {/* <Pagination/> */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
