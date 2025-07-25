
import React from 'react';
import './CourseNav.css';

const CourseNav = ({ setFilter, activeCategory }) => {
  const categories = ['Show All',  'In-Demand skills','Core Programming', 'Job-Ready Tools'];

  return (
    <div className="courseNav">
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseNav;
