import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    // SAMPLE DATA
    useEffect(() => {
        setProducts([
            {
                id: 1,
                product_name: "HP Pavilion Laptop",
                cat_id: "Laptop",
                brand_id: "HP",
                sku: "HP-LAP-001",
                cost_price: 45000,
                selling_price: 52000,
                current_stock: 25,
                min_stock_level: 10,
                description: "15.6 inch laptop, i5 processor",
                created_at: "2025-01-10",
                updated_at: "2025-01-20",
            },
            {
                id: 2,
                product_name: "Samsung Galaxy S22",
                cat_id: "Mobile",
                brand_id: "Samsung",
                sku: "SAM-MOB-002",
                cost_price: 38000,
                selling_price: 45000,
                current_stock: 8,
                min_stock_level: 10,
                description: "Android flagship smartphone",
                created_at: "2025-01-12",
                updated_at: "2025-01-25",
            },
            {
                id: 3,
                product_name: "Logitech Wireless Mouse",
                cat_id: "Accessories",
                brand_id: "Logitech",
                sku: "LOG-ACC-010",
                cost_price: 600,
                selling_price: 999,
                current_stock: 120,
                min_stock_level: 30,
                description: "Ergonomic wireless mouse",
                created_at: "2025-01-05",
                updated_at: "2025-01-18",
            },
        ]);
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-6">

            {/* PAGE HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                    <p className="text-sm text-gray-500">
                        Manage all products and stock levels
                    </p>
                </div>
                <Link
                    to="/AddProduct"
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white
    text-sm font-medium hover:bg-blue-700 transition"
                >
                    + Add Product
                </Link>
            </div>
            {/* TABLE */}
            <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">

                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr className="text-gray-600">
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">Product</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Brand</th>
                            <th className="px-4 py-3 text-left">SKU</th>
                            <th className="px-4 py-3 text-right">Cost</th>
                            <th className="px-4 py-3 text-right">Selling</th>
                            <th className="px-4 py-3 text-center">Stock</th>
                            <th className="px-4 py-3 text-center">Min Stock</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((p) => (
                            <tr
                                key={p.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 text-gray-500">{p.id}</td>

                                <td className="px-4 py-3">
                                    <div className="font-medium text-gray-800">
                                        {p.product_name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {p.description}
                                    </div>
                                </td>

                                <td className="px-4 py-3">{p.cat_id}</td>
                                <td className="px-4 py-3">{p.brand_id}</td>
                                <td className="px-4 py-3 font-mono text-xs">{p.sku}</td>

                                <td className="px-4 py-3 text-right">
                                    ₹{p.cost_price.toLocaleString()}
                                </td>

                                <td className="px-4 py-3 text-right font-semibold">
                                    ₹{p.selling_price.toLocaleString()}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    {p.current_stock}
                                </td>

                                <td className="px-4 py-3 text-center">
                                    {p.min_stock_level}
                                </td>

                                <td className="px-4 py-3">
                                    {p.current_stock <= p.min_stock_level ? (
                                        <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                                            Low Stock
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                                            In Stock
                                        </span>
                                    )}
                                </td>

                                <td className="px-4 py-3 text-right space-x-2">
                                    <button className="px-3 py-1.5 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1.5 rounded-md bg-red-100 text-red-600 hover:bg-red-200">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {products.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No products available
                    </div>
                )}
            </div>
        </div>
    );
}
