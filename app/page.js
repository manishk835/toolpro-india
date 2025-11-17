import Link from "next/link";
import { Calculator, Brain, Gauge, CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <div className="relative py-16">

      {/* BEAUTIFUL BLUR BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"></div>
      </div>

      {/* HERO SECTION */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r 
          from-blue-600 via-cyan-500 to-blue-600 
          text-transparent bg-clip-text drop-shadow-xl">
          ToolPro India
        </h1>

        <p className="mt-5 text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
          A premium collection of modern calculators & AI tools — 
          designed with performance, accuracy, and stunning UI in mind.
        </p>
      </section>

      {/* TOOL GRID */}
      <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">

        {[
          { href: "/tools/emi", title: "EMI Calculator", icon: Calculator, desc: "Instant EMI breakdown for loans." },
          { href: "/tools/bmi", title: "BMI Calculator", icon: Gauge, desc: "Check BMI & health category." },
          { href: "/tools/age", title: "Age Calculator", icon: CalendarDays, desc: "Find exact age instantly." },
          { href: "/ai-tools", title: "AI Tools Directory", icon: Brain, desc: "Best AI tools curated for India." },
        ].map(({ href, title, icon: Icon, desc }, i) => (
          <Link key={i} href={href}>
            <div className="pro-card group relative p-10 bg-white/70 backdrop-blur-xl 
              border border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2 cursor-pointer">

              {/* GLOW ON HOVER */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                from-transparent via-cyan-200/20 to-transparent opacity-0 
                group-hover:opacity-100 transition"></div>

              {/* ICON */}
              <Icon size={42} className="text-blue-600 group-hover:text-cyan-500 transition duration-300" />

              {/* TITLE */}
              <h3 className="text-2xl font-bold mt-5 text-blue-700 
                group-hover:text-cyan-600 transition duration-300">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 mt-2">{desc}</p>
            </div>
          </Link>
        ))}

      </section>

      {/* INFO SECTION */}
      <section className="text-center px-4 mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-700">
          Why Choose ToolPro India?
        </h2>
        <p className="mt-4 text-slate-700 text-lg leading-relaxed">
          Fast loading, beautiful UI, accurate tools, and real-world utility.  
          Perfect for ranking on Google and getting repeat visitors every day.
        </p>
      </section>
    </div>
  );
}
