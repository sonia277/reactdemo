import React from 'react'
import './Services.css'
import sv1 from '../assets/ServiceImg/service-01.png';
import sv2 from '../assets/ServiceImg/service-02.png';
import sv3 from '../assets/ServiceImg/service-03.png';


const Services = () => {

  return (
    <>
    <div className="mainServices">
        
        <div className='container'>
            
            <div className="wrapservice">
                <div className="allconsr">
                    <div className="squareBox">
                         <div className="circuleIcon">
                        <img src={sv1} alt="" />
                        </div>
                        <h3>Learn from Those Who’ve Done It</h3>
                        <p className='mainpara'>Why learn from people who’ve only taught — when you can learn from those who’ve done it? Our mentors are working professionals from top tech companies,  the mindset it takes to grow in today’s fast-paced tech industry.</p>
                        
                    </div>
                </div>

                 <div className="allconsr">
                   
                      <div className="squareBox">
                         <div className="circuleIcon">
                        <img src={sv2} alt="" />
                    </div>
                        <h3>Industry-Focused Short Course</h3>
                        <p className='mainpara'>Designed to get you job-ready, these compact and practical training programs help you master in-demand skills in trending domains like Web Development, Python, Data Analytics, and more — all in less time, with lifelong impact.</p>
                        
                    </div>
                </div>


                 <div className="allconsr">
                    
                      <div className="squareBox">
                        <div className="circuleIcon">
                        <img src={sv3} alt="" />
                    </div>
                        <h3>A Community That Moves With You</h3>
                        <p className='mainpara'>You're never alone here. From your first class to your first job and beyond, you're part of a supportive community — learning, growing, and building lifelong connections. We don’t just build skills, we build lifelong bonds."**
</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services
