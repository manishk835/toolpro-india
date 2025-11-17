export default function About() {
  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">

      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
        About ToolPro India
      </h1>

      <p className="text-lg text-slate-700 leading-relaxed mb-6">
        ToolPro India is a modern platform that provides smart calculators, essential daily-use tools, 
        and a curated directory of AI tools — all designed specially for Indian users.
        Our goal is to make everyday tasks simple, fast, and accurate with a beautiful interface and 
        ultra-smooth performance.
      </p>

      <h2 className="text-3xl font-bold text-blue-700 mb-3">Our Mission</h2>
      <p className="text-slate-700 leading-relaxed mb-6">
        Our mission is to create reliable tools that help students, professionals, workers, and 
        entrepreneurs perform important tasks without confusion. We focus on:
      </p>
      <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
        <li>Fast and accurate calculators</li>
        <li>Simple and clean user experience</li>
        <li>Free tools accessible to everyone</li>
        <li>AI-based tools that save time and boost productivity</li>
      </ul>

      <h2 className="text-3xl font-bold text-blue-700 mb-3">What You’ll Find Here</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
        <li>EMI, BMI, Age and essential everyday calculators</li>
        <li>AI tools to generate images, text, resumes and more</li>
        <li>Useful utilities like converters, checkers, formatters</li>
        <li>Tools focused on Indian audience and needs</li>
      </ul>

      <h2 className="text-3xl font-bold text-blue-700 mb-3">Why People Choose ToolPro India?</h2>
      <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
        <li>Simple to use — no complex UI</li>
        <li>Fast loading and mobile-friendly</li>
        <li>Modern, clean, and beautiful design</li>
        <li>Accurate results for everyday use</li>
        <li>Zero confusion, zero unnecessary features</li>
      </ul>

      <h2 className="text-3xl font-bold text-blue-700 mb-3">Privacy & Trust</h2>
      <p className="text-slate-700 leading-relaxed mb-6">
        We respect your privacy. ToolPro India does not collect personal details or store any sensitive data. 
        All tools work smoothly without needing your information. 
        External tools used in the AI directory are carefully checked for safety.
      </p>

      <h2 className="text-3xl font-bold text-blue-700 mb-3">About the Creator</h2>
      <p className="text-slate-700 leading-relaxed mb-2">
        This platform is created by <strong>Manish Kumar</strong> — a passionate Frontend Developer from India.
      </p>
      <p className="text-slate-700 leading-relaxed mb-6">
        With strong skills in React.js, Next.js, Tailwind CSS and JavaScript,  
        Manish focuses on building useful, clean and fast websites for real-world needs.
      </p>

      <div className="p-5 bg-white shadow-sm border border-slate-200 rounded-xl">
        <p className="text-slate-700">
          📩 For collaboration or feedback:  
          <strong> manishkumar.dev08@gmail.com</strong>
        </p>
      </div>

    </div>
  );
}
