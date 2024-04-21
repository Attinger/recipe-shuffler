"use client"
import { FaHome, FaUser, FaBell, FaPlus, FaBookmark } from 'react-icons/fa';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React from 'react';

export function BottomNav() {
    const currentPathname = usePathname();

    // Function to determine if the link is active
    const isActive = (pathname: string): boolean => currentPathname === pathname;

    // Function to handle click on the plus icon
    const handlePlusClick = () => {
        console.log('hi');
    };

    return (
        <div className="fixed inset-x-0 bottom-0 bg-white text-gray-400 flex justify-between items-center py-2 px-4 shadow-lg max-w-screen-xl m-auto">
            <Link href="/" aria-label="Home">
                <div className={isActive('/') ? 'text-green-500' : ''}>
                    <FaHome size="24" />
                </div>
            </Link>
            <Link href="/bookmarks" aria-label="Bookmarks">
                <div className={isActive('/bookmarks') ? 'text-green-500' : ''}>
                    <FaBookmark size="24" />
                </div>
            </Link>
            <button
                aria-label="Add new item"
                className="text-white bg-green-500 rounded-full p-2"
                onClick={handlePlusClick}
            >
                <FaPlus size="24" />
            </button>
            <Link href="/notifications" aria-label="Notifications">
                <div className={isActive('/notifications') ? 'text-green-500' : ''}>
                    <FaBell size="24" />
                </div>
            </Link>
            <Link href="/profile" aria-label="Profile">
                <div className={isActive('/profile') ? 'text-green-500' : ''}>
                    <FaUser size="24" />
                </div>
            </Link>
        </div>
    );
}
