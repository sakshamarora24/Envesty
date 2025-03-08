import React from 'react';
import parse from 'html-react-parser';
import Button from '../Button';
import Spacing from '../Spacing';
import Div from '../Div';
import './sectionheading2.scss';

export default function SectionHeading2({ subtitle, btnLink, btnText, variant, children }) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h3 className="cs-section_subtitle">{parse(subtitle)}</h3>
      {children && <div className="cs-section_text">{children}</div>}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText}/>
        </>
      )}
    </Div>
  );
}
