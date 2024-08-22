// src/components/TopNavbar.jsx
import React from 'react';
import {FaRegBell, FaRegUserCircle, FaUserCircle,} from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className="w-full h-16 bg-white text-white flex items-center justify-between px-6 border">
            <div className="flex items-center">
                <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center text-black">
                <div className="relative mr-4">
                    <FaRegBell className="text-2xl " />
                </div>
                <FaRegUserCircle className="text-2xl text-[#AAAAAA] " />
            </div>
        </div>
    );
};

