import { Mail, Instagram, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      {/* HEADING */}
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-4 sm:mb-6">
        Contact Us
      </h1>

      <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
        Have questions, suggestions, or want to collaborate? We're always happy
        to hear from you!
      </p>

      {/* CONTACT CARD */}
      <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 sm:mb-3">
          Get in Touch
        </h2>

        <p className="text-slate-700 text-sm sm:text-base mb-5 sm:mb-6">
          You can directly reach us through email. We usually reply within 24
          hours.
        </p>

        {/* EMAIL BOX */}
        {/* EMAIL BOX */}
        <a
          href="mailto:manishkumar.dev08@gmail.com"
          className="flex items-center gap-3 bg-blue-600 hover:bg-cyan-500 transition text-white px-5 sm:px-6 py-3 rounded-xl font-medium shadow-md w-full sm:w-fit text-sm sm:text-base"
        >
          <Mail size={20} className="shrink-0" />
          <span className="break-all">manishkumar.dev08@gmail.com</span>
        </a>

        {/* divider */}
        <div className="border-t my-5 sm:my-6"></div>

        <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-1 sm:mb-2">
          Social Links
        </h3>

        <p className="text-slate-700 text-sm sm:text-base mb-3 sm:mb-4">
          Connect with us for updates and new tools:
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a href="#" className="text-slate-600 hover:text-blue-600 transition">
            <Instagram size={24} className="sm:w-[26px] sm:h-[26px]" />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition">
            <Phone size={24} className="sm:w-[26px] sm:h-[26px]" />
          </a>
        </div>
      </div>

      {/* BOTTOM MESSAGE */}
      <p className="mt-8 sm:mt-10 text-slate-600 text-center text-sm sm:text-base">
        We appreciate your feedback — it helps ToolPro India improve and grow!
        🚀
      </p>
    </div>
  );
}

// import { Mail, Instagram, Phone, ArrowUpRight } from "lucide-react";

// export default function Contact() {
//   return (
//     <div className="py-12 px-4 max-w-4xl mx-auto">

//       {/* HEADING */}
//       <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
//         Contact Us
//       </h1>

//       <p className="text-slate-700 text-lg leading-relaxed mb-10">
//         Have questions, suggestions, or want to collaborate?
//         We're always happy to hear from you!
//       </p>

//       {/* CONTACT CARD */}
//       <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all">

//         <h2 className="text-2xl font-bold text-blue-700 mb-3">Get in Touch</h2>

//         <p className="text-slate-700 mb-6">
//           You can directly reach us through email. We usually reply within 24 hours.
//         </p>

//         {/* EMAIL BOX */}
//         <a
//           href="mailto:manishkumar.dev08@gmail.com"
//           className="flex items-center gap-3 bg-blue-600 hover:bg-cyan-500 transition text-white px-6 py-3 rounded-xl font-medium shadow-md w-fit"
//         >
//           <Mail size={22} /> manishkumar.dev08@gmail.com
//         </a>

//         {/* divider */}
//         <div className="border-t my-6"></div>

//         <h3 className="text-xl font-semibold text-blue-700 mb-2">Social Links</h3>
//         <p className="text-slate-700 mb-4">Connect with us for updates and new tools:</p>

//         {/* SOCIAL ICONS */}
//         <div className="flex items-center gap-5">
//           <a href="" className="text-slate-600 hover:text-blue-600 transition">
//             <Instagram size={26} />
//           </a>
//           <a href="#" className="text-slate-600 hover:text-blue-600 transition">
//             <Phone size={26} />
//           </a>
//         </div>
//       </div>

//       {/* BOTTOM MESSAGE */}
//       <p className="mt-10 text-slate-600 text-center">
//         We appreciate your feedback — it helps ToolPro India improve and grow! 🚀
//       </p>

//     </div>
//   );
// }
