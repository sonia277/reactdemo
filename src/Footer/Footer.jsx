import React, { useState } from 'react';
import './Footer.css';
import emailjs from '@emailjs/browser';
import FooterDown from './FooterDown'

const Footer = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_5cf6evv',        // Replace with your actual SERVICE ID
      'template_7pv4t5c',       // Replace with your actual TEMPLATE ID
      form,
      'KGF_tB5mPrEk5YwBs'       // Replace with your actual PUBLIC KEY
    )
    .then((response) => {
      alert("Message sent successfully! ✅");
      setForm({
        name: '',
        phone: '',
        email: '',
        title: '',
        message: ''
      });  // Reset form
    })
    .catch((err) => {
      alert("Failed to send message ❌");
      console.error(err);
    });
  };

  return (
    <>
    <div className="fotereskdfhj">
      <h2 className='titlemain'>Contact Us</h2>
    </div>
      <div className="mainFooter">
          
        <div className="container">
         
          <div className="wrapFooter">
            <div className="leftSetion">
              <div className="lftconnnnnnfoot">
                <p className='mainpara paracoolr'>Contact Us</p>
                <h2 className='mainheading'> Let’s Build Your Future Together</h2>
                <p className='mainpara'>
At Vinia Institute, we’re not just teaching tech — we’re building careers, confidence, and a community of learners who grow together.

Whether you have questions about our courses, want to collaborate, or need guidance on your learning journey, we’re here for you.                </p>
                <div className="dicocuntSection">
                  <div className="of50">
                    <p className='off'>OFF</p>
                    <p className='per50'>20%</p>
                  </div>
                  <div className="wrapdicoun">
                    <div className="spacial">
                      <p className='vlddd'>VALIDATE: <span>only this month</span></p>
                      <p className='sp_yujn'>Special Offer <span>20%</span> OFF!</p>
                    </div>
                    <div className="cirrcle">
                      {/* <span>m</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rightSection">
              <div className='doublecircle'></div>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder='Your Name'
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                /><br />
                <input
                  type="tel"
                  placeholder='Your Phone Number'
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                /><br />
                <input
                  type="email"
                  placeholder='Your Email'
                  name="email"
                  className='yourmsg'
                  value={form.email}
                  onChange={handleChange}
                  required
                /><br />
                <input
                  type="text"
                  placeholder='Subject / Title'
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                /><br />
                <textarea
                  placeholder='Your Message'
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button className='sqboxbtn' id='footerbtn' type="submit">Send Message Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterDown></FooterDown>
    </>
  );
};

export default Footer;
