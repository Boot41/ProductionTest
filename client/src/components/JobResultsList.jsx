import React from 'react';

const JobResultsList = ({ jobs }) => {
  return (
    <div className="flex flex-wrap justify-center bg-secondaryBackground p-medium" style={{ width: '80%' }}>
      {jobs.map((job, index) => (
        <div 
          key={index} 
          className="bg-primaryBackground border border-borderColors shadow-cardStyles rounded-borderRadius p-medium m-small hover:shadow-lg transition-shadow duration-300"
          style={{ width: 'calc(33.33% - 16px)' }} // Adjust width based on desired layout
        >
          <h2 className="text-heading font-heading text-2xl" style={{ lineHeight: '1.5' }}>{job.title}</h2>
          <p className="text-body text-sm mb-small">{job.company} - {job.location}</p>
          <p className="text-body text-md">{job.description}</p>
          <a 
            href={job.link} 
            className="inline-block mt-medium text-links hover:underline transition-all duration-300"
          >
            View Details
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobResultsList;