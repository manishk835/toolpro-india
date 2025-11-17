import Link from "next/link";
import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              ToolPro <span className="text-cyan-400">India</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Simple & powerful online tools for India.  
              Fast, free and easy-to-use calculators + AI tools.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="hover:text-cyan-400">
                <Instagram size={22} />
              </Link>
              <Link href="#" className="hover:text-cyan-400">
                <Youtube size={22} />
              </Link>
              <Link href="mailto:manishkumar.dev08@gmail.com" className="hover:text-cyan-400">
                <Mail size={22} />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <p className="text-white font-semibold">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-tools" className="hover:text-cyan-400">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-cyan-400">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="space-y-3">
            <p className="text-white font-semibold">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} ToolPro India. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
