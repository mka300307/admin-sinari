import Sidebar from "../../components/sidebar.jsx";
import Navbar from "../../components/navbar.jsx";

export default function AddPasienPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="flex-1 p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-5">
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <div className="flex text-xl text-[#AAAAAA] gap-2">
                                <h1><a href="/pasien">Pasien</a></h1>
                                <h1>/</h1>
                                <h1>Tambahkan Pasien</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 rounded-lg bg-white p-8">
                        <h1 className="text-2xl font-semibold mb-5">Tambahkan Akun Pasien</h1>
                        <div className="flex gap-5 mb-10 h-12">
                            <div className=" w-full">
                                <label className="block text-sm font-medium text-gray-700">NIK Pasien</label>
                                <input type="number" placeholder="Masukan nik pasien" className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div className=" w-full ">
                                <label className="block text-sm font-medium text-gray-700">Nama Lengkap Pasien</label>
                                <input type="text" placeholder="Masukan nama lengkap pasien" className="mt-1 block w-full h-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-10 h-12">
                            <div className="w-full ">
                                <label className="block text-sm font-medium text-gray-700">Alamat Email Pasien</label>
                                <input type="email" placeholder="Masukan alamat email pasien" className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div className="w-full ">
                                <label className="block text-sm font-medium text-gray-700">Tanggal Lahir Pasien</label>
                                <input type="date" placeholder="Masukan tanggal lahir pasien" className="mt-1 block w-full h-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-10 h-12">
                            <div className=" w-full  ">
                                <label className="block text-sm font-medium text-gray-700">Desa Pasien</label>
                                <input type="text" placeholder="Masukan Desa pasien" className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div className=" w-full ">
                                <label className="block text-sm font-medium text-gray-700">Alamat Rumah Pasien</label>
                                <input type="text" placeholder="Masukan alamat rumah pasien" className="mt-1 block w-full h-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-12 h-12">
                            <div className=" w-full ">
                                <label className="block text-sm font-medium text-gray-700">Jenis Kelamin Pasien</label>
                                <input type="text" placeholder="Masukan jenis kelamin pasien" className="mt-1 block h-full w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                            <div className=" w-full ">
                                <label className="block text-sm font-medium text-gray-700">Password Pasien</label>
                                <input type="text" placeholder="Masukan Password pasien" className="mt-1 block w-full h-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                                Tambahkan Akun Pasien
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
