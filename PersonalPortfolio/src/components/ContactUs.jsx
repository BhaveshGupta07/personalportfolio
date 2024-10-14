import React, { useState } from 'react';
import emailjs from 'emailjs-com';



const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);  
      })
      .catch((error) => {
        console.log(error.text);
      });

    setFormData({ user_name: '', user_email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Contact Me</h2>

       
        {isSubmitted && <p style={styles.confirmation}>Your message has been sent successfully!</p>}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
    padding: '20px',
  },
  formContainer: {
    background: 'radial-gradient(circle, rgba(145,143,254,1) 0%, rgba(212,247,243,1) 100%)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    color: 'black',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
  },
  textarea: {
    padding: '12px',
    color: 'black',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    height: '120px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#6e45e2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#88d3ce',
  },
  confirmation: {
    textAlign: 'center',
    fontSize: '16px',
    color: 'green',
    marginBottom: '15px',
  },
};

export default ContactUs;
