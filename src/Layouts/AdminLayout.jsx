import Sidebar from "../Pages/Dashboard/Siderbar";
import Navbar from "../Pages/Dashboard/Navbar";

export default function AdminLayout({ children }) {
    return (
        <>
            {/* Fixed UI */}
            <Sidebar />
            <Navbar />

            {/* Main Content */}
            <div className="ml-64 pt-16 min-h-screen bg-gray-100 p-6">
                {children}
            </div>
        </>
    );
}
