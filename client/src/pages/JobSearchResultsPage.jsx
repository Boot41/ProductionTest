import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobSearchBar from '../components/JobSearchBar';
import JobResultsList from '../components/JobResultsList';

const JobSearchResultsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primaryBackground font-['Roboto']">
            <Header />
            <main className="flex-grow px-medium py-large">
                <h1 className="text-heading font-heading mb-medium text-heading">Job Search Results</h1>
                <JobSearchBar />
                <div className="mt-large">
                    <JobResultsList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobSearchResultsPage;