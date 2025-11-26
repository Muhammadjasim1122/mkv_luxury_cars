import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import CurrencySelector from "./CurrencySelector";

const navItems = [
  { name: 'Our Fleet', path: '/our-fleet' },
  { name: 'Brands', path: '/brands' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' }
];

import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" z-50 relative bg-[#f1f1f1] pb-1 pt-2 sm:pt-3 pl-4 sm:pl-12 md:pl-20 shadow-sm">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 relative">

        {/* Floating Logo - Left Side */}
        <div className="absolute -left-1 sm:-left-2 top-[90%] -translate-y-1/2 z-10">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden ml-auto mr-2 p-2 text-slate-900"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Center - Desktop */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-10 text-base lg:text-lg font-bold text-slate-900">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-colors hover:text-[#c77802] ${
                location.pathname === item.path ? "text-[#c77802]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-[#f1f1f1] border-t border-slate-200 shadow-lg md:hidden">
            <div className="flex flex-col px-4 py-4 space-y-3">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-semibold py-2 transition-colors hover:text-[#c77802] ${
                    location.pathname === item.path ? "text-[#c77802]" : "text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-200">
                <CurrencySelector />
              </div>
            </div>
          </nav>
        )}

        {/* Currency Selector - Desktop */}
        <div className="hidden md:block">
          <CurrencySelector />
        </div>
      </div>

    </header>
  );
}
