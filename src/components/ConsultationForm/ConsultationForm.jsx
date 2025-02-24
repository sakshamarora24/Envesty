import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ConsultationForm.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: ''
  });
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then(() => {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('');
          setFormData({ name: '', email: '', mobile: '', subject: '' });
        }, 2000);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className={styles.modal}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <div className={styles.formContent}>
            <h2>Book a Free Consultation</h2>
            <p>Take the first step towards your business growth</p>
            
            <form ref={form} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of Discussion"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className={`${styles.submitButton} ${status === 'sending' ? styles.sending : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 
                 status === 'success' ? 'Sent Successfully!' : 
                 status === 'error' ? 'Error! Try Again' : 
                 'Book Consultation'}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConsultationForm;
