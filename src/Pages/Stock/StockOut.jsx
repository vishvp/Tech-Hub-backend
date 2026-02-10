import React, { useState } from "react";

export default function StockOut() {
    const [showForm, setShowForm] = useState(false);

    // आपका Dummy Data
    const stockOutData = [
        {
            brand: "Samsung",
            product: "Galaxy Charger",
            desc: "25W Fast Charger",
            qty: 15,
            date: "27 Jan 2026",
        },
        {
            brand: "Apple",
            product: "iPhone Cable",
            desc: "USB-C to Lightning",
            qty: 10,
            date: "27 Jan 2026",
        },
        {
            brand: "Dell",
            product: "Laptop Adapter",
            desc: "65W Power Adapter",
            qty: 4,
            date: "26 Jan 2026",
        },
        {
            brand: "HP",
            product: "Wireless Mouse",
            desc: "Bluetooth Mouse",
            qty: 20,
            date: "26 Jan 2026",
        },
    ];

    const brands = ["Samsung", "Apple", "Vivo", "Oppo", "Realme", "Dell", "HP"];

    // Full Page Form View
    if (showForm) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 md:p-8 animate-in fade-in duration-300">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

                    {/* FORM HEADER */}
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Add Sale (Stock Out)</h1>
                            <p className="text-sm text-gray-500">Enter sales details below to update inventory</p>
                        </div>
                        <button
                            onClick={() => setShowForm(false)}
                            className="text-sm font-medium text-red-600 hover:text-red-800 transition"
                        >
                            ← Back to Sales List
                        </button>
                    </div>

                    {/* FORM BODY */}
                    <form className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Brand Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Samsung"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition bg-gray-50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Galaxy Charger"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition bg-gray-50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Sale Quantity</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition bg-gray-50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Selling Price</label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition bg-gray-50"
                                />
                            </div>
                        </div>

                        {/* SELECT BRAND DROPDOWN */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Select Brand</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-red-500 outline-none transition cursor-pointer">
                                <option value="">-- Choose a Brand --</option>
                                {brands.map((brand) => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Sale Date</label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Description / Note</label>
                            <textarea
                                rows="3"
                                placeholder="Enter customer info or sale notes..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 outline-none transition resize-none bg-gray-50"
                            ></textarea>
                        </div>

                        {/* FORM ACTIONS */}
                        <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-8 py-3 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition shadow-lg shadow-red-100"
                            >
                                Save Sale
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    // Main List Page
    return (
        <div className="max-w-7xl mx-auto space-y-6 p-6 animate-in fade-in duration-500">
            {/* PAGE HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Sales (Stock Out)
                    </h1>
                    <p className="text-base text-gray-500">
                        Monitor and manage your brand-wise sales history
                    </p>
                </div>

                <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition shadow-md hover:shadow-lg"
                >
                    + Add Sale
                </button>
            </div>

            {/* TABLE CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr className="text-gray-600 font-semibold">
                            <th className="px-6 py-4">Brand</th>
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4 text-center">Quantity</th>
                            <th className="px-6 py-4">Date</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {stockOutData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-50 text-purple-600 uppercase tracking-wider">
                                        {item.brand}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-800">{item.product}</td>
                                <td className="px-6 py-4 text-gray-500">{item.desc}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="px-3 py-1 rounded-lg bg-red-50 text-red-700 font-bold">
                                        -{item.qty}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 font-medium">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}