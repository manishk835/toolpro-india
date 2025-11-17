import Link from "next/link";
import { Image as ImageIcon, FileText, ArrowUpRight } from "lucide-react";

const tools = [
  {
    name: "Free Image AI",
    desc: "Fast AI image generator (external tool).",
    url: "https://example.com",
    icon: ImageIcon
  },
  {
    name: "Resume Builder",
    desc: "Smart & clean resume maker.",
    url: "/tools/resume",
    icon: FileText
  }
];

export default function AITools() {
  return (
    <div className="relative py-16 p-4">

      {/* NEON BLUR BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>
{/* 
      <section className="text-left mb-20 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
          Curated AI Tools
        </h1>

        <p className="mt-5 text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
          Handpicked AI tools with clean descriptions and trusted links — 
          carefully chosen to help you work smarter, faster, and better.
        </p>
      </section> */}
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-4">
        Curated AI Tools
      </h2>

      <p className="text-slate-700 text-lg max-w-2xl leading-relaxed mb-10">
        Handpicked AI tools with clean descriptions and trusted links — 
        carefully chosen to help you work smarter, faster, and better.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((t, index) => {
          const Icon = t.icon;
          return (
            <Link 
              href={t.url} 
              key={index} 
              target={t.url.startsWith("http") ? "_blank" : "_self"}
            >
              <div className="group p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-xl 
                hover:-translate-y-2 hover:shadow-2xl transition-all relative cursor-pointer">

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                  from-transparent via-cyan-200/20 to-transparent opacity-0 
                  group-hover:opacity-100 transition"></div>

                {/* Icon */}
                <Icon size={40} className="text-blue-600 group-hover:text-cyan-500 transition" />

                {/* Title */}
                <h3 className="text-xl font-bold mt-4 text-blue-700 group-hover:text-cyan-600 transition">
                  {t.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-slate-600 text-sm">{t.desc}</p>

                {/* Arrow */}
                <ArrowUpRight className="absolute top-6 right-6 opacity-40 group-hover:opacity-80 
                  text-blue-500 group-hover:text-cyan-500 transition" size={22} />
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
