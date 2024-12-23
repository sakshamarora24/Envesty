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
      thumb:'/images/blog1.png',
      title:'Unleashing the Potential: A Deep Dive into Social Media Marketing for Small Businesses',
      subtitle:'In the fast-evolving realm of digital marketing, small businesses are recognizing the transformative power of social media marketing. This article seeks to explore the multifaceted strategies that can propel small enterprises to new heights by harnessing the full potential of various social media platforms.',
      date:'07 Mar 2023',
      category:'Social Media Marketing',
      categoryHref:'/blog',
      href:'/blog/blog1'
    },
    {
      thumb:'/images/blog2.png',
      title:'Crafting Success: Essential Strategies for Small Businesses in Social Media Marketing',
      subtitle:'Success in social media marketing hinges on a meticulously crafted strategy. Small businesses must articulate clear objectives, whether its enhancing brand visibility, driving website traffic, or generating leads. The art of crafting a strategy tailored to these objectives lays the groundwork for lasting success.',
      date:'05 Mar 2023',
      category:'Marketing',
      categoryHref:'/blog',
      href:'/blog/blog2'
    },
    {
      thumb:'/images/blog3.png',
      title:'Navigating the Digital Landscape: Why Social Media is a Game-Changer for Small Enterprises',
      subtitle:'Social media stands as a game-changer for small enterprises, offering a direct and cost-effective avenue to connect with their target audience. It levels the playing field, enabling smaller businesses to compete with larger counterparts on a more equitable basis.',
      date:'04 Mar 2023',
      category:'Social Media',
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
        title='Social Media Blogs'
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
