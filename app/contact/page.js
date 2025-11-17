import { Mail, Instagram, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">

      {/* HEADING */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
        Contact Us
      </h1>

      <p className="text-slate-700 text-lg leading-relaxed mb-10">
        Have questions, suggestions, or want to collaborate?  
        We're always happy to hear from you!
      </p>

      {/* CONTACT CARD */}
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all">
        
        <h2 className="text-2xl font-bold text-blue-700 mb-3">Get in Touch</h2>
        
        <p className="text-slate-700 mb-6">
          You can directly reach us through email. We usually reply within 24 hours.
        </p>

        {/* EMAIL BOX */}
        <a
          href="mailto:manishkumar.dev08@gmail.com"
          className="flex items-center gap-3 bg-blue-600 hover:bg-cyan-500 transition text-white px-6 py-3 rounded-xl font-medium shadow-md w-fit"
        >
          <Mail size={22} /> manishkumar.dev08@gmail.com
        </a>

        {/* divider */}
        <div className="border-t my-6"></div>

        <h3 className="text-xl font-semibold text-blue-700 mb-2">Social Links</h3>
        <p className="text-slate-700 mb-4">Connect with us for updates and new tools:</p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          <a href="" className="text-slate-600 hover:text-blue-600 transition">
            <Instagram size={26} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition">
            <Phone size={26} />
          </a>
        </div>
      </div>

      {/* BOTTOM MESSAGE */}
      <p className="mt-10 text-slate-600 text-center">
        We appreciate your feedback — it helps ToolPro India improve and grow! 🚀
      </p>

    </div>
  );
}
