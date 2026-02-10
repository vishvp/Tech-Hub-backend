import React, { useEffect, useState } from 'react';


const StockReport = () => {
    const [dateTime, setDateTime] = useState({ date: '', time: '' });

    useEffect(() => {
        const d = new Date();
        setDateTime({
            date: d.toDateString(),
            time: d.toLocaleTimeString()
        });
    }, []);

    const stockData = [
        { date: "26 Jan 2026", brand: "Samsung", product: "Galaxy Mouse", type: "IN", qty: "+50", ref: "Purchase" },
        { date: "26 Jan 2026", brand: "HP", product: "Keyboard", type: "IN", qty: "+20", ref: "Purchase" },
        { date: "27 Jan 2026", brand: "Dell", product: "Monitor 24\"", type: "IN", qty: "+12", ref: "Vendor Stock" },
        { date: "27 Jan 2026", brand: "Logitech", product: "Wireless Mouse", type: "OUT", qty: "-8", ref: "Sale" },
        { date: "28 Jan 2026", brand: "HP", product: "Laptop Bag", type: "OUT", qty: "-5", ref: "Sale" },
        { date: "28 Jan 2026", brand: "Lenovo", product: "USB Keyboard", type: "IN", qty: "+30", ref: "Purchase" },
        { date: "29 Jan 2026", brand: "Samsung", product: "SSD 1TB", type: "OUT`", qty: "-6", ref: "Installation" },
        { date: "29 Jan 2026", brand: "Asus", product: "Gaming Mouse", type: "IN", qty: "+15", ref: "Purchase" },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen p-4 md:p-10">
            <div className="report-box w-full max-w-[900px] bg-white p-6 md:p-12 rounded-[14px] border border-[#e2e8f0] animate-slide-up shadow-sm">

                {/* Header */}
                <div className="flex justify-between items-center pb-5 border-b-2 border-[#1e293b] animate-slide-down">
                    <div className="flex items-center gap-4">
                        <img
                            src="images/WhatsApp Image 2026-01-26 at 4.20.37 PM.jpeg"
                            alt="P&P Tech Hub Logo"
                            className="h-16"
                        />
                        <h1 className="text-[22px] font-bold tracking-wider text-[#1e293b]">P&P TECH HUB</h1>
                    </div>
                    <div className="bg-[#1e293b] text-white px-4 py-2 text-[12px] font-bold rounded-md animate-pulse">
                        VERIFIED REPORT
                    </div>
                </div>

                {/* Meta Info */}
                <div className="mt-[18px] flex justify-between text-[13px] text-[#64748b] pb-3.5 border-b border-[#e2e8f0] animate-fade-in">
                    <div>Report Date: <span className="font-bold text-[#0f172a]">{dateTime.date}</span></div>
                    <div>Generated At: <span className="font-bold text-[#0f172a]">{dateTime.time}</span></div>
                </div>

                {/* Stock Table */}
                <div className="mt-8 overflow-x-auto animate-fade-in">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#1e293b] text-white text-left text-[12px] uppercase tracking-[0.8px]">
                                <th className="p-3.5">Date</th>
                                <th className="p-3.5">Brand</th>
                                <th className="p-3.5">Product</th>
                                <th className="p-3.5">Type</th>
                                <th className="p-3.5">Qty</th>
                                <th className="p-3.5">Reference</th>
                            </tr>
                        </thead>
                        <tbody className="text-[14px]">
                            {stockData.map((row, index) => (
                                <tr key={index} className="border-b border-[#e2e8f0] transition-all duration-250 hover:bg-[#f8fafc] hover:scale-[1.01] hover:shadow-[0_6px_18px_rgba(0,0,0,0.06)] group">
                                    <td className="p-3.5">{row.date}</td>
                                    <td className="p-3.5 font-medium">{row.brand}</td>
                                    <td className="p-3.5">{row.product}</td>
                                    <td className={`p-3.5 font-bold ${row.type === 'IN' ? 'text-green-600' : 'text-red-600'}`}>
                                        {row.type}
                                    </td>
                                    <td className="p-3.5 font-bold">{row.qty}</td>
                                    <td className="p-3.5 text-[#64748b]">{row.ref}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Verified Box */}
                <div className="mt-9 bg-[#f1f5f9] p-[22px] border-l-4 border-[#2563eb] animate-slide-left">
                    <h3 className="m-0 text-[16px] font-bold text-[#1e293b]">Verified By P&P Tech Hub</h3>
                    <p className="mt-1.5 text-[13px] text-[#64748b]">
                        This document is system-generated and officially authenticated. No manual signature required.
                    </p>
                </div>

                {/* Stamp Section */}
                <div className="mt-10 flex justify-end">
                    <div className="border-2 border-[#1e293b] p-3.5 px-[22px] text-center animate-stamp">
                        <div className="text-[12px] font-bold tracking-widest text-[#1e293b] uppercase">
                            OFFICIALLY VERIFIED<br />P&P TECH HUB
                        </div>
                        <span className="block text-[10px] mt-1.5 text-[#64748b]">Authorized Inventory Report</span>
                    </div>
                </div>

                {/* Print Button */}
                <button
                    onClick={() => window.print()}
                    className="no-print mt-10 px-[26px] py-3 bg-[#1e293b] text-white font-semibold rounded-md transition-all duration-250 hover:bg-[#020617] hover:-translate-y-0.5"
                >
                    Download PDF
                </button>

            </div>
        </div>
    );
};

export default StockReport;