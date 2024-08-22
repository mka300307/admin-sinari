import {FaEdit, FaPlay, FaRegBell, FaTrashAlt} from "react-icons/fa";
import React, { useState } from "react";
import dataSkrining from "../data_sources/dummy_skrining.jsx";
import Pagination from "../../../components/pagination_pasien.jsx";

export default function TableSkrining({ filterKluster }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const filteredData = filterKluster
        ? dataSkrining.filter(data => data.jenisKluster === filterKluster)
        : dataSkrining;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="mt-8">
            <table className="min-w-full bg-white">
                <thead className="border border-gray-200 font-medium bg-[#F9FAFB]">
                <tr>
                    <th className="py-2 px-4">No</th>
                    <th className="py-2 px-4">Judul Skrining</th>
                    <th className="py-2 px-4">Jenis Kluster</th>
                    <th className="py-2 px-4">Total Soal</th>
                    <th className="py-2 px-4">Total Nilai Interpretasi</th>
                    <th className="py-2 px-4">Action</th>
                </tr>
                </thead>
                <tbody className="text-center text-[#7C7C7C]">
                {currentItems.map((data, index) => (
                    <tr key={data.id} className="border-b border-gray-200">
                        <td className="py-2 px-4 border-l  border-gray-200">{indexOfFirstItem + index + 1}</td>
                        <td className="py-2 px-4">{data.judulSkrining}</td>
                        <td className="py-2 px-4">{data.jenisKluster}</td>
                        <td className="py-2 px-4">{data.totalSoal}</td>
                        <td className="py-2 px-4">{data.totalNilaiInterpretasi}</td>
                        <td className="py-2 px-4 border-r border-gray-200 text-[#B1E3FF] gap-4 flex justify-center">
                            <FaPlay className="size-5" />
                            <FaEdit className="size-5" />
                            <FaTrashAlt className="size-5" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex items-center mt-10 justify-between">
                <span className="text-[12px]">Menampilkan 1 hingga {itemsPerPage} dari {filteredData.length} data</span>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredData.length / itemsPerPage)}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}
