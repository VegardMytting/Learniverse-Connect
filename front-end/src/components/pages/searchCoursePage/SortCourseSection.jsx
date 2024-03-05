// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import CourseSection from '../../courseBox/CourseBox';
// import CourseFilter from '../../../../CourseFilter';

// function SortByCourseSection({ sortBy }) {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetchCourses(sortBy);
//   }, [sortBy]);

//   const fetchCourses = async (sortBy) => {
//     try {
//       let url = 'http://localhost:8081/api/courses';
//       if (sortBy) {
//         url += `?sortBy=${sortBy}`;
//       }

//       const response = await fetch(url, {
//         credentials: 'include'
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch courses');
//       }

//       const data = await response.json();
//       setCourses(data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const handleSortChange = (sortCriteria) => {
//     fetchCourses(sortCriteria);
//   };

//   return (
//     <div>
//       <CourseFilter onSortChange={handleSortChange} />
//       <CourseSection courses={courses} />
//     </div>
//   );
// }

// SortByCourseSection.propTypes = {
//   sortBy: PropTypes.string.isRequired,
// };

// export default SortByCourseSection;