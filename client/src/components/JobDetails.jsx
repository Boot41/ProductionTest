import React from 'react';

const JobDetails = ({ jobTitle, company, location, description, requirements, applyLink }) => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg" style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}>
            <h1 className="text-heading font-heading text-2xl mb-4" style={{ color: '#212121' }}>{jobTitle}</h1>
            <h2 className="text-body font-body text-xl mb-2" style={{ color: '#757575' }}>{company}</h2>
            <p className="text-body mb-4" style={{ color: '#757575' }}>{location}</p>
            <div className="border-t border-b border-gray-300 py-4">
                <h3 className="text-heading font-heading text-lg" style={{ color: '#212121' }}>Job Description</h3>
                <p className="text-body" style={{ color: '#757575' }}>{description}</p>
            </div>
            <div className="py-4">
                <h3 className="text-heading font-heading text-lg" style={{ color: '#212121' }}>Requirements</h3>
                <ul className="list-disc pl-5">
                    {requirements.map((req, index) => (
                        <li key={index} className="text-body" style={{ color: '#757575' }}>{req}</li>
                    ))}
                </ul>
            </div>
            <a href={applyLink} className="inline-block mt-4 px-4 py-2 bg-primaryButton text-white rounded" 
                style={{ background: '#4CAF50', transition: '0.3s ease-in-out' }}
                onMouseOver={(e) => e.currentTarget.style.background = '#388E3C'} 
                onMouseOut={(e) => e.currentTarget.style.background = '#4CAF50'}>
                Apply Now
            </a>
        </div>
    );
};

export default JobDetails;