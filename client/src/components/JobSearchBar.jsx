import React, { useState } from 'react';

const JobSearchBar = (props) => {
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [keywords, setKeywords] = useState('');

    const handleSearch = () => {
        const searchCriteria = {
            location,
            jobType,
            keywords,
        };
        // You can call a function to handle the search criteria here
        props.onSearch(searchCriteria);
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}>
            <h2 className="text-heading text-2xl font-heading mb-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: '700' }}>Job Search</h2>
            <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                    style={{ marginBottom: '8px', fontSize: '14px', lineHeight: '1.6', borderColor: '#E0E0E0' }}
                />
                <input
                    type="text"
                    placeholder="Job Type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                    style={{ marginBottom: '8px', fontSize: '14px', lineHeight: '1.6', borderColor: '#E0E0E0' }}
                />
                <input
                    type="text"
                    placeholder="Keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                    style={{ marginBottom: '8px', fontSize: '14px', lineHeight: '1.6', borderColor: '#E0E0E0' }}
                />
            </div>
            <button
                onClick={handleSearch}
                className="mt-4 bg-primaryButton text-white py-2 px-4 rounded"
                style={{ backgroundColor: '#4CAF50', hover: 'bg-opacity-80', transition: '0.3s ease-in-out' }}
            >
                Search
            </button>
        </div>
    );
}

export default JobSearchBar;