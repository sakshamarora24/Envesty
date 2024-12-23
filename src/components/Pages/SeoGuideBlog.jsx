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
      thumb:'/images/seoblog1.png',
      title:'Delve into the foundational principles that underpin successful SEO strategies.',
      subtitle:'Embarking on a successful SEO journey requires a solid understanding of its fundamentals. From comprehending search engine algorithms to grasping the importance of user intent, this exploration lays the groundwork for effective SEO strategies.      ',
      date:'07 Mar 2023',
      category:'Seo',
      // categoryHref:'/blog',
      // href:'/blog/blog1'
    },
    {
      thumb:'/images/seoblog2.png',
      title:'Learn how to identify and optimise keywords for improved search engine visibility.',
      subtitle:'Unravel the mystery behind effective keyword research. Discover tools and techniques to identify high-impact keywords relevant to your content. Learn how strategic placement and optimization can significantly boost your websites visibility on search engines.      ',
      date:'05 Mar 2023',
      category:'Seo',
      // categoryHref:'/blog',
      // href:'/blog/blog2'
    },
    {
      thumb:'/images/seoblog3.png',
      title:'Uncover the secrets of on-page optimization, from meta tags to content structuring.      ',
      subtitle:'Creating content that appeals to both users and search engines is an art. Explore the intricacies of on-page optimization, including the artful use of meta tags, headers, and content structuring. Learn how to strike the perfect balance for content that captivates readers and ranks well.      ',
      date:'04 Mar 2023',
      category:'Seo',
      // categoryHref:'/blog',
      // href:'/blog/blog3'

    },
    
  
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='SEO Unveiled: A Guide to Search Engine Optimization for Beginners'
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
