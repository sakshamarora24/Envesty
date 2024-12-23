import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    {
      title: 'Business',
      url:'/'
    },
    {
      title: 'Agency',
      url:'/'
    },
    {
      title: 'Artwork',
      url:'/'
    },
    {
      title: 'Marketing',
      url:'/'
    },
    {
      title: 'Information',
      url:'/'
    },
    {
      title: 'Design',
      url:'/'
    },
    {
      title: 'Wordpress',
      url:'/'
    },
  ]
  
  const categoryData = [
    {
      title: 'Social Media',
      url:'/blog'
    },
    {
      title: 'Website Design',
      url:'/Websiteblog'
    },
    {
      title: 'Seo Guide',
      url:'/Seoblog'
    },
    {
      title: 'App Development Blogs',
      url:'/AppBlog'
    },
    
  ]
  const recentPostData = [
    {
      title: 'Unleashing the Potential...',
      thumb: '/images/blog1.png',
      href: '/blog/blog1',
      date: '07 Mar 2023'
    },
    {
      title: 'Crafting Success...',
      thumb: '/images/blog2.png',
      href: '/blog/blog2',
      date: '05 Mar 2023'
    },
    {
      title: 'Navigating the Digital Landscape...',
      thumb: '/images/blog3.png',
      href: '/blog/blog3',
      date: '04 Mar 2023'
    }
  ]
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget 
          src='/images/avatar_1.png'
          name='Kuber Jontra' 
          description='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
        />
      </Div>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
      {/* <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div> */}
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
