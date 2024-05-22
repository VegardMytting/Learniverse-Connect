import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slider';
import './priceFilter.css';

export default function PriceRangeFilter({ onPriceChange, maxPrice }) {
  const [sliderValues, setSliderValues] = useState([0, Math.ceil(maxPrice / 100) * 100]);
  const initialMaxPrice = useRef(maxPrice); // Store the initial maxPrice

  useEffect(() => {
    onPriceChange(sliderValues[0], sliderValues[1]);
  }, [sliderValues, onPriceChange]);

  // Handle slider value changes
  const handleSliderChange = (newValues) => {
    setSliderValues(newValues);
  };

  return (
    <div className="slider-container">
      <div className="slider-box">
        <h3>Price <span>Range</span></h3>
        <div className="values">{sliderValues[0]} - {sliderValues[1]}</div>
        <small>
          Current Range: {sliderValues[0]} - {sliderValues[1]}
        </small>
        <Slider
          className="slider"
          onChange={handleSliderChange}
          value={sliderValues}
          min={0}
          step={100}
          max={Math.ceil(initialMaxPrice.current / 100) * 100} // Use initialMaxPrice.current
        />
      </div>
    </div>
  );
}