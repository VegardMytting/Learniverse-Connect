import React from 'react';
import PropTypes from 'prop-types';
import './courseBoxStyling.css';
import programmingImage from '../../resources/images/coursebox/computer/programming.jpg';

function CourseBox({title, difficulty, credits, onClick, cheapestPrice}) {
  const roundToTwoDecimalPlaces = (number) => {
    return Math.round(number * 100) / 100;
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className="course-box" onClick={handleClick} role="button" tabIndex="0">
      <div className="course-box-upper" style={{backgroundImage: `url(${programmingImage})`}}>
      </div>
      <div className="course-box-lower">
        <h4>{title}</h4>
        <p>Difficulty: {difficulty}</p>
        <p>Credits: {credits}</p>
        <p>cheapestPrice: {roundToTwoDecimalPlaces(cheapestPrice)} NOK </p>
      </div>
    </div>
  );
}

CourseBox.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  cheapestPrice: PropTypes.number,
};

export default CourseBox;