import React, { useState } from 'react';
import './ServicesDown.css';
import { FaChalkboardTeacher, FaCode, FaHandsHelping, FaInfinity } from "react-icons/fa";

const ServicesDown = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [spinIndex, setSpinIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = (index) => {
    setActiveTab(activeTab === index ? null : index);
    setSpinIndex(index);
    setTimeout(() => setSpinIndex(null), 500);
  };
      const scrollToSectionByClass = (className) => {
  const element = document.getElementsByClassName(className)[0];
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  
};

  const tabData = [
    {
      label: 'Why Choose Vinia Institute for Your Tech Journey?',
      content:
        "At Vinia Institute, we offer tech courses at affordable prices with the help of expert teachers. Our syllabus is made to match industry needs. We focus on practical learning, real projects, and career support — so you’re ready for real jobs, not just exams.",
    },
    {
      label: 'What Will You Learn at Vinia_Tech?',
      content:
        "At Vinia Institute, you’ll learn today’s most in-demand skills like MERN Stack, .NET, Python, C/C++, Data Analytics, SQL, and more — all through hands-on, real-world projects. We help you build strong basics, create impressive portfolio apps, and get fully job-ready for the tech industry.",
    },
    {
      label: 'How Does Vinia Support Students During and After the Course?',
      content:
        "We offer daily live doubt sessions, personal guidance on GitHub, LinkedIn, Internshala, and continuous project feedback. Even after course completion, students get access to career support, portfolio building, and recommendation for internships and job portals — because we believe in lifelong support.",
    },
    {
      label: 'Are the Trainers at Vinia Experienced and Industry-Ready?',
      content:
        "Yes! Our instructors are working professionals and certified trainers with real-world experience in software development and data analytics. They focus on practical teaching, mentorship, and guiding students through industry-level projects that reflect actual workplace scenarios.",
    },
    {
      label: 'What Kind of Projects Will I Build at Vinia?',
      content:
        "You’ll work on real-world projects like: *Personal Portfolio Website, *Blog App using MERN Stack, *E-commerce Site, *Data Dashboards using Power BI or Python. These projects help you learn by doing and also showcase your work to future employers.",
    },
    {
      label: 'Can I Attend a Demo Class Before Joining?',
      content:
        "Yes, of course! We offer free demo classes so you can experience our teaching style, content, and learning environment before enrolling. Your comfort matters.",
    },
  ];

  const visibleTabs = showAll ? tabData : tabData.slice(0, 4);

  return (
    <>
     <h2 className='titlemain'>About us</h2>
    <div className="mainServicesdowb">
      <div className="container">
       
        <div className="wrapServicesDown">
          <div className="left_Servic_Setion">  
            <div className="tabButtonsWrapper">
              {visibleTabs.map((tab, index) => (
                <div className="tabItem" key={index}>
                  <button
                    onClick={() => handleToggle(index)}
                    className={`tabButton ${activeTab === index ? 'active' : ''}`}
                  >
                    {tab.label}
                    <div className={`cl ${spinIndex === index ? 'spin' : ''}`}>
                      {activeTab === index ? '-' : '+'}
                    </div>
                  </button>
                  {activeTab === index && (
                    <p className="tabContent">{tab.content}</p>
                  )}
                </div>
              ))}
              <button
                onClick={() => setShowAll(!showAll)}
                className="read-more-btn"
              >
                {showAll ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>

          <div className="right_Service_Section">
            <div className="detailbx">
              <p className="mainpara paracoolr" id="abt">Welcome to Vinia</p>
              <h2 className="mainheading" id="hdddd"> Where Learning Meets Opportunity</h2>
              {/* <p className="mainpara" id="prr">
          We’re not just an ed-tech platform — we’re a community that empowers you to build a future-proof tech career.
              </p> */}

               <ul className="highlight-points">
          <li><FaChalkboardTeacher className="icon" /> Live, Mentor-Led Classes</li>
          <li><FaCode className="icon" /> Real Projects & Job-Ready Skills</li>
          <li><FaHandsHelping className="icon" /> Doubt Support & Career Mentoring</li>
          <li><FaInfinity className="icon" /> Lifetime Access at Affordable Pricing</li>
        </ul>

         <div className="mt-12 bg-gray-100 rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">🫂 Beyond the Classroom</h3>
        <p className="text-lg">
          At Vinia, you’re not just enrolling in a course —<br />
          you’re becoming part of a lifelong learning tribe.<br />
          We grow together, support each other, and celebrate each win — big or small.
        </p>
      </div>

             
              <li id='httppy' onClick={() => {scrollToSectionByClass("mainFooter");setActiveMenu("register");}} className={activeMenu === "register" ? "active" : ""}> <button className="sqboxbtn" id="btnonlypadding">Join Our Journey</button></li>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesDown;
