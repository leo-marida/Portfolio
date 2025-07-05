import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = ({ variants, transition }) => {

  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  // This validation function now correctly checks for the 'user_' prefixed fields.
  const validateForm = () => {
    const newErrors = {};
    if (!form.current.user_name.value) newErrors.name = "Name is required";
    if (!form.current.user_email.value) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.current.user_message.value) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Submit button clicked. Starting validation...");

    if (!validateForm()) {
      console.log("Validation FAILED. Exiting sendEmail function.");
      return;
    }

    console.log("Validation PASSED. Attempting to send email...");
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log("SUCCESS!", result.status, result.text);
        setStatus('success');
        form.current.reset();
    }, (error) => {
        console.log("FAILED...", error);
        setStatus('error');
    });
  };

  return (
    <motion.div
      className={styles.contactContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <h1 className={styles.title}>Get In Touch</h1>
      <p className={styles.subtitle}>
        Have a project in mind or just want to say hi? Feel free to send me a message.
      </p>
      {/* The form's 'name' attributes are now perfectly matched to your template */}
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input type="text" name="user_name" placeholder="Your Name" className={errors.name ? styles.errorInput : ''} />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <input type="email" name="user_email" placeholder="Your Email" className={errors.email ? styles.errorInput : ''} />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <textarea name="user_message" placeholder="Your Message" rows="6" className={errors.message ? styles.errorInput : ''}></textarea>
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>
        <button type="submit" disabled={status === 'sending'} className={styles.submitButton}>
          {status === 'sending' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              className={`${styles.statusMessage} ${styles.success}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FaCheckCircle /> Message sent successfully! Check your inbox for a confirmation.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              className={`${styles.statusMessage} ${styles.error}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FaTimesCircle /> Oops! Something went wrong. Please check your credentials and try again.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default Contact;