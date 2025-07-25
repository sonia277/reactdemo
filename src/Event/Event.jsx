import React from 'react'
import './Event.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGreaterThan}from '@fortawesome/free-solid-svg-icons';
import ev1 from '../assets/Event/event-01.jpg'
import ev2 from '../assets/Event/event-02.jpg'
import ev3 from '../assets/Event/event-03.jpg'

const Event = () => {
  return (
    <>
        <div className="mainEvent">
             
<div className='container'>
     <h2 className='titlemain' id='eventhehgd'>Event</h2>    
          <div className="wrap">
              <div className="contevent">
                <img src={ev1} alt="" />
                <div className='evcourse'>
                    <p>Core Python</p>
                    <h3>Coding Bootcamp</h3>
                </div>
                {/* <div className="data">
                    <p>Date:</p>
                    <h4 className='btondark'>16 Feb 2026</h4>
                </div> */}
                <div className="duration">
                    <p>Duration</p>
                    <h4 className='btondark'> 10 Hours</h4>
                </div>
                <div className="price">
                    <p>Price:</p>
                    <h4 className='btondark'>Free</h4>
                </div>
                <div className="halfCircle">
                    <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                </div>
            </div>

               <div className="contevent">
                <img src={ev2} alt="" />
                 <div className='evcourse'>
                    <p>	Git & GitHub Workshop</p>
                    <h3>Career / Skill Dev</h3>
                </div>
                {/* <div className="data">
                    <p>Date:</p>
                    <h4 className='btondark'>24 Oct 2024</h4>
                </div> */}
                <div className="duration">
                    <p>Duration</p>
                    <h4 className='btondark'>2 hours</h4>
                </div>
                <div className="price">
                    <p>Price:</p>
                    <h4 className='btondark'>99 Rs.</h4>
                </div>
                <div className="halfCircle">
                     <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                </div>

            </div>
                                                                
              <div className="contevent" id='mkkkl'>
                <img src={ev3} alt="" />
                 <div className='evcourse'>
                    <p>	Career Talk:How to Get Hired</p>
                    <h3>Motivation / Career</h3>
                </div>
                {/* <div className="data">
                    <p>Date:</p>
                    <h4 className='btondark'>11 July 2025</h4>
                </div> */}
                <div className="duration">
                    <p>Duration</p>
                    <h4 className='btondark'> 1 Hour</h4>
                </div>
                <div className="price">
                    <p>Price:</p>
                    <h4 className='btondark'>Free</h4>
                </div>
                <div className="halfCircle">
                     <span><FontAwesomeIcon icon={faGreaterThan} /></span>
                </div>

            </div>
          </div>
             
            </div>
        </div>    
    </>
  )
}

export default Event
