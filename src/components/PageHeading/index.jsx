import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './pageheading.css';

export default function PageHeading({ title, bgSrc, pageLinkText, overlay }) {
  return (
    <Div
      className={`cs-page_heading cs-style1 cs-center text-center cs-bg ${overlay ? 'cs-overlay' : ''}`}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
