import Link from "next/link";
import {
  Calculator,
  Gauge,
  CalendarDays,
  Percent,
  IndianRupee,
  Wallet,
  Milestone,
  Timer,
  Ruler,
  Filter,
  FileText,
  PiggyBank,
  Scale,
  BadgePercent,
  Landmark,
  Brain
} from "lucide-react";

export default function Home() {
  const tools = [
    { href: "/tools/emi", title: "EMI Calculator", icon: Calculator, desc: "Instant EMI breakdown for loans." },
    { href: "/tools/bmi", title: "BMI Calculator", icon: Gauge, desc: "Check BMI & health category." },
    { href: "/tools/age", title: "Age Calculator", icon: CalendarDays, desc: "Find exact age instantly." },

    { href: "/tools/sip", title: "SIP Calculator", icon: PiggyBank, desc: "Calculate SIP returns accurately." },
    { href: "/tools/fd", title: "FD Calculator", icon: Milestone, desc: "Fixed deposit maturity calculator." },
    { href: "/tools/rd", title: "RD Calculator", icon: Wallet, desc: "Recurring deposit return calculator." },

    { href: "/tools/gst", title: "GST Calculator", icon: Percent, desc: "Add or remove GST easily." },
    { href: "/tools/discount", title: "Discount Calculator", icon: BadgePercent, desc: "Find discounted price fast." },
    { href: "/tools/percentage", title: "Percentage Calculator", icon: Landmark, desc: "Solve percentage problems instantly." },

    { href: "/tools/unit", title: "Unit Converter", icon: Ruler, desc: "cm ↔ inches, kg ↔ lbs, more." },
    { href: "/tools/currency", title: "Currency Converter", icon: IndianRupee, desc: "Live INR conversion tool." },
    { href: "/tools/time", title: "Time Converter", icon: Timer, desc: "Hours ↔ minutes ↔ seconds." },

    { href: "/tools/calorie", title: "Calories Calculator", icon: Scale, desc: "Daily calorie requirement." },
    { href: "/tools/tax", title: "Tax Calculator", icon: Filter, desc: "Indian income tax estimate." },

    { href: "/ai-tools", title: "AI Tools Directory", icon: Brain, desc: "Best AI tools curated for India." },
  ];

  return (
    <div className="relative py-16">

      {/* BLUR BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"></div>
      </div>

      {/* HERO */}
      <section className="text-center mb-20 px-4">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r 
          from-blue-600 via-cyan-500 to-blue-600 
          text-transparent bg-clip-text drop-shadow-xl">
          ToolPro India
        </h1>

        <p className="mt-5 text-slate-700 text-xl max-w-3xl mx-auto leading-relaxed">
          A premium collection of 15 modern calculators & AI tools — 
          designed with speed, accuracy, and beautiful design.
        </p>
      </section>

      {/* GRID WITH FIXED HEIGHT CARDS */}
      <section className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {tools.map(({ href, title, icon: Icon, desc }, i) => (
          <Link key={i} href={href}>
            <div className="pro-card group relative p-8 bg-white/70 backdrop-blur-xl 
              border border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl 
              transition-all duration-300 hover:-translate-y-2 cursor-pointer
              h-[220px] flex flex-col justify-start">

              {/* GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                from-transparent via-cyan-200/20 to-transparent opacity-0 
                group-hover:opacity-100 transition"></div>

              <Icon size={42} className="text-blue-600 group-hover:text-cyan-500 transition duration-300" />

              <h3 className="text-2xl font-bold mt-4 text-blue-700 group-hover:text-cyan-600 transition">
                {title}
              </h3>

              <p className="text-slate-600 text-sm mt-2">{desc}</p>
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
          Fast loading, beautiful UI, accurate tools, and real-world usability — 
          perfect for Google ranking and daily users.
        </p>
      </section>
    </div>
  );
}
