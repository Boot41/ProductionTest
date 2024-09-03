import React from 'react';

const JobListingManager = ({ jobListings, onEdit, onDelete }) => {
  return (
    <div style={{ backgroundColor: '#F5F5F5', padding: '24px' }} className="rounded shadow-lg">
      <h2 style={{ fontFamily: '"Roboto", sans-serif', fontSize: '24px', color: '#212121', marginBottom: '16px' }}>
        Job Listings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobListings.map((job) => (
          <div key={job.id} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '16px' }} className="hover:shadow-md transition-shadow duration-300">
            <h3 style={{ fontFamily: '"Roboto", sans-serif', fontSize: '20px', color: '#212121' }}>{job.title}</h3>
            <p style={{ fontFamily: '"Roboto", sans-serif', fontSize: '14px', color: '#757575' }}>{job.description}</p>
            <div className="mt-4">
              <button 
                onClick={() => onEdit(job.id)} 
                style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', padding: '8px 16px', borderRadius: '4px', borderWidth: '1px', borderColor: '#E0E0E0' }} 
                className="mr-2 hover:bg-green-700 transition duration-300">
                Edit
              </button>
              <button 
                onClick={() => onDelete(job.id)} 
                style={{ backgroundColor: '#FFC107', color: '#FFFFFF', padding: '8px 16px', borderRadius: '4px', borderWidth: '1px', borderColor: '#E0E0E0' }} 
                className="hover:bg-yellow-700 transition duration-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingManager;