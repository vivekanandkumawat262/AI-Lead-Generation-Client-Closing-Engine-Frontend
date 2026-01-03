import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

/* Layout */
import Layout from "./layout";

/* Public Pages */
import HomePage from "./pages/public/Home";
import Product from "./components/Product/Product";
import Solutions from "./components/Pricing/Pricing";
import Technology from "./components/Technology/Technology";
import ContactUs from "./components/ContactUs/ContactUs";

/* Auth Pages */
import Login from "./auth/Login";
import Signup from "./pages/Signup";
import LogoutButton from "./auth/Logout";

/* Dashboards */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AgentDashboard from "./pages/agent/AgentDashboard";
import Leads from "./pages/Leads";

/* Route Guards */
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateRoute from "./auth/PrivateRoute";
import Pricing from "./components/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Header + Footer here
    children: [

      /* ---------- PUBLIC ROUTES ---------- */
      { path: "/", element: <HomePage /> },
      { path: "/product", element: <Product /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/technology", element: <Technology /> },
      { path: "/contact-us", element: <ContactUs /> },

      /* ---------- AUTH ROUTES ---------- */
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/logout", element: <LogoutButton /> },

      /* ---------- PRIVATE ROUTES ---------- */
      {
        path: "/leads",
        element: (
          <PrivateRoute>
            <Leads />
          </PrivateRoute>
        ),
      },

      /* ---------- ADMIN ROUTES ---------- */
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      /* ---------- AGENT ROUTES ---------- */
      {
        path: "/agent/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["AGENT"]}>
            <AgentDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
