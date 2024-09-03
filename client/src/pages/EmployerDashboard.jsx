import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
  return (
    <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif', padding: '16px' }}>
      <Header />
      <div style={{ width: '80%', margin: '0 auto', backgroundColor: '#FFFFFF', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
        <h1 style={{ color: '#212121', fontWeight: '700', fontSize: '24px', lineHeight: '1.5' }}>Employer Dashboard</h1>
        <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6' }}>
          The EmployerDashboard page integrates essential components including the Header, Footer, JobPostingForm for creating new listings, and the JobListingManager, providing a holistic job management platform for employers.
        </p>
        <JobPostingForm />
        <JobListingManager />
      </div>
      <Footer />
    </div>
  );
}

export default EmployerDashboard;