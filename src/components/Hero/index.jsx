import React from 'react';
import Div from '../Div';
import './hero.scss';
import { motion } from 'framer-motion';

export default function Hero({
  title,
  subtitle,
  description,
  buttons,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="cs-hero_title"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="cs-hero_subtitle"
            >
              {subtitle}
            </motion.h2>
          )}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="cs-hero_description"
            >
              {description}
            </motion.p>
          )}
          {buttons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {buttons}
            </motion.div>
          )}
        </Div>
      </Div>
      <Div className="cs-hero_social_wrap">
        <Div className="cs-hero_social_title">{socialLinksHeading}</Div>
        <Div className="cs-hero_social_links">{heroSocialLinks}</Div>
      </Div>
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
