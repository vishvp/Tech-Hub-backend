import { useEffect, useState } from "react";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const [newCategory, setNewCategory] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

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
        if (!window.confirm("Delete this category?")) return;
        saveToStorage(categories.filter((_, i) => i !== index));
    };

    const handleAddCategory = () => {
        if (!newCategory.trim()) return;

        if (categories.includes(newCategory.trim())) {
            alert("Category already exists");
            return;
        }

        saveToStorage([...categories, newCategory.trim()]);
        setNewCategory("");
        setShowAddForm(false);
    };

    return (
        <div className="max-w-4xl mx-auto">

            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Categories
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage your product categories
                    </p>
                </div>

                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-5 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
                >
                    + Add Category
                </button>
            </div>


            {/* ADD CATEGORY FORM */}
            {showAddForm && (
                <div className="mb-6 bg-white border rounded-xl p-4 shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-3">
                        Add New Category
                    </h3>

                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            placeholder="Enter category name"
                            className="flex-1 border rounded-md px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={handleAddCategory}
                            className="px-5 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
                        >
                            Save
                        </button>

                        <button
                            onClick={() => {
                                setShowAddForm(false);
                                setNewCategory("");
                            }}
                            className="px-5 py-2 rounded-md bg-gray-100 text-gray-600 text-sm hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* TABLE CARD */}
            <div className="bg-white rounded-xl shadow border overflow-hidden">

                <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-6 py-3 text-left">#</th>
                            <th className="px-6 py-3 text-left">Category</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map((cat, i) => (
                            <tr
                                key={i}
                                className="border-t hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4">{i + 1}</td>

                                <td className="px-6 py-4">
                                    {editIndex === i ? (
                                        <input
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            className="w-full border rounded-md px-3 py-1
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
                      text-white text-sm hover:bg-blue-700"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleEdit(i)}
                                            className="px-4 py-1.5 rounded-md bg-blue-100
                      text-blue-600 text-sm hover:bg-blue-200"
                                        >
                                            Edit
                                        </button>
                                    )}

                                    <button
                                        onClick={() => handleDelete(i)}
                                        className="px-4 py-1.5 rounded-md bg-red-100
                    text-red-600 text-sm hover:bg-red-200"
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
                        No categories available
                    </div>
                )}
            </div>
        </div>
    );
}