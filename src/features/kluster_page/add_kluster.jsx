import Sidebar from "../../components/sidebar.jsx";
import Navbar from "../../components/navbar.jsx";


export default function TambahKluster() {
    return (
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
                            <div className=" w-full ">
                                <label className="block text-sm font-medium text-gray-700">Nama Kluster</label>
                                <input type="text" placeholder="Masukan nama kluster"
                                       className="mt-1 block w-full h-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div className=" w-full">
                                <label className="block text-sm font-medium text-gray-700">Nama Petugas</label>
                                <input type="number" placeholder="Masukan nama Petugas"
                                       className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-10 h-12">
                            <div className="w-full ">
                                <label className="block text-sm font-medium text-gray-700">Jam Oprasional</label>
                                <input type="email" placeholder="Masukan jam oprasional"
                                       className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
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