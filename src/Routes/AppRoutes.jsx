import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";


// AUTH

// ADMIN PAGES
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddCategory from "../Pages/Categories/AddCategory";
import Categories from "../Pages/Categories/CategoryList";
import BrandList from "../Pages/Brands/BrandList";
import Products from "../Pages/Products/ProductList";
import AddProduct from "../Pages/Products/AddProduct";
import Purchaseenter from "../Pages/Stock/Purchase enter";
import Salesoutenter from "../Pages/Stock/Salesout enter";
import StockHistory from "../Pages/Stock/StockHistory";
import StockIn from "../Pages/Stock/StockIn";
import Stockout from "../Pages/Stock/StockOut";
import SalesReport from "../Pages/Reports/SalesReport";
import AdminLayout from "../Layouts/AdminLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>


                {/* LOGIN PAGE */}

                PROTECTED ADMIN ROUTES

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Dashboard />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/CategoryList"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Categories />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/AddCategory"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <AddCategory />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />


                <Route
                    path="/AddProduct"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <AddProduct />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/BrandList"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <BrandList />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/Products"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Products />
                            </AdminLayout>
                        </ProtectedRoute>

                    }
                />

                <Route
                    path="/StockHistory"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <StockHistory />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/StockIn"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <StockIn />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/Purchaseenter"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Purchaseenter />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />


                <Route
                    path="/Stockout"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Stockout />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/Salesout enter"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <Salesoutenter />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />


                <Route
                    path="/Reports"
                    element={
                        <ProtectedRoute>
                            <AdminLayout>
                                <SalesReport />
                            </AdminLayout>
                        </ProtectedRoute>
                    }
                />

                {/* FALLBACK */}

            </Routes>
        </BrowserRouter>
    );
}
