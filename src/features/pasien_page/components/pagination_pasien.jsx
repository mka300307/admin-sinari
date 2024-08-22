import React from 'react';

export default function Pagination({ currentPage, totalPages, paginate }) {
    return (
        <div className="flex gap-3">
            <button
                className="p-2 rounded-full hover:bg-gray-300 focus:outline-none"
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
            >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <div className="flex items-center justify-center w-8 h-8 bg-[#B1E3FF] rounded-lg text-gray-700">
                {currentPage}
            </div>
            <button
                className="p-2 rounded-full hover:bg-gray-300 focus:outline-none"
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
            >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
}
