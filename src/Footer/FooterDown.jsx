import React, { useState } from 'react';
import './FooterDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg'


const Footer2 = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const scrollToSectionByClass = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mainfoot222">
      <div className="container">
        <div className="wrapft2">
          <div className="foootertitle">
            <div className="imgwrap">
              <img src={logo} alt="" />
            <div className="wiii">
              <h3>VIN<span>IA</span></h3>
             <h3><span>INST</span>ITTUTE</h3>
            </div>
            </div>
           
            <p>At Vinia Institute, we don’t just teach — we prepare you for the future. Master programming, build projects, and get certified with guidance from industry experts.</p>
             
            <div className="iconfoot">
              
            </div>
          </div>
          <div className="uslink">
            <h3 className='namefoote222'>USEFUL LINKS</h3>
            <ul>
              <li onClick={() => { scrollToSectionByClass("mainHeader"); setActiveMenu("home"); }} className={activeMenu === "home" ? "active" : ""}>Home</li>
              <li onClick={() => { scrollToSectionByClass("mainsrvices"); setActiveMenu("services"); }} className={activeMenu === "services" ? "active" : ""}>Services</li>
              <li onClick={() => { scrollToSectionByClass("maincourse"); setActiveMenu("courses"); }} className={activeMenu === "courses" ? "active" : ""}>Courses</li>
              <li onClick={() => { scrollToSectionByClass("mainteam"); setActiveMenu("team"); }} className={activeMenu === "team" ? "active" : ""}>Team</li>
              <li onClick={() => { scrollToSectionByClass("mainEvent"); setActiveMenu("event"); }} className={activeMenu === "event" ? "active" : ""}>Event</li>
              <li onClick={() => { scrollToSectionByClass("mainFooter"); setActiveMenu("register"); }} className={activeMenu === "register" ? "active" : ""}>Register Now</li>
            </ul>
          </div>
          <div className="tpcourse">
             <h3 className='namefoote222'>Top Cources</h3>
            <li>Certification Courses</li>

          
            <li>Diploma Courses</li>
            <li>MERN Stack Course</li>
            <li>.Net Course</li>
            <li>Programming Languages : python, java etc.</li>
            <li>Computer Course</li>
            <li>Excel with AI</li>
            <li>Data Analytics Course</li>
          </div>
          <div className="adress">
                 <h3 className='namefoote222'>Contact</h3>
            <p><FontAwesomeIcon icon={faLocationDot} /> E/30 Gali NO.12 Mandawali Fazalpur</p>
            <p><FontAwesomeIcon icon={faPhone}/> +91 1234567890 , +91 6457421464</p>
             <p><FontAwesomeIcon icon={faEnvelope} /> info@vinia.com</p>
            <p></p>
          </div>
        </div>
        <p className='mention'>©VINIA is Proudly Managed by <a href='https://www.linkedin.com/in/sonia-thakur-aa8a03190'> Sonia Thakur </a> and <a href="https://www.linkedin.com/in/mayank-kumar-36766428b/" className='mkhh'>Mayank Kumar</a></p>
      </div>
    </div>
  );
};

export default Footer2;
