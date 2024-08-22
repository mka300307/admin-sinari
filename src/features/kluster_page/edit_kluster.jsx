import Sidebar from "../../components/sidebar.jsx";
import Navbar from "../../components/navbar.jsx";
import {useParams} from "react-router-dom";
import React from "react";
import dummyData from "./components/dummy_data_kluster.jsx";


export default function EditKluster(){
    const { id } = useParams();
    const patient = dummyData.find(p => p.id === parseInt(id));

    if (!patient) {
        return <div>Patient not found</div>;
    }
    return(

        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar/>
                <div className="flex-1 p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-5">
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <div className="flex text-xl text-[#AAAAAA] gap-2">
                                <h1><a href="/kluster">Kluster</a></h1>
                                <h1>/</h1>
                                <h1>Tambahkan Kluster</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 rounded-lg bg-white p-8">
                        <h1 className="text-2xl font-semibold mb-5">Tambahkan Kluster</h1>
                        <div className="flex gap-5 mb-10 h-12">
                            <div className="w-full">
                                <span className="text-[14px]">Nama Kluster</span>
                                <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                    <span className="text-[14px] text-[#8E8E8E] px-2">{patient.namaKluster}</span>
                                </div>
                            </div>
                            <div className="w-full">
                                <span className="text-[14px]">Nama Petugas</span>
                                <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                    <span className="text-[14px] text-[#8E8E8E] px-2">{patient.namaDokter}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-10 h-12">
                            <div className="w-full">
                                <span className="text-[14px]">Jam Oprasional</span>
                                <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                    <span className="text-[14px] text-[#8E8E8E] px-2">{patient.jamOperasional}</span>
                                </div>
                            </div>
                            <div className="w-full items-center ">
                                <label className="block text-sm font-medium text-gray-700">Foto Petugas</label>
                                <input type="file" placeholder="Masukan foto petugas"
                                       className="block w-full h-full p-3"/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                className="bg-[#B1E3FF] text-white px-4 py-2 rounded-lg hover:bg-[#67C6FB] focus:outline-none">
                                Tambahkan Akun Pasien
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}