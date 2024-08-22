import Sidebar from "../../components/sidebar.jsx";
import Navbar from "../../components/navbar.jsx";
import TableKluster from "./components/table_kluster.jsx";
import {FaFilter} from "react-icons/fa";

export default function KlusterPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar/>
                <div className="h-full w-full p-6">
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <h1 className="text-3xl font-bold">Dashboard</h1>
                                <div className="flex text-xl text-[#AAAAAA] gap-2">
                                    <h1>Kluster</h1>
                                    <h1>/</h1>
                                    <h1>List Kluster</h1>
                                </div>
                            </div>

                            <a className="bg-[#B1E3FF] text-white px-4 py-2 rounded-lg hover:bg-[#67C6FB] focus:outline-none"
                               href="/kluster/add-kluster"
                            >
                                + Tambahkan Kluster
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 w-full bg-white px-8 py-12 rounded-lg">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold">List Kluster</h1>
                            <div className="flex gap-3 items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-2 py-1 w-60 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#67C6FB] focus:border-transparent"
                                />
                                <div>
                                    <a className="bg-[#B1E3FF] text-white px-4 py-2 rounded-lg hover:bg-[#67C6FB] focus:outline-none"
                                       href="#"
                                    >
                                        Cari
                                    </a>
                                </div>
                            </div>
                        </div>
                        <TableKluster/>

                    </div>
                </div>

            </div>
        </div>
    );
}
