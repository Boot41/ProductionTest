import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSearchBar from '../components/JobSearchBar';
import JobResultsList from '../components/JobResultsList';

const CandidateDashboard = () => {
    return (
        <div style={{ fontFamily: '"Roboto", sans-serif', backgroundColor: '#F5F5F5', color: '#757575', padding: '16px' }}>
            <Header />
            <div style={{ maxWidth: '80%', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#212121', marginBottom: '16px' }}>Candidate Dashboard</h1>
                <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                    The CandidateDashboard page serves as a centralized hub for job seekers, featuring a user-friendly interface that includes a Header and Footer, 
                    a versatile JobSearchBar for efficient querying, and a JobResultsList to display matched job opportunities.
                </p>
                <JobSearchBar />
                <JobResultsList />
            </div>
            <Footer />
        </div>
    );
};

export default CandidateDashboard;