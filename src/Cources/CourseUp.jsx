import React, { useState, useEffect } from 'react';
import './CourseUp.css';
import CourseNav from './CourseNav';
import { courses } from './Data';

const CourseUp = ({ searchTerm = '' }) => {
  const [filter, setFilter] = useState('Show All');
  const [showAll, setShowAll] = useState(false);

  // Function to filter courses based on both category and search term
  const getFilteredCourses = () => {
    let filtered = courses;

    // First apply category filter
    if (filter !== 'Show All') {
      filtered = filtered.filter(course => course.category === filter);
    }

    // Then apply search filter from header
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(course =>
        course.cvname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.techname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.bold.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredCourses = getFilteredCourses();
  
  // Determine which courses to display
  const coursesToDisplay = showAll || searchTerm ? filteredCourses : filteredCourses.slice(0, 6);
  const hasMoreCourses = filteredCourses.length > 6 && !searchTerm;

  // Handle category filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false); // Reset to showing only 6 when changing category
  };

  // Handle Read More button click
  const handleReadMore = () => {
    setShowAll(true);
  };

  // Clear search when component unmounts or when needed
  const clearSearch = () => {
    setFilter('Show All');
  };

  // Reset showAll when search term changes
  useEffect(() => {
    if (searchTerm) {
      setShowAll(false);
    }
  }, [searchTerm]);

  return (
    <div className='courseUp'>
      <div className="container">
        

        <h2 className='titlemain'>Letest Course</h2>
       

        {/* Category Navigation - Always functional */}
        <CourseNav 
          setFilter={handleFilterChange} 
          activeCategory={filter} 
          searchActive={searchTerm !== ''}
        />

        {/* Search Results Info */}
        {searchTerm && (
          <div style={{
            textAlign: 'center',
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '10px',
            color: '#666',
            fontSize: '14px',
            border: '1px solid #e9ecff'
          }}>
            {filteredCourses.length > 0 
              ? (
                <span>
                  🔍 Found <strong>{filteredCourses.length}</strong> course(s) for "<strong>{searchTerm}</strong>"
                  {filter !== 'Show All' && ` in ${filter} category`}
                </span>
              ) : (
                <span>
                  ❌ No courses found for "<strong>{searchTerm}</strong>"
                  {filter !== 'Show All' && ` in ${filter} category`}
                </span>
              )
            }
          </div>
        )}

        {/* Courses Grid */}
        <div className="boxCoursse" id='forpadding'>
          {coursesToDisplay.length > 0 ? (
            coursesToDisplay.map((course) => (
              <div className="box" key={course.id}>
                <img src={course.im} alt="" />
                <span className='courseName'>{course.cvname}</span>
                <p className='cvprice'><span>Rs</span>{course.cvprice}</p>
                <div className="kkhl4">
                  {/* <p className='cvteacherName'>{course.techname}</p> */}
                  <h2 className='bold'>{course.techname}</h2>
                </div>
              </div>
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#666',
              width: '100%'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '20px'
              }}>
                🔍
              </div>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>No courses found</h3>
              <p style={{ marginBottom: '20px' }}>
                {searchTerm 
                  ? `No courses match "${searchTerm}"${filter !== 'Show All' ? ` in ${filter} category` : ''}`
                  : 'Try adjusting your filter criteria'
                }
              </p>
              {filter !== 'Show All' && (
                <button
                  onClick={() => setFilter('Show All')}
                  style={{
                    padding: '12px 24px',
                    background: '#222f59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Show All Categories
                </button>
              )}
            </div>
          )}
        </div>

        {/* Read More Button */}
        {hasMoreCourses && !showAll && (
          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            <button
              onClick={handleReadMore}
              style={{
                padding: '15px 40px',
                background: '#222f59',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(34, 47, 89, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 47, 89, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 47, 89, 0.3)';
              }}
            >
              Read More
              <span style={{ fontSize: '20px' }}>→</span>
            </button>
            <p style={{
              marginTop: '10px',
              color: '#666',
              fontSize: '14px'
            }}>
              {filteredCourses.length - 6} more courses available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseUp;
