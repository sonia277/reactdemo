import React,{useState,useEffect} from 'react'
import './TeamDown.css'
import { data } from './data'
const TeamDown = () => {
    const [index,setIndex] = useState (0)

  //  function handlenext() {
  //   setIndex((prevIndex) => (prevIndex + 1) % data.length);
  // }

        useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
      <h2 className='titlemain' id='tasjdsf22'>Testimonals</h2>
   
    <div className="teamwork">
         
      <div className="container">
      
         <div className="downteam">
          <div className="teamDarkBox">
            <div className='left_sec'>
              <p className="slider_desc">"{data[index].paraTeam}"</p>
                  <div className="darkwrap">
                          <img src={data[index].tm} alt={data[index].teacherName} className="slider-img" />
                      <div className="user_details">
                            <p className="slider_role">{data[index].teach}</p>
                          <h3 className="slider_name">{data[index].teacherName}</h3>
                           
                      </div>
                  </div>
                   <div className="slider-dots">
                    {data.map((_, i) => (
                      <span
                        key={i}
                        className={`dot ${index === i ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                      ></span>
                    ))}
                  </div>
            </div>

          <div className="right_sec">
              <p className='mainpara paracoolr'>TESTIMONALS</p>
              <h2 className='mainheading'>What They Say About Us ?</h2>
              <p className='mainpara'>Our students consistently share how Vinia Institute transformed their learning journey. From mastering programming languages to landing internships and jobs, they’ve experienced real growth. With hands-on projects, expert mentoring, and a supportive community — success becomes a habit.</p>
          </div>
          </div>
        </div>
      </div>
     
    </div>
    </>
  );
};

export default TeamDown;

  
