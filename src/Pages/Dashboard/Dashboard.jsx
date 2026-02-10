import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const barData = {
        labels: ["Mobile", "Laptop", "Tablet", "Accessories"],
        datasets: [
            {
                data: [120, 90, 45, 70],
                backgroundColor: "#38598b",
                borderRadius: 6,
            },
        ],
    };

    const donutData = {
        labels: ["Phone", "Laptop", "Ring", "Accessories"],
        datasets: [
            {
                data: [40, 30, 15, 15],
                backgroundColor: [
                    "#38598b",
                    "#113f67",
                    "#22c55e",
                    "#f59e0b",
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="space-y-6">

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    ["Total Users", "10", "text-blue-600"],
                    ["Total Products", "36", "text-green-600"],
                    ["Total Stock", "3000", "text-purple-600"],
                    ["Total Sales", "₹4,85,600", "text-orange-600"],
                ].map(([title, value, color]) => (
                    <div key={title} className="bg-white p-5 rounded-xl shadow">
                        <h4 className="text-sm text-gray-500">{title}</h4>
                        <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
                    </div>
                ))}
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">
                        Device-wise Sales
                    </h3>
                    <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-lg font-semibold mb-4">
                        Category Sales Distribution
                    </h3>
                    <Doughnut data={donutData} options={{ cutout: "70%" }} />
                </div>
            </div>

        </div>
    );
}
