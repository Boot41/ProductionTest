import React, { useState } from 'react';

const JobPostingForm = ({ onSubmit }) => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    jobType: '',
    applicationDeadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(jobDetails);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '24px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ color: '#212121', fontSize: '24px', fontWeight: '700' }}>Post a Job</h2>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', color: '#757575', marginBottom: '8px' }}>Job Title</label>
        <input
          type="text"
          name="title"
          value={jobDetails.title}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
          onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', color: '#757575', marginBottom: '8px' }}>Job Description</label>
        <textarea
          name="description"
          value={jobDetails.description}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
          onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', color: '#757575', marginBottom: '8px' }}>Requirements</label>
        <textarea
          name="requirements"
          value={jobDetails.requirements}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
          onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', color: '#757575', marginBottom: '8px' }}>Location</label>
        <input
          type="text"
          name="location"
          value={jobDetails.location}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
          onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', color: '#757575', marginBottom: '8px' }}>Job Type</label>
        <input
          type="text"
          name="jobType"
          value={jobDetails.jobType}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
          onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', color: '#757575', marginBottom: '8px' }}>Application Deadline</label>
        <input
          type="date"
          name="applicationDeadline"
          value={jobDetails.applicationDeadline}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#4CAF50')}
          onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#388E3C')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
      >
        Submit Job Posting
      </button>
    </form>
  );
};

export default JobPostingForm;