import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingForm from '../components/JobPostingForm';
import JobListingManager from '../components/JobListingManager';
import JobPostSuccessNotification from '../components/JobPostSuccessNotification';

const EmployerDashboard = () => {
  return (
    <div className="font-['Roboto', sans-serif] bg-primaryBackground p-medium">
      <Header />
      <main className="my-large">
        <h1 className="text-heading text-primaryColor mb-medium">Employer Dashboard</h1>
        <JobPostingForm />
        <JobPostSuccessNotification />
        <JobListingManager />
      </main>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;