import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("adminAuth");
        navigate("/login");
    };

    return (
        <nav className="h-16 bg-white border-b flex justify-between px-6 items-center">
            <h2 className="font-semibold">Admin Panel</h2>

            <button
                onClick={logout}
                className="text-sm text-red-600 hover:underline"
            >
                Logout
            </button>
        </nav>
    );
}
