import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="front-end\public\2205242_college_course_degree_education_university_icon.svg" alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
