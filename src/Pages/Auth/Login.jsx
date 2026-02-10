import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    // If already logged in, don't show login page
    useEffect(() => {
        const isAuth = localStorage.getItem("adminAuth");
        if (isAuth) {
            navigate("/dashboard", { replace: true });
        }
    }, [navigate]);

    const handleLogin = () => {
        // temporary login (replace with API later)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Admin Login
                </h1>

                <input
                    type="email"
                    placeholder="admin@pptechhub.com"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />

                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full mb-4 px-4 py-2 border rounded"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
