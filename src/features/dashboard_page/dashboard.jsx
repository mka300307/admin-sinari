import Sidebar from "../../components/sidebar.jsx";
import Navbar from "../../components/navbar.jsx";
import ChartBar from "./components/bar_chart.jsx";
import React from "react";
import {FaUserInjured} from "react-icons/fa";
import ChartPie from "./components/pie_chart.jsx";

export default function DashboardPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar/>

                <div className="w-full h-ful p-6 ">
                    <div className="flex-1">
                        <div className="flex items-center">
                            <div className="flex items-center gap-5">
                                <h1 className="text-3xl font-bold">Dashboard</h1>
                                <div className="flex text-xl text-[#AAAAAA] gap-2">
                                    <h1><a href="/">Dashboard</a></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-5 mt-8">
                        <div className="w-full h-[72px] bg-white rounded-xl justify-between items-center p-4 flex">
                            <div>
                                <p className="text-[12px] text-[#A0AEC0]">Pasien baru /hari ini</p>
                                <p className="text-[16px] font-bold text-black">68</p>
                            </div>
                            <div className="w-[42px] h-[42px] bg-[#67C6FB] rounded-xl p-2">
                                <img src="/pasien.svg" alt="Logo" className="size-6"/>
                            </div>
                        </div>
                        <div className="w-full h-[72px] bg-white rounded-xl justify-between items-center p-4 flex">
                            <div>
                                <p className="text-[12px] text-[#A0AEC0]">Sumbit Skring/hari ini</p>
                                <p className="text-[16px] font-bold text-black">12</p>
                            </div>
                            <div className="w-[42px] h-[42px] bg-[#67C6FB] rounded-xl p-2">
                                <img src="/form.svg" alt="Logo" className="size-6"/>

                            </div>
                        </div>
                        <div className="w-full h-[72px] bg-white rounded-xl justify-between items-center p-4 flex">
                            <div>
                                <p className="text-[12px] text-[#A0AEC0]">Kluster Aktif /hari ini</p>
                                <p className="text-[16px] font-bold text-black">4</p>
                            </div>
                            <div className="w-[42px] h-[42px] bg-[#67C6FB] rounded-xl p-2">
                                <img src="/kluster.svg" alt="Logo" className="size-6"/>
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-5 justify-center items-center align-middle mt-8">
                        <ChartBar/>
                        <ChartPie/>
                    </div>
                </div>

            </div>
        </div>
    );
}
