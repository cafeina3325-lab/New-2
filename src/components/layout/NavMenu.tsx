import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ContactOverlay from "./ContactOverlay";

export default function NavMenu({ isHamburgerMode }: { isHamburgerMode?: boolean }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const menuItems = [
        { name: "About", path: "/about" },
        {
            name: "Genres",
            path: "/genres",
            subItems: [
                { name: "Irezumi", path: "/genres?genre=Irezumi" },
                { name: "Old School", path: "/genres?genre=Old School" },
                { name: "Tribal", path: "/genres?genre=Tribal" },
                { name: "Black & Grey", path: "/genres?genre=Black %26 Grey" },
                { name: "Blackwork", path: "/genres?genre=Blackwork" },
                { name: "Oriental Art", path: "/genres?genre=Oriental Art" },
                { name: "Watercolor", path: "/genres?genre=Watercolor" },
                { name: "Illustration", path: "/genres?genre=Illustration" },
                { name: "Mandala", path: "/genres?genre=Mandala" },
                { name: "Sak Yant", path: "/genres?genre=Sak Yant" },
                { name: "Lettering", path: "/genres?genre=Lettering" },
                { name: "ETC.", path: "/genres?genre=Specialties" },
            ]
        },
        {
            name: "Gallery",
            path: "/gallery",
            subItems: [
                { name: "Portfolio", path: "/gallery?tab=Portfolio" },
                { name: "Event", path: "/gallery?tab=Event" },
            ]
        },
        { name: "Process", path: "/process" },
        { name: "FAQ", path: "/faq" },
    ];

    // Close menu when route changes or contact opens
    const handleContactClick = () => {
        setIsMenuOpen(false);
        setIsContactOpen(true);
    };

    // Outside click detection
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                // If menu is open and in hamburger mode, close it
                if (isMenuOpen && isHamburgerMode) {
                    setIsMenuOpen(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, isHamburgerMode]);

    // Determine if we should show the full nav bar
    // Show if NOT in hamburger mode OR if in hamburger mode AND menu is open
    const showNavBar = !isHamburgerMode || (isHamburgerMode && isMenuOpen);

    return (
        <>
            <nav
                ref={navRef}
                className={`
                    flex-1 transition-all duration-500 ease-in-out pointer-events-auto flex items-center justify-end px-8
                    ${showNavBar ? 'h-[100px] bg-gray-200 opacity-100' : 'h-0 opacity-0 overflow-hidden'}
                `}
            >
                {/* Navigation Items - Only render/visible when showing nav bar */}
                <div className={`flex items-center ${showNavBar ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <ul className="flex space-x-8 mr-12">
                        {menuItems.map((item) => (
                            <li key={item.name} className="relative group h-full flex items-center">
                                <Link
                                    href={item.path}
                                    className="text-xl font-medium text-gray-800 hover:text-gray-600 transition-colors py-4"
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                                        <div className="bg-white rounded-lg shadow-xl overflow-hidden min-w-[180px] border border-gray-100">
                                            <ul className="py-2">
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link
                                                            href={subItem.path}
                                                            className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors whitespace-nowrap"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleContactClick}
                        className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition mr-4"
                    >
                        Contact
                    </button>
                </div>
            </nav>

            {/* Hamburger Button - Visible only when in Hamburger Mode AND Menu is Closed */}
            {isHamburgerMode && !isMenuOpen && (
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent immediate closing due to outside click logic bubbling
                        setIsMenuOpen(true);
                    }}
                    className="fixed top-8 right-8 z-50 pointer-events-auto p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all animate-fade-in"
                    aria-label="Open Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            )}

            {/* Contact Overlay */}
            {isContactOpen && <ContactOverlay onClose={() => setIsContactOpen(false)} />}
        </>
    );
}
