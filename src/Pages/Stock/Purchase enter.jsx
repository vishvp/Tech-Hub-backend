import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Purchaseenter() {
    const [form, setForm] = useState({
        brand: "",
        product: "",
        qty: "",
        costPrice: "",
        date: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Purchase Data:", form);
        alert("Purchase added (demo)");
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Add Purchase (Stock In)
                    </h1>
                    <p className="text-sm text-gray-500">
                        Enter purchase stock details
                    </p>
                </div>

                <Link
                    to="/StockIn"
                    className="text-sm text-blue-600 hover:underline"
                >
                    ← Back to Stock In
                </Link>
            </div>

            {/* FORM CARD */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-sm border space-y-4"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Brand</label>
                        <input
                            name="brand"
                            onChange={handleChange}
                            placeholder="Samsung"
                            className="w-full border rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Product</label>
                        <input
                            name="product"
                            onChange={handleChange}
                            placeholder="Galaxy Charger"
                            className="w-full border rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Quantity
                        </label>
                        <input
                            type="number"
                            name="qty"
                            onChange={handleChange}
                            placeholder="100"
                            className="w-full border rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Cost Price
                        </label>
                        <input
                            type="number"
                            name="costPrice"
                            onChange={handleChange}
                            placeholder="500"
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Purchase Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        onChange={handleChange}
                        rows="3"
                        placeholder="Optional note"
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                {/* ACTIONS */}
                <div className="flex justify-end gap-3 pt-4">
                    <Link
                        to="/StockIn"
                        className="px-4 py-2 rounded-lg border"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-green-600
            text-white font-medium hover:bg-green-700"
                    >
                        Save Purchase
                    </button>
                </div>
            </form>
        </div>
    );
}
