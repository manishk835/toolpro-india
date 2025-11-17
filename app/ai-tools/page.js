import Link from "next/link";
import {
  Image as ImageIcon,
  FileText,
  ArrowUpRight,
  Camera,
  PenTool,
  Music,
  Video,
  RefreshCcw,
  UploadCloud,
  Cpu,
  Palette,
  Type
} from "lucide-react";

/**
 * Replace URLs below with your preferred external tools or internal pages.
 * Each item: { name, desc, url, icon }
 */
const tools = [
  {
    name: "Free Image AI",
    desc: "Generate high-quality images from text prompts.",
    url: "https://lexica.art",
    icon: ImageIcon,
  },
  {
    name: "AI Resume Builder",
    desc: "Create a professional resume with smart suggestions.",
    url: "/tools/resume",
    icon: FileText,
  },
  {
    name: "Background Remover",
    desc: "Remove image backgrounds instantly (no design skills).",
    url: "https://www.remove.bg",
    icon: Camera,
  },
  {
    name: "AI Logo Maker",
    desc: "Generate logo concepts and customize colors & fonts.",
    url: "https://www.canva.com",
    icon: Palette,
  },
  {
    name: "AI Writing Assistant",
    desc: "Rewrite, summarize or expand text quickly.",
    url: "https://chat.openai.com",
    icon: PenTool,
  },
  {
    name: "AI Music Generator",
    desc: "Produce short music loops & background tracks.",
    url: "https://www.aiva.ai",
    icon: Music,
  },
  {
    name: "AI Video Tools",
    desc: "Create short AI videos and clips from text or images.",
    url: "https://www.runwayml.com",
    icon: Video,
  },
  {
    name: "Image Upscaler",
    desc: "Enhance photo resolution while keeping details.",
    url: "https://letsenhance.io",
    icon: RefreshCcw,
  },
  {
    name: "Speech → Text",
    desc: "Fast, accurate speech transcription services.",
    url: "https://www.rev.com",
    icon: UploadCloud,
  },
  {
    name: "Code / AI Playground",
    desc: "Experiment with models, test prompts and code quickly.",
    url: "https://platform.openai.com",
    icon: Cpu,
  },
  {
    name: "AI Photo Enhancer",
    desc: "Automatically fix color, contrast and remove noise.",
    url: "https://photolemur.com",
    icon: Camera,
  },
  {
    name: "AI Content Templates",
    desc: "Templates for emails, posts, ads and more (editable).",
    url: "/ai-templates",
    icon: Type,
  },
];

export default function AITools() {
  return (
    <div className="relative py-16 px-4 max-w-7xl mx-auto">

      {/* BACKGROUND BLUR (decorative) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* TITLE + DESCRIPTION */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-4">
          Curated AI Tools
        </h1>
        <p className="text-slate-700 text-lg leading-relaxed">
          Handpicked AI tools for images, writing, audio and video. Open the ones you need — external tools open in a new tab, internal pages stay inside the site.
        </p>
      </header>

      {/* GRID OF TOOL CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((t, idx) => {
          const Icon = t.icon;
          const external = t.url.startsWith("http");
          return (
            <Link
              key={idx}
              href={t.url}
              target={external ? "_blank" : "_self"}
              rel={external ? "noopener noreferrer" : undefined}
              className="block"
            >
              <article
                className="group relative h-56 p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-lg
                           hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                aria-labelledby={`tool-${idx}`}
              >
                {/* subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-cyan-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-pointer-events-none"></div>

                {/* icon */}
                <Icon size={40} className="text-blue-600 group-hover:text-cyan-500 transition" />

                {/* title + description */}
                <div className="mt-4">
                  <h3 id={`tool-${idx}`} className="text-xl font-semibold text-blue-700 group-hover:text-cyan-600 transition">
                    {t.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{t.desc}</p>
                </div>

                {/* arrow */}
                <ArrowUpRight className="absolute top-6 right-6 text-slate-400 group-hover:text-blue-500 transition" size={20} />
              </article>
            </Link>
          );
        })}
      </section>

      {/* CTA / note */}
      <footer className="mt-12 max-w-3xl mx-auto text-center text-sm text-slate-600">
        <p>
          NOTE: External tools open in a new tab. If you'd like any tool replaced, or want more internal tools built (resume maker, image editor etc.), tell me and I'll add them.
        </p>
      </footer>
    </div>
  );
}
