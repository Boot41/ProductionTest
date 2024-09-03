import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobDetails from '../components/JobDetails';

const JobDetailsPage = () => {
  return (
    <div className="bg-white text-gray-700 font-['Roboto', sans-serif]">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold leading-6 text-heading mb-4">Job Details</h1>
        <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
          <JobDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailsPage;