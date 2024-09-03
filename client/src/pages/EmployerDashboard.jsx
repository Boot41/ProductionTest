import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';

const EmployerDashboard = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5', fontFamily: '"Roboto", sans-serif' }}>
            <Header />
            <div style={{ padding: '24px', maxWidth: '80%', margin: '0 auto' }}>
                <h1 style={{ color: '#212121', fontSize: '24px', fontWeight: '700', lineHeight: '1.5' }}>
                    Employer Dashboard
                </h1>
                <p style={{ color: '#757575', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                    The EmployerDashboard page integrates essential components such as the Header, Footer, JobPostingForm, and JobListingManager, providing a comprehensive platform for employers to easily post and manage their job listings.
                </p>
                <JobPostingForm />
                <JobListingManager />
            </div>
            <Footer />
        </div>
    );
};

export default EmployerDashboard;