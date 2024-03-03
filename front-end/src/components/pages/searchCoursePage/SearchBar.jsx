import React, { useState } from 'react';
import CourseBox from '../../courseBox/CourseBox';
// import CourseBox from './CourseBox'; // Import your CourseBox component

const SearchCourses = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8081/api/search?query=${query}`, {
                credentials: 'include' // Include credentials in the request
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setResults(data);
        } catch (error) {
            setError('Error searching courses. Please try again later.');
            console.error('Error searching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
            />
            <button onClick={handleSearch} disabled={loading}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {results.length > 0 ? (
                    results.map((course) => (
                        <CourseBox key={course.courseID} course={course} />
                    ))
                ) : (
                    <p>No courses found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchCourses;
