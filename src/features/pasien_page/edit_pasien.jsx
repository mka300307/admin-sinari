import Sidebar from "../../components/sidebar.jsx";
import Navbar from "../../components/navbar.jsx";
import {useParams} from "react-router-dom";
import dummyData from "./data_sources/dummy_data.jsx";
import React from "react";

export default function EditPasien () {
    const { id } = useParams();
    const patient = dummyData.find(p => p.id === parseInt(id));

    if (!patient) {
        return <div>Patient not found</div>;
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden bg-gray-100">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div className="h-full w-full p-6">
                        <div className="flex-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-5">
                                    <h1 className="text-3xl font-bold">Dashboard</h1>
                                    <div className="flex text-xl text-[#AAAAAA] gap-2">
                                        <h1><a href="/pasien">Pasien</a></h1>
                                        <h1>/</h1>
                                        <h1>Detail Pasien</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 block  w-full bg-white px-8 py-12 rounded-lg">
                            <div className="flex gap-4 mb-5">
                                <div className="w-full">
                                    <span className="text-[14px]">NIK Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.nik}</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-[14px]">Nama Lengkap Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.nama}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-5">
                                <div className="w-full">
                                    <span className="text-[14px]">Usia Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.usia}</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-[14px]">Kluster Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.kluster}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-5">
                                <div className="w-full">
                                    <span className="text-[14px]">Alamat Email Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.email}</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-[14px]">TTL Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.tanggalLahir}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-5">
                                <div className="w-full">
                                    <span className="text-[14px]">Desa Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.desa}</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-[14px]">Alamat Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.alamat}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-5">
                                <div className="w-full">
                                    <span className="text-[14px]">Jenis Kelamin Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.jenisKelamin}</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-[14px]">Status Kehamilan Pasien</span>
                                    <div className="mt-1 w-full h-[50px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm flex items-center">
                                        <span className="text-[14px] text-[#8E8E8E] px-2">{patient.statusKehamilan}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex w-full gap-5 items-end justify-end  ">
                                <button className="bg-[#FF0000] w-[265px] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                                    Hapus Perubahan
                                </button>
                                <button className="bg-blue-500 w-[265px] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                                    Simpan
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}