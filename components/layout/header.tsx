"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-md">
      {/* Top menu bar */}
      <div className="bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-end space-x-6">
          <Link href="/alumni" className="text-sm hover:text-blue-200 transition-colors">Alumni</Link>
          <Link href="/careers" className="text-sm hover:text-blue-200 transition-colors">Careers</Link>
          <Link href="/admin" className="text-sm hover:text-blue-200 transition-colors">Admin</Link>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
              <span className="bg-[#003366] text-white p-1 rounded">MA</span>
              <span className="text-[#003366]">AUN</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-medium hover:text-blue-600 transition-colors ${
                    isActive(link.path) ? "text-blue-600 border-b-2 border-blue-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="text-gray-600 hover:text-blue-600">
                <Search size={20} />
              </button>
              <Link
                href="/admin/login"
                className="bg-[#003366] text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Admin Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-[#003366]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 pt-2 border-t border-gray-200">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`block font-medium hover:text-blue-600 transition-colors ${
                        isActive(link.path) ? "text-blue-600" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/admin/login"
                    className="block bg-[#003366] text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
} 