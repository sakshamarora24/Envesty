import React from 'react';
import PageHeading from '../PageHeading';
import Div from '../Div';
import Spacing from '../Spacing';
import './Services.css';

export default function Services() {
  const servicesData = [
  {
    id: "business-advisory",
    title: "Business Advisory",
    subtitle: "Strategic Business Advisory Services",
    description: "Comprehensive business advisory services to help you make informed decisions and achieve your business goals.",
    services: [
      {
        title: "Business Model Design",
        description: "Business Plan Templates for reusable and editable business plans to capitalize on market opportunity.",
        icon: "/assets/icons/business-model.svg"
      },
      {
        title: "Funding Solutions",
        description: "Grant money, venture capital, and seed money for business growth.",
        icon: "/assets/icons/funding.svg"
      },
      {
        title: "Market Entry Strategy",
        description: "Leveraging competition and market information for successful market entry.",
        icon: "/assets/icons/market-entry.svg"
      },
      {
        title: "Legal & Regulatory Compliance",
        description: "Legal advisory services and compliance for startups & businesses.",
        icon: "/assets/icons/legal.svg"
      },
      {
        title: "Pitch Deck & Investor Readiness",
        description: "Create pitch decks nicely prepared with great investor slides to attract funding.",
        icon: "/assets/icons/pitch-deck.svg"
      },
      {
        title: "Networking & Business Growth",
        description: "Make connections with incubators, industry entrepreneurs, investors and sources of money.",
        icon: "/assets/icons/networking.svg"
      }
    ],
    cta: "Begin your career on the right path! Call us today.",
    link: "/services#business-advisory"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    subtitle: "Rebooting Business by Technology",
    description: "Maximize Your Web Potential & Business Growth",
    services: [
      {
        title: "Web Development Solutions",
        description: "Custom web development, e-commerce web development, CMS integration, and mobile web development.",
        icon: "/assets/icons/web-dev.svg"
      },
      {
        title: "Digital Marketing Solutions",
        description: "Search engine marketing, pay-per-click, social media marketing, and email marketing.",
        icon: "/assets/icons/digital-marketing.svg"
      },
      {
        title: "Branding & Design",
        description: "Logo design, brand identity, visual identity, and marketing material.",
        icon: "/assets/icons/branding.svg"
      },
      {
        title: "Other Digital Solutions",
        description: "Mobile application development, UI/UX, video production, and analytics.",
        icon: "/assets/icons/digital-solutions.svg"
      }
    ],
    cta: "Bring it to the next level with our revamped web development and marketing solutions!",
    link: "/services#digital-transformation"
  },
  {
    id: "legal-consultancy",
    title: "Legal Consultancy",
    subtitle: "For Start-up & Businesses",
    description: "Legal Solutions to Protect Your Business",
    services: [
      {
        title: "Startups & MSME Compliance",
        description: "Udyam, GEM, and Startup India scheme registration.",
        icon: "/assets/icons/msme.svg"
      },
      {
        title: "Corporate Legal Advisory",
        description: "Drafting of MOU, draft share agreement, and draft vendor agreement.",
        icon: "/assets/icons/corporate-legal.svg"
      },
      {
        title: "Tax Advisory & Compliance",
        description: "Drafting of GST return and TDS return, income tax compliances.",
        icon: "/assets/icons/tax.svg"
      },
      {
        title: "Intellectual Property Management",
        description: "Trademark registration, copyright registration, and patent registration.",
        icon: "/assets/icons/ip.svg"
      },
      {
        title: "Legal Training & Workshops",
        description: "Business update training free of law.",
        icon: "/assets/icons/legal-training.svg"
      }
    ],
    cta: "Secure your business with safe legal advisory and compliance consultancy.",
    link: "/services#legal-consultancy"
  },
  {
    id: "business-consultancy",
    title: "Business Consultancy",
    subtitle: "Business & Financial Optimization",
    description: "Success of Business with Strategic Consultancy",
    services: [
      {
        title: "Debt Advisory & Restructuring",
        description: "Optimize credit health and funding planning.",
        icon: "/assets/icons/debt.svg"
      },
      {
        title: "Funding Consultation",
        description: "Debt, equity, grant, and NBFC funding.",
        icon: "/assets/icons/funding-consultation.svg"
      },
      {
        title: "Business Incorporation Services",
        description: "Private Ltd., LLP, OPC, or proprietorship firm registration.",
        icon: "/assets/icons/incorporation.svg"
      },
      {
        title: "Accounting & Financial Planning",
        description: "Accounting outsourcing, cost saving, and valuation reports.",
        icon: "/assets/icons/accounting.svg"
      },
      {
        title: "Market Growth & Operating Plan",
        description: "Formulates business growth during the first phase in MSM.",
        icon: "/assets/icons/market-growth.svg"
      }
    ],
    cta: "Business development consultancy professionalism and financial worthiness.",
    link: "/services#business-consultancy"
  },
  {
    id: "personal-finance",
    title: "Personal Finance & Counselling",
    subtitle: "Financial Wellness for a Better Tomorrow",
    description: "Genius Budgeting for a Thriving Future",
    services: [
      {
        title: "Investment Planning",
        description: "Let money grow by investing in shares, mutual funds, bonds and other alternative investments.",
        icon: "/assets/icons/investment.svg"
      },
      {
        title: "Tax Planning & Optimization",
        description: "Save tax outgo through intelligent financial planning.",
        icon: "/assets/icons/tax-planning.svg"
      },
      {
        title: "Retirement & Wealth Planning",
        description: "Plan wealth and financial independence with assured investment.",
        icon: "/assets/icons/retirement.svg"
      },
      {
        title: "Personal Debt Management",
        description: "Professional solution for availing loan, credit and loan repayment management.",
        icon: "/assets/icons/personal-debt.svg"
      },
      {
        title: "Emergency Fund Planning",
        description: "Plan emergency outgo through intelligent financial contingency plans.",
        icon: "/assets/icons/emergency-fund.svg"
      }
    ],
    cta: "Take control of your financial future with our expert guidance.",
    link: "/services#personal-finance"
  }
];

  return (
    <>
      <PageHeading
        title="Our Services"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Services"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        {servicesData.map((service, index) => (
          <Div key={service.id} id={service.id} className="serviceSection">
            <Div className="serviceHeader">
              <div className="serviceTitleWrapper">
                <h2 className="serviceTitle">{service.title}</h2>
              </div>
              <h3 className="serviceSubtitle">{service.subtitle}</h3>
              <div className="serviceDescriptionWrapper">
                <span className="serviceLine"></span>
                <p className="serviceDescription">{service.description}</p>
                <span className="serviceLine"></span>
              </div>
            </Div>
            <Div className="serviceGrid">
              {service.services.map((item, i) => (
                <Div key={i} className="serviceCard">
                  <div className="serviceCardInner">
                    <div className="serviceCardHeader">
                      <h4 className="serviceItemTitle">{item.title}</h4>
                    </div>
                    <div className="serviceCardContent">
                      <p className="serviceItemDescription">{item.description}</p>
                    </div>
                    <div className="serviceCardIcon">
                      <img 
                        src={`/images/icons/service_icon_2.svg`}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </Div>
              ))}
            </Div>
            {index !== servicesData.length - 1 && (
              <>
                <Spacing lg="60" md="40"/>
                <div className="sectionDivider"></div>
                <Spacing lg="60" md="40"/>
              </>
            )}
          </Div>
        ))}
      </Div>
      <Spacing lg="120" md="50" />
    </>
  );
}
