"use client"

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation';






const containerStyle: React.CSSProperties = {
    maxWidth: '480px',
    margin: '40px auto',
    padding: '24px',
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 6px 32px rgba(0,0,0,0.08), 0 1.5px 4px rgba(0,0,0,0.08)'
  };
  
  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '24px',
    color: '#2a2a2a',
    fontFamily: 'Segoe UI, Arial, sans-serif'
  };
  
  const groupStyle: React.CSSProperties = {
    marginBottom: '18px'
  };
  
  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    color: '#444',
    fontWeight: 500
  };
  
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    border: '1.5px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
    background: '#fafbfc',
    boxSizing: 'border-box'
  };
  
  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    resize: 'vertical'
  };
  
  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(90deg, #4f8cff 0%, #38c7ff 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s, box-shadow 0.2s',
    boxShadow: '0 2px 8px rgba(79,140,255,0.08)'
  };
  
  const successStyle: React.CSSProperties = {
    marginTop: '16px',
    color: '#2e7d32',
    textAlign: 'center'
  };
  
  const errorStyle: React.CSSProperties = {
    marginTop: '16px',
    color: '#d32f2f',
    textAlign: 'center'
  };





const EmailForm = () => {

  const router = useRouter(); 

//   const form = useRef(null);
const [isSubmitting, setIsSubmitting] = useState(false);
const [stateMessage, setStateMessage] = useState(null);
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.persist();
  e.preventDefault();
  setIsSubmitting(true);
  emailjs
    .sendForm(
      "service_dq09rzd",
      "template_19e61ua",
      e.currentTarget,
      "nb20rK-ttV-YtJzzz"
    )
    .then(
      (result) => {
        
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      },
      (error) => {
        
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      }
    );
  
  // Clears the form after sending the email
  // 
  setForm({ name: "", email: "", message: "" });
   
  router.push('/');
};


  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess("");
    setError("");
  };

  return (
    
      <form onSubmit={sendEmail} autoComplete="off">
        <h2 style={titleStyle}>Contact Us</h2>
        <div style={groupStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            style={inputStyle}
          />
        </div>
        <div style={groupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            style={inputStyle}
          />
        </div>
        <div style={groupStyle}>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Type your message..."
            style={textareaStyle}
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          style={buttonStyle}
          onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #38c7ff 0%, #4f8cff 100%)'}
          onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #4f8cff 0%, #38c7ff 100%)'}
        >
          Send Message
        </button>
        {success && <div style={successStyle}>{success}</div>}
        {error && <div style={errorStyle}>{error}</div>}
      </form>
    
  )
  
  
}

export default EmailForm