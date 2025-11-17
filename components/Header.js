"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          {/* <Image
            src="/logo.png"
            alt="ToolPro India Logo"
            width={45}
            height={45}
            className="rounded-md"
          /> */}
          <span className="ml-2 text-xl font-bold text-blue-600">
            ToolPro <span className="text-cyan-500">India</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden sm:flex items-center space-x-6 text-slate-700 font-medium">
          <Link
            href="/"
            className={`hover:text-blue-600 pb-1 ${
              pathname === "/" ? "text-blue-600 border-b-2 border-blue-600" : ""
            }`}
          >
            Tools
          </Link>

          <Link
            href="/ai-tools"
            className={`hover:text-blue-600 pb-1 ${
              pathname === "/ai-tools"
                ? "text-blue-600 border-b-2 border-blue-600"
                : ""
            }`}
          >
            AI Tools
          </Link>

          <Link
            href="/about"
            className={`hover:text-blue-600 pb-1 ${
              pathname === "/about"
                ? "text-blue-600 border-b-2 border-blue-600"
                : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`hover:text-blue-600 pb-1 ${
              pathname === "/contact"
                ? "text-blue-600 border-b-2 border-blue-600"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button className="sm:hidden text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="sm:hidden bg-white border-t px-4 py-3 space-y-3 text-slate-700 font-medium">
          <Link
            href="/"
            className={`block ${pathname === "/" ? "text-blue-600 font-semibold" : ""}`}
          >
            Tools
          </Link>

          <Link
            href="/ai-tools"
            className={`block ${pathname === "/ai-tools" ? "text-blue-600 font-semibold" : ""}`}
          >
            AI Tools
          </Link>

          <Link
            href="/about"
            className={`block ${pathname === "/about" ? "text-blue-600 font-semibold" : ""}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`block ${pathname === "/contact" ? "text-blue-600 font-semibold" : ""}`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
