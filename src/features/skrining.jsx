import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/navbar.jsx";

export default function SkriningPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar/>
                <div className="flex-1 p-6">
                    <h1 className="text-3xl font-bold">Welcome to the Skrining</h1>
                </div>
            </div>
        </div>
    );
}
