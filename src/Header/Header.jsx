import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';
import star from './star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCirclePlay,
  faEnvelope,         // ✅ Replaced invalid 'faM'
  faPhoneVolume,
  faXmark,             
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { data } from './data';

const Header = () => {
  const [index, setIndex] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [showIcon, setShowIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSectionByClass = (className) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fix navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > window.innerHeight * 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show scroll-to-top icon
  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="mainHeader">
        <div className="container">
          <div className={`navbar ${isNavbarFixed ? 'fixed' : ''}`}>
            <img src={logo} className="my_logo" alt="Logo" />
            <div
              className="menu"
              style={{ display: showMenu ? 'block' : '', transition: '0.3s' }}
            >
              <ul>
                <li
                  onClick={() => {
                    scrollToSectionByClass('mainHeader');
                    setActiveMenu('home');
                  }}
                  className={activeMenu === 'home' ? 'active' : ''}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    scrollToSectionByClass('mainsrvices');
                    setActiveMenu('services');
                  }}
                  className={activeMenu === 'services' ? 'active' : ''}
                >
                  Services
                </li>
                <li
                  onClick={() => {
                    scrollToSectionByClass('maincourse');
                    setActiveMenu('courses');
                  }}
                  className={activeMenu === 'courses' ? 'active' : ''}
                >
                  Courses
                </li>
                <li
                  onClick={() => {
                    scrollToSectionByClass('clxs');
                    setActiveMenu('team');
                  }}
                  className={activeMenu === 'team' ? 'active' : ''}
                >
                  Team
                </li>
                <li
                  onClick={() => {
                    scrollToSectionByClass('mainEvent');
                    setActiveMenu('event');
                  }}
                  className={activeMenu === 'event' ? 'active' : ''}
                >
                  Event
                </li>
                <li
                  onClick={() => {
                    scrollToSectionByClass('fotereskdfhj');
                    setActiveMenu('register');
                  }}
                  className={activeMenu === 'register' ? 'active' : ''}
                >
                  Register Now
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="menu_event"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* slider section */}
          <div
            className="sliderHome"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${data[index].img})`,
            }}
          >
            <img src={star} alt="" id='star'/>
            <div className="sliderCon">
              <button className="btn1111">{data[index].btn}</button>
              <h1 className="sliderHeading">{data[index].heading}</h1>
              <p className="mainpara">{data[index].para}</p>

              <div className="downSlideconnnn">
                <button className="rq" onClick={() => scrollToSectionByClass('mainFooter')}>
                  Request Demo
                </button>
                <div className="wrapvv">
                  {/* <FontAwesomeIcon icon={faCirclePlay} className='play'/> */}
                  <p className="mainpara">{data[index].icc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* slider dots */}
          
          <div className="slider-dots">
            {data.map((_, i) => (
              <span
                key={i}
                className={`dot ${index === i ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>

          {/* Floating icons */}
          <div className="iconsheader">
            <a
              href="https://wa.me/919648574287"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} id="whatspp" />
            </a>
            <FontAwesomeIcon icon={faInstagram} id="intaiii" />
            <a href="tel:+919648574287">
              <FontAwesomeIcon icon={faPhoneVolume} id="phone" />
            </a>
            <FontAwesomeIcon icon={faEnvelope} id="gmi" />
          </div>

          {/* Scroll-to-top icon */}
          <div
            className={`scroll-icon ${showIcon ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
