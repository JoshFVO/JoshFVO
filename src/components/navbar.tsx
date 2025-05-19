import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-zinc-950">
            <div className="py-[12px] text-white h-[64px] flex flex-col justify-center">
                <div className="px-[32px] lg:px-[64px] flex flex-row justify-between items-center">
                    <div>
                        <h1 className="text-[24px] font-[600]">
                            <a href="/home">Joshua Mahabir</a>
                        </h1>
                    </div>
                    {/* Desktop menu */}
                    <ul className="hidden md:flex flex-row justify-between text-[16px] font-[400]">
                        <li className="hover:bg-gray-700 transition-all duration-300 ease-out px-[12px] py-[6px] rounded-full">
                            <a href="/home">About</a>
                        </li>
                        <li className="hover:bg-gray-700 transition-all duration-300 ease-out px-[12px] py-[6px] rounded-full">
                            <a href="/photography">Photography</a>
                        </li>
                        <li className="hover:bg-gray-700 transition-all duration-300 ease-out px-[12px] py-[6px] rounded-full">
                            <a href="/recipes">Recipes</a>
                        </li>
                        <li className="hover:bg-gray-700 transition-all duration-300 ease-out px-[12px] py-[6px] rounded-full">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    {/* Mobile menu icon */}
                    <button
                        className="md:hidden p-2 rounded focus:outline-none"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        {/* Hamburger icon */}
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile overlay menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-white p-2"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        {/* Close icon */}
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col gap-8 text-[24px] font-[600] text-white">
                        <li>
                            <a href="/home" onClick={() => setMenuOpen(false)}>About</a>
                        </li>
                        <li>
                            <a href="/photography" onClick={() => setMenuOpen(false)}>Photography</a>
                        </li>
                        <li>
                            <a href="/home" onClick={() => setMenuOpen(false)}>Blog</a>
                        </li>
                        <li>
                            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

