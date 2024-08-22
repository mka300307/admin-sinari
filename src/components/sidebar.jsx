import React, { useState } from 'react';
import { FaBookOpen, FaChartLine, FaRegUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(location.pathname);
    const isActive = (path) => activeMenu === path;

    return (
        <div className="h-screen w-64 bg-white text-white flex flex-col">
            <div className="flex items-center justify-center h-16 bg-background mt-2">
                <img src="/icon.svg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl text-black font-semibold">Sinari</span>
            </div>

            <nav className="flex-1 mt-10 px-5 py-5">
                <ul>
                    <li className={`rounded-lg h-12 ${isActive('/') ? 'bg-[#E0ECF2]' : ''}`}>
                        <a
                            href="/"
                            className={`flex items-center p-3 ${isActive('/') ? 'text-[#67C6FB]' : 'text-[#AAAAAA]'} rounded-lg`}
                            onClick={() => setActiveMenu('/')}
                        >
                            <FaChartLine className="mr-3" />
                            <div>Dashboard</div>
                        </a>
                    </li>

                    <li className={`rounded-lg h-12 ${isActive('/pasien') ? 'bg-[#E0ECF2]' : ''}`}>
                        <a
                            href="/pasien"
                            className={`flex items-center p-3 ${isActive('/pasien') ? 'text-[#67C6FB]' : 'text-[#AAAAAA]'}  rounded-lg`}
                            onClick={() => setActiveMenu('/pasien')}
                        >
                            <FaRegUser className="mr-3" />
                            <div>Pasien</div>
                        </a>
                    </li>

                    <li className={`rounded-lg h-12 ${isActive('/skrining') ? 'bg-[#E0ECF2]' : ''}`}>
                        <a
                            href="/skrining"
                            className={`flex items-center p-3 ${isActive('/skrining') ? 'text-[#67C6FB]' : 'text-[#AAAAAA]'} rounded-lg`}
                            onClick={() => setActiveMenu('/skrining')}
                        >
                            <FaBookOpen className="mr-3" />
                            <div>Skrining</div>
                        </a>
                    </li>

                    <li className={`rounded-lg h-12 ${isActive('/kluster') ? 'bg-[#E0ECF2]' : ''}`}>
                        <a
                            href="/kluster"
                            className={`flex items-center p-3 ${isActive('/kluster') ? 'text-[#67C6FB]' : 'text-[#AAAAAA]'} rounded-lg`}
                            onClick={() => setActiveMenu('/kluster')}
                        >
                            <FaRegUser className="mr-3" />
                            <div>Kluster</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
