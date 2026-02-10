import { Link, } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-white border-r shadow-lg">

            <div className="h-16 flex items-center justify-center border-b">
                <h1 className="text-xl font-bold text-blue-600">
                    P&P <span className="text-gray-700">Tech Hub</span>
                </h1>
            </div>

            <ul className="p-4 space-y-2 text-sm font-medium">
                <li className="px-4 py-3 rounded-lg bg-blue-600 text-white">Dashboard</li>
                <Link to="/Dashboard">Dashboard</Link>


                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/CategoryList">Category</Link>
                </li>

                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/BrandList">Brands</Link>
                </li>

                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/Products">Products</Link>
                </li>


                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/StockIn">Purchase (Stock In)</Link>
                </li>

                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/Stockout">Sales (Stock Out)</Link>
                </li>

                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/StockHistory">Stock History</Link>
                </li>

                <li className="px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-100">
                    <Link to="/Reports">Reports</Link>
                </li>
            </ul>

        </aside>
    );
}
