import { useState } from "react";

export default function AddProduct() {
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        name: "",
        brand: "",
        category: "",
        sku: "",
        price: "",
        stock: "",
        status: "",
        desc: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const validate = () => {
        let err = {};

        if (form.name.trim().length < 3) err.name = true;
        if (!form.brand) err.brand = true;
        if (!form.category) err.category = true;
        if (!/^SKU-\d{3,6}$/.test(form.sku)) err.sku = true;
        if (form.price <= 0) err.price = true;
        if (form.stock === "" || form.stock < 0) err.stock = true;
        if (!form.status) err.status = true;
        if (form.desc.trim().length < 10) err.desc = true;

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);

        if (validate()) {
            setSuccess(true);
            setForm({
                name: "",
                brand: "",
                category: "",
                sku: "",
                price: "",
                stock: "",
                status: "",
                desc: "",
            });
        }
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-b from-[#eef2fb] to-[#e7eaf6] font-[Segoe_UI]">

            {/* Main */}
            <main className="flex-1 p-10 flex justify-center">
                <div className="w-full max-w-[760px] bg-white p-9 rounded-[20px] border border-black/10 shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
                    <h2 className="mb-6 text-xl font-semibold text-[#1f2a44]">
                        Add New Product
                    </h2>

                    {success && (
                        <div className="bg-[#ecfdf5] text-[#16a34a] p-3 rounded-lg mb-4 text-sm">
                            ✅ Product added successfully!
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            {/* Product Name */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Product Name *
                                </label>
                                <input
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                />
                                {errors.name && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Product name required (min 3 characters)
                                    </span>
                                )}
                            </div>

                            {/* Brand */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Brand *
                                </label>
                                <select
                                    id="brand"
                                    value={form.brand}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                >
                                    <option value="">Select Brand</option>
                                    <option>Samsung</option>
                                    <option>Apple</option>
                                    <option>HP</option>
                                    <option>Dell</option>
                                </select>
                                {errors.brand && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Please select a brand
                                    </span>
                                )}
                            </div>

                            {/* Category */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Category *
                                </label>
                                <select
                                    id="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                >
                                    <option value="">Select Category</option>
                                    <option>Mobile Accessories</option>
                                    <option>Laptop Accessories</option>
                                    <option>Audio</option>
                                </select>
                                {errors.category && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Please select a category
                                    </span>
                                )}
                            </div>

                            {/* SKU */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    SKU *
                                </label>
                                <input
                                    id="sku"
                                    placeholder="SKU-1023"
                                    value={form.sku}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                />
                                {errors.sku && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        SKU format: SKU-1000
                                    </span>
                                )}
                            </div>

                            {/* Price */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Price *
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    value={form.price}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                />
                                {errors.price && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Enter valid price
                                    </span>
                                )}
                            </div>

                            {/* Stock */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Initial Stock *
                                </label>
                                <input
                                    type="number"
                                    id="stock"
                                    value={form.stock}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                />
                                {errors.stock && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Enter stock quantity
                                    </span>
                                )}
                            </div>

                            {/* Status */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Status *
                                </label>
                                <select
                                    id="status"
                                    value={form.status}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                >
                                    <option value="">Select Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                                {errors.status && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Select product status
                                    </span>
                                )}
                            </div>

                            {/* Image */}
                            <div className="flex flex-col">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Product Image
                                </label>
                                <input
                                    type="file"
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10"
                                />
                            </div>

                            {/* Description */}
                            <div className="flex flex-col col-span-2">
                                <label className="text-[13px] mb-1 text-[#5b6475]">
                                    Description *
                                </label>
                                <textarea
                                    id="desc"
                                    value={form.desc}
                                    onChange={handleChange}
                                    className="px-3 py-3 text-sm rounded-lg border border-black/10 resize-none h-[90px]"
                                />
                                {errors.desc && (
                                    <span className="text-xs text-[#dc2626] mt-1">
                                        Description minimum 10 characters
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mt-7">
                            <button
                                type="submit"
                                className="px-7 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#38598b] to-[#113f67]"
                            >
                                Save Product
                            </button>

                            <button
                                type="reset"
                                onClick={() => {
                                    setForm({
                                        name: "",
                                        brand: "",
                                        category: "",
                                        sku: "",
                                        price: "",
                                        stock: "",
                                        status: "",
                                        desc: "",
                                    });
                                    setErrors({});
                                    setSuccess(false);
                                }}
                                className="px-7 py-3 rounded-lg bg-[#e7eaf6] font-semibold"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}