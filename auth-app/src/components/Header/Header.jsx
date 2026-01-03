import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import logo from '../../assets/logo1.png';


const Header = () => {
  return ( 
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
            <nav className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-auto"
                    />
                    {/* <span className="font-semibold text-slate-900 text-lg">
                    LeadAI
                    </span> */}
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {["Home", "Product", "Pricing", "Technology", "Contact Us"].map(
                    (item) => (
                        <li key={item}>
                        <NavLink
                            to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`}
                            className={({ isActive }) =>
                            `transition ${
                                isActive
                                ? "text-orange-500"
                                : "text-slate-700 hover:text-slate-900"
                            }`
                            }
                        >
                            {item}
                        </NavLink>
                        </li>
                    )
                    )}
                </ul>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                    to="/login"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
                    >
                    Log in
                    </Link>
                    <Link
                    to="/signup"
                    className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition shadow-sm"
                    >
                    Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
                    <svg
                    className="h-6 w-6 text-slate-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </nav>
        </header>

  )
}

export default Header