import React from 'react';

const JobPostSuccessNotification = ({ onViewJobListing, onReturnToDashboard }) => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 p-4" style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '4px', transition: '0.3s ease-in-out' }}>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-['Roboto'] text-2xl font-bold" style={{ lineHeight: '1.5' }}>Success!</h2>
                    <p className="text-sm" style={{ color: '#FFFFFF' }}>Your job has been posted successfully.</p>
                </div>
                <button onClick={() => onViewJobListing()} className="mr-2 px-4 py-2 font-medium text-[#4CAF50] bg-[#FFFFFF] rounded" style={{ transition: '0.3s', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#f0f0f0'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                    View Job Listing
                </button>
                <button onClick={() => onReturnToDashboard()} className="px-4 py-2 font-medium text-[#FFFFFF] bg-[#FFC107] rounded" style={{ transition: '0.3s', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#e0a800'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFC107'}>
                    Return to Dashboard
                </button>
            </div>
        </div>
    );
};

export default JobPostSuccessNotification;