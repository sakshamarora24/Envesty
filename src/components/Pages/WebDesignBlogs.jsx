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
      thumb:'/images/webblog1.png',
      title:'Responsive Web Design: Ensuring a Seamless User Experience',
      subtitle:'Responsive web design (RWD) is a dynamic approach to web development that ensures a seamless user experience across various devices and screen sizes. It involves designing and coding a website to respond and adapt to the users behaviour and the environment, considering factors like platform, screen size, and orientation.',
      date:'08 April 2023',
      category:'Web Design',
      categoryHref:'/blog',
      // href:'/blog/blog1'
    },
    {
      thumb:'/images/webdesign2.png',
      title:'Advantages of Responsive Design',
      subtitle:'Responsive design offers a multitude of advantages, primarily centred around user engagement and enhanced SEO performance. By providing a consistent and optimised experience across devices, responsive websites capture and retain user attention. This not only leads to higher conversion rates but also positively influences search engine rankings.',
      date:'05 Mar 2023',
      category:'Web Design',
      categoryHref:'/blog',
      href:'/blog/blog2'
    },
    {
      thumb:'/images/websiteblog3.png',
      title:'Distinctions Between Adaptive and Responsive Design',
      subtitle:'Distinguishing between adaptive and responsive design is crucial for making informed decisions in web development. While both approaches aim to deliver a flexible user experience, adaptive design involves creating multiple versions of a website for specific device categories. Responsive design, on the other hand, utilises a single codebase to adapt seamlessly to any screen size.      ',
      date:'04 Mar 2023',
      category:'Web Design',
      categoryHref:'/blog',
      href:'/blog/blog3'

    },
  
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Web Design Blogs'
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
