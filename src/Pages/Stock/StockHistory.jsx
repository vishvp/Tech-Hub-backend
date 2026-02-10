import React from "react";

export default function StockHistory() {
    // Dummy data (MongoDB later)
    const history = [
        { date: "27 Jan 2026", brand: "Samsung", product: "Galaxy Charger", type: "IN", qty: 120, ref: "Purchase" },
        { date: "27 Jan 2026", brand: "Samsung", product: "Galaxy Charger", type: "OUT", qty: 15, ref: "Sale" },
        { date: "26 Jan 2026", brand: "Apple", product: "iPhone Cable", type: "IN", qty: 80, ref: "Purchase" },
        { date: "26 Jan 2026", brand: "Apple", product: "iPhone Cable", type: "OUT", qty: 10, ref: "Sale" },
        { date: "25 Jan 2026", brand: "HP", product: "Wireless Mouse", type: "IN", qty: 150, ref: "Purchase" },
        { date: "25 Jan 2026", brand: "HP", product: "Wireless Mouse", type: "OUT", qty: 20, ref: "Sale" },
        { date: "24 Jan 2026", brand: "Dell", product: "Laptop Adapter", type: "IN", qty: 40, ref: "Purchase" },
        { date: "24 Jan 2026", brand: "Dell", product: "Laptop Adapter", type: "OUT", qty: 4, ref: "Sale" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-6">

            {/* PAGE HEADER */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Stock History
                </h1>
                <p className="text-sm text-gray-500">
                    Complete stock movement (In & Out)
                </p>
            </div>

            {/* TABLE CARD */}
            <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">

                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr className="text-gray-600">
                            <th className="px-6 py-3 text-left">Date</th>
                            <th className="px-6 py-3 text-left">Brand</th>
                            <th className="px-6 py-3 text-left">Product</th>
                            <th className="px-6 py-3 text-center">Type</th>
                            <th className="px-6 py-3 text-center">Qty</th>
                            <th className="px-6 py-3 text-left">Reference</th>
                        </tr>
                    </thead>

                    <tbody>
                        {history.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 text-gray-500">
                                    {item.date}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                                        {item.brand}
                                    </span>
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {item.product}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    {item.type === "IN" ? (
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-semibold">
                                            IN
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 font-semibold">
                                            OUT
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-4 text-center">
                                    {item.type === "IN" ? (
                                        <span className="text-green-600 font-semibold">
                                            +{item.qty}
                                        </span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">
                                            -{item.qty}
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-4 text-gray-500">
                                    {item.ref}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {history.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No stock history available
                    </div>
                )}
            </div>
        </div>
    );
}
