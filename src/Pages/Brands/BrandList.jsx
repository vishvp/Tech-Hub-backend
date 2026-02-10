import { useEffect, useState } from "react";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const [showAddForm, setShowAddForm] = useState(false);
    const [newBrand, setNewBrand] = useState("");

    // Load categories
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("brands")) || [
            "HP",
            "Dell",
            "Samsung",
            "Lenovo",
            "Asus",
        ];
        setCategories(stored);
    }, []);

    const saveToStorage = (data) => {
        setCategories(data);
        localStorage.setItem("brands", JSON.stringify(data));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(categories[index]);
    };

    const handleUpdate = () => {
        if (!editValue.trim()) return;
        const updated = [...categories];
        updated[editIndex] = editValue.trim();
        saveToStorage(updated);
        setEditIndex(null);
        setEditValue("");
    };

    const handleDelete = (index) => {
        if (!window.confirm("Delete this brand?")) return;
        saveToStorage(categories.filter((_, i) => i !== index));
    };

    const handleAddBrand = () => {
        if (!newBrand.trim()) return;

        if (categories.includes(newBrand.trim())) {
            alert("Brand already exists");
            return;
        }

        saveToStorage([...categories, newBrand.trim()]);
        setNewBrand("");
        setShowAddForm(false);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">

            {/* PAGE HEADER */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Brand</h1>
                    <p className="text-sm text-gray-500">
                        Manage product Brand
                    </p>
                </div>

                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-5 py-2 rounded-md bg-blue-600 text-white
                    hover:bg-blue-700 transition text-sm"
                >
                    + Add Brand
                </button>
            </div>

            {/* ADD BRAND FORM */}
            {showAddForm && (
                <div className="bg-white border rounded-xl shadow-sm p-4">
                    <h3 className="font-semibold text-gray-700 mb-3">
                        Add New Brand
                    </h3>

                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={newBrand}
                            onChange={(e) => setNewBrand(e.target.value)}
                            placeholder="Enter brand name"
                            className="flex-1 border rounded-md px-3 py-2 text-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={handleAddBrand}
                            className="px-5 py-2 rounded-md bg-green-600
                            text-white hover:bg-green-700 transition text-sm"
                        >
                            Save
                        </button>

                        <button
                            onClick={() => {
                                setShowAddForm(false);
                                setNewBrand("");
                            }}
                            className="px-5 py-2 rounded-md bg-gray-100
                            text-gray-600 hover:bg-gray-200 transition text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* TABLE CARD */}
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr className="text-gray-600">
                            <th className="px-6 py-3 text-left w-12">#</th>
                            <th className="px-6 py-3 text-left">Brand</th>
                            <th className="px-6 py-3 text-right w-48">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map((cat, i) => (
                            <tr
                                key={i}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 text-gray-500">
                                    {i + 1}
                                </td>

                                <td className="px-6 py-4">
                                    {editIndex === i ? (
                                        <input
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            className="w-full border rounded-md px-3 py-1.5
                                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    ) : (
                                        <span className="font-medium text-gray-700">
                                            {cat}
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-4 text-right space-x-2">
                                    {editIndex === i ? (
                                        <button
                                            onClick={handleUpdate}
                                            className="px-4 py-1.5 rounded-md bg-blue-600
                                            text-white hover:bg-blue-700 transition"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleEdit(i)}
                                            className="px-4 py-1.5 rounded-md bg-blue-100
                                            text-blue-600 hover:bg-blue-200 transition"
                                        >
                                            Edit
                                        </button>
                                    )}

                                    <button
                                        onClick={() => handleDelete(i)}
                                        className="px-4 py-1.5 rounded-md bg-red-100
                                        text-red-600 hover:bg-red-200 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {categories.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No brands available
                    </div>
                )}
            </div>
        </div>
    );
}