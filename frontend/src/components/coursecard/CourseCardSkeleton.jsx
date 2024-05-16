import React from 'react';
import './courseCardSkeleton.css'

const CourseCardSkeleton = () => {
    return (
        <div className="courseCardSkeleton">
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>
        </div>
    );
};

export default CourseCardSkeleton;