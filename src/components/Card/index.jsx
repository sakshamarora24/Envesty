import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';
import './card.scss';

export default function Card({ title, link, icon, subtitle }) {
  return (
    <Link to={link} className="cs-card cs-style1">
      <Div className="cs-card_inner">
        <Div className="cs-card_icon">{icon}</Div>
        <h3 className="cs-card_title">{title}</h3>
        {subtitle && <p className="cs-card_subtitle">{subtitle}</p>}
      </Div>
    </Link>
  );
}
