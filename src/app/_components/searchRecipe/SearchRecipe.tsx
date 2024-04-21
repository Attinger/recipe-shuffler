"use client"
import React, { useState } from 'react';
import { FaSearch, FaSlidersH } from 'react-icons/fa';

export const SearchRecipe = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim()) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2 p-4">
            <div className="flex items-center w-full">
                {/* Search Input */}
                <div className="flex items-center flex-grow bg-white shadow rounded-lg overflow-hidden">
                    <FaSearch className="text-gray-400 m-4" />
                    <input
                        type="text"
                        placeholder="Search recipe"
                        className="w-full py-2 pr-4 outline-none"
                        aria-label="Search recipe"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                {/* Filters Button */}
                <button
                    aria-label="Filters"
                    className="bg-green-500 rounded-full p-3 shadow ml-2"
                >
                    <FaSlidersH className="text-white" />
                </button>
            </div>
            {showError && (
                <p className="text-red-500 text-sm mt-1">
                    Sorry, die Suche wird noch entwickelt - Versuche es später nochmal.
                </p>
            )}
        </div>
    );
};
