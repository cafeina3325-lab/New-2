"use client";

import Link from "next/link";
import { useState } from "react";
import ContactOverlay from "./ContactOverlay"; // Ensure correct import path

export default function Footer() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const menuItems = [
        { name: "About", path: "/about" },
        { name: "Genres", path: "/genres" },
        { name: "Gallery", path: "/gallery" },
        { name: "Process", path: "/process" },
        { name: "FAQ", path: "/faq" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* 1. Left Column: Brand & Social & Contact */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Flying Studio</h2>
                        <div className="flex space-x-4">
                            {/* Kakao Button */}
                            <button className="w-10 h-10 rounded-lg bg-yellow-400 text-black flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-xs">TALK</span>
                            </button>
                            {/* Facebook Button */}
                            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-lg">f</span>
                            </button>
                            {/* Instagram Button */}
                            <button className="w-10 h-10 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white flex items-center justify-center hover:opacity-80 transition">
                                <span className="font-bold text-lg">IG</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="px-6 py-2 border border-gray-600 text-gray-300 rounded hover:border-white hover:text-white transition"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* 2. Center-Left Column: Nav Menu */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Menu</h3>
                        <ul className="space-y-3">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.path} className="hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Right Column: Business Info (Spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 space-y-4 text-sm leading-relaxed">
                        <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            <div>
                                <p><span className="font-bold text-gray-500 w-24 inline-block">OWNER</span> Hong Gil Dong</p>
                                <p><span className="font-bold text-gray-500 w-24 inline-block">LICENSE</span> 123-45-67890</p>
                                <p><span className="font-bold text-gray-500 w-24 inline-block">MANAGER</span> Kim Cheol Su</p>
                            </div>
                            <div>
                                <p><span className="font-bold text-gray-500 w-24 inline-block">ADDRESS</span> Incheon, Namdong-gu, Guwol-dong 1234-5, 2F</p>
                                <p><span className="font-bold text-gray-500 w-24 inline-block">HOURS</span> 11:00 - 20:00 (Mon - Sat)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; 2026 Flying Studio. All rights reserved.</p>
                </div>
            </div>

            {/* Contact Overlay */}
            {isContactOpen && <ContactOverlay onClose={() => setIsContactOpen(false)} />}
        </footer>
    );
}
