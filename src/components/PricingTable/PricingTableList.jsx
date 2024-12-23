import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='WhatsApp Marketing Course'
              price='29'
              currency='$'
              timeline='monthly'
              features={['Crafting compelling WhatsApp campaigns', 'Building and managing customer lists', 'Measuring the success of your WhatsApp marketing efforts']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='WhatsApp Marketing Course'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Crafting compelling WhatsApp campaigns', 'Building and managing customer lists', 'Measuring the success of your WhatsApp marketing efforts']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Instagram Marketing Course'
              price='199'
              currency='$'
              timeline='monthly'
              features={['Strategies for growing your Instagram followers', 'Creating eye-catching visuals and stories', 'Utilizing Instagram  advertising features effectively']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Instagram Marketing Course'
              price='399'
              currency='$'
              timeline='yearly'
              features={['Strategies for growing your Instagram followers', 'Creating eye-catching visuals and stories', 'Utilizing Instagram  advertising features effectively']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Facebook Marketing Course'
              price='299'
              currency='$'
              timeline='monthly'
              features={['Creating and managing Facebook ad campaigns', 'Building a thriving Facebook community', 'Analyzing data to enhance your Facebook marketing ROI']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Facebook Marketing Course'
              price='599'
              currency='$'
              timeline='yearly'
              features={['Creating and managing Facebook ad campaigns', 'Building a thriving Facebook community', 'Analyzing data to enhance your Facebook marketing ROI']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
