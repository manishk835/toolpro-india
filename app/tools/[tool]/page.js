"use client";

import React from "react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

/**
 * Premium, clean, consistent calculators.
 * Home (app/page.js) shows cards linking to /tools/:id
 *
 * This file supports 15 tools:
 * emi, bmi, age, loan, sip, fd, rd, gst, percentage, unit, currency, time, discount, calorie, tax
 */

export default function ToolPage({ params }) {
  const { tool } = params;

  switch (tool) {
    case "emi":
      return <EMI />;
    case "bmi":
      return <BMI />;
    case "age":
      return <AgeCalc />;
    case "loan":
      return <LoanCalc />;
    case "sip":
      return <SIP />;
    case "fd":
      return <FD />;
    case "rd":
      return <RD />;
    case "gst":
      return <GST />;
    case "percentage":
      return <PercentageTool />;
    case "unit":
      return <UnitConverter />;
    case "currency":
      return <CurrencyConverter />;
    case "time":
      return <TimeConverter />;
    case "discount":
      return <DiscountCalculator />;
    case "calorie":
      return <CaloriesCalculator />;
    case "tax":
      return <TaxCalculator />;
    default:
      return (
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-blue-700">Tool not found</h1>
          <p className="mt-3 text-slate-600">
            Try going back to <Link href="/" className="text-blue-600 underline">Home</Link>.
          </p>
        </div>
      );
  }
}

/* ---------------- Common small helpers & styles ----------------
Ensure your globals.css contains `.input` and `.pro-card` as before.
Example:
.input { @apply mt-2 w-full border px-3 py-2 rounded-lg border-slate-200 }
.pro-card { @apply p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg }
------------------------------------------------------------------*/

/* ---------------- EMI (with line chart + breakdown) ---------------- */
function EMI() {
  const [principal, setPrincipal] = React.useState(500000);
  const [rate, setRate] = React.useState(7.5);
  const [years, setYears] = React.useState(5);

  const monthlyRate = rate / 1200;
  const months = years * 12;
  const emi = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const total = emi * months;
  const interest = total - principal;

  // Chart data: monthly outstanding principal (approx)
  const labels = Array.from({ length: months }, (_, i) => String(i + 1));
  const outstanding = (() => {
    let bal = principal;
    const arr = [];
    for (let i = 0; i < months; i++) {
      const interestPart = bal * monthlyRate;
      const principalPart = emi - interestPart;
      bal = Math.max(0, bal - principalPart);
      arr.push(Math.round(bal));
    }
    return arr;
  })();

  const data = {
    labels,
    datasets: [
      {
        label: "Outstanding Principal (₹)",
        data: outstanding,
        borderColor: "rgba(59,130,246,0.9)",
        backgroundColor: "rgba(59,130,246,0.08)",
        tension: 0.25,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { x: { display: false }, y: { ticks: { callback: v => "₹" + v } } },
    plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => "₹" + ctx.parsed.y } } },
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
        EMI Calculator
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="space-y-4">
            <label className="block font-medium">Principal (₹)
              <input className="input" type="number" value={principal} onChange={e => setPrincipal(+e.target.value || 0)} />
            </label>

            <label className="block font-medium">Annual Interest Rate (%)
              <input className="input" type="number" step="0.01" value={rate} onChange={e => setRate(+e.target.value || 0)} />
            </label>

            <label className="block font-medium">Tenure (years)
              <input className="input" type="number" value={years} onChange={e => setYears(+e.target.value || 0)} />
            </label>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="pro-card">
              <p className="text-sm text-slate-600">Monthly EMI</p>
              <p className="text-2xl font-bold text-blue-700">₹{isFinite(emi) ? Number(emi.toFixed(0)).toLocaleString() : "—"}</p>
            </div>
            <div className="pro-card">
              <p className="text-sm text-slate-600">Total Interest</p>
              <p className="text-2xl font-bold text-blue-700">₹{isFinite(interest) ? Number(interest.toFixed(0)).toLocaleString() : "—"}</p>
            </div>
            <div className="pro-card">
              <p className="text-sm text-slate-600">Total Payment</p>
              <p className="text-2xl font-bold text-blue-700">₹{isFinite(total) ? Number(total.toFixed(0)).toLocaleString() : "—"}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 rounded-2xl p-4 border border-slate-200 shadow-lg">
          <div className="h-56">
            <Line data={data} options={options} />
          </div>
          <p className="mt-3 text-sm text-slate-600">Chart shows outstanding principal over the loan tenure.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- BMI (category with color badge) ---------------- */
function BMI() {
  const [weight, setWeight] = React.useState(70);
  const [height, setHeight] = React.useState(170);

  const m = height / 100;
  const bmi = weight > 0 && m > 0 ? weight / (m * m) : 0;

  const category = bmi === 0 ? "-" : bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  const color = bmi === 0 ? "text-slate-600" : bmi < 18.5 ? "text-amber-600" : bmi < 25 ? "text-emerald-600" : bmi < 30 ? "text-yellow-600" : "text-rose-600";

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
        BMI Calculator
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <label className="block font-medium">Weight (kg)
            <input className="input" type="number" value={weight} onChange={e => setWeight(+e.target.value || 0)} />
          </label>
          <label className="block font-medium mt-3">Height (cm)
            <input className="input" type="number" value={height} onChange={e => setHeight(+e.target.value || 0)} />
          </label>
          <div className="mt-6 pro-card">
            <p className="text-sm text-slate-600">Your BMI</p>
            <p className={`text-2xl font-bold ${color}`}>{isFinite(bmi) ? bmi.toFixed(1) : "—"}</p>
            <p className="text-slate-600 mt-1">{category}</p>
          </div>
        </div>

        <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-lg">
          <h3 className="font-semibold text-slate-700 mb-3">BMI Ranges</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><strong>Underweight:</strong> &lt; 18.5</li>
            <li><strong>Normal:</strong> 18.5 – 24.9</li>
            <li><strong>Overweight:</strong> 25 – 29.9</li>
            <li><strong>Obese:</strong> ≥ 30</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Age (detailed years, months, days) ---------------- */
function AgeCalc() {
  const [dob, setDob] = React.useState("2000-01-01");
  const [detail, setDetail] = React.useState({ years: 0, months: 0, days: 0 });

  React.useEffect(() => {
    const calc = () => {
      const birth = new Date(dob);
      const now = new Date();
      if (isNaN(birth)) return setDetail({ years: 0, months: 0, days: 0 });

      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }
      setDetail({ years, months, days });
    };
    calc();
  }, [dob]);

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
        Age Calculator
      </h1>

      <label className="block font-medium">Date of Birth
        <input className="input mt-2" type="date" value={dob} onChange={e => setDob(e.target.value)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl text-slate-600">Exact Age</p>
        <p className="text-3xl font-bold text-blue-700">{detail.years} years, {detail.months} months, {detail.days} days</p>
      </div>
    </div>
  );
}

/* ---------------- Loan Calculator (detailed) ---------------- */
function LoanCalc() {
  const [amount, setAmount] = React.useState(1000000);
  const [rate, setRate] = React.useState(8.5);
  const [years, setYears] = React.useState(10);

  const r = rate / 1200;
  const n = years * 12;
  const emi = (amount * r) / (1 - Math.pow(1 + r, -n));
  const total = emi * n;
  const interest = total - amount;

  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Breakdown",
        data: [amount, Math.round(interest)],
        backgroundColor: ["rgba(59,130,246,0.9)", "rgba(6,182,212,0.9)"],
      },
    ],
  };

  const opts = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">
        Loan Calculator
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <label className="block font-medium">Loan Amount (₹)
            <input className="input" type="number" value={amount} onChange={e => setAmount(+e.target.value || 0)} />
          </label>
          <label className="block font-medium mt-3">Interest Rate (% p.a.)
            <input className="input" type="number" value={rate} onChange={e => setRate(+e.target.value || 0)} />
          </label>
          <label className="block font-medium mt-3">Tenure (years)
            <input className="input" type="number" value={years} onChange={e => setYears(+e.target.value || 0)} />
          </label>

          <div className="pro-card mt-6">
            <p className="text-sm text-slate-600">Monthly EMI</p>
            <p className="text-2xl font-bold text-blue-700">₹{isFinite(emi) ? emi.toFixed(0) : "—"}</p>
            <p className="text-slate-600 mt-1">Total Interest: ₹{isFinite(interest) ? interest.toFixed(0) : "—"}</p>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-slate-200 shadow-lg">
          <div className="h-48"><Bar data={data} options={opts} /></div>
          <p className="mt-3 text-sm text-slate-600">Bar shows principal vs interest composition.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SIP (chart + result) ---------------- */
function SIP() {
  const [monthly, setMonthly] = React.useState(5000);
  const [rate, setRate] = React.useState(12);
  const [years, setYears] = React.useState(10);

  const r = rate / 100 / 12;
  const n = years * 12;
  const fv = monthly * (Math.pow(1 + r, n) - 1) / r * (1 + r);
  const invested = monthly * n;

  // chart: growth over years
  const labels = Array.from({ length: years + 1 }, (_, i) => String(i));
  const dataVals = labels.map((_, idx) => {
    const monthsPassed = idx * 12;
    if (monthsPassed === 0) return 0;
    const val = monthly * (Math.pow(1 + r, monthsPassed) - 1) / r * (1 + r);
    return Math.round(val);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Portfolio Value (₹)",
        data: dataVals,
        borderColor: "rgba(6,182,212,0.95)",
        backgroundColor: "rgba(6,182,212,0.08)",
        tension: 0.25,
        pointRadius: 2,
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">SIP Calculator</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <label className="block font-medium">Monthly Investment (₹)
            <input className="input" type="number" value={monthly} onChange={e => setMonthly(+e.target.value || 0)} />
          </label>
          <label className="block font-medium mt-3">Expected Annual Return (%)
            <input className="input" type="number" value={rate} onChange={e => setRate(+e.target.value || 0)} />
          </label>
          <label className="block font-medium mt-3">Duration (years)
            <input className="input" type="number" value={years} onChange={e => setYears(+e.target.value || 0)} />
          </label>

          <div className="pro-card mt-6">
            <p className="text-sm text-slate-600">Future Value</p>
            <p className="text-2xl font-bold text-blue-700">₹{isFinite(fv) ? Number(fv.toFixed(0)).toLocaleString() : "—"}</p>
            <p className="text-slate-600 mt-1">Total Invested: ₹{invested.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white/80 p-4 rounded-2xl border border-slate-200 shadow-lg">
          <div className="h-56"><Line data={data} options={options} /></div>
          <p className="mt-3 text-sm text-slate-600">Projected portfolio growth over years.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- FD ---------------- */
function FD() {
  const [principal, setPrincipal] = React.useState(100000);
  const [rate, setRate] = React.useState(6.5);
  const [years, setYears] = React.useState(5);
  const maturity = principal * Math.pow(1 + rate / 100, years);

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">FD Calculator</h1>

      <label className="block font-medium">Principal (₹)
        <input className="input" type="number" value={principal} onChange={e => setPrincipal(+e.target.value || 0)} />
      </label>
      <label className="block font-medium mt-3">Annual Rate (%)
        <input className="input" type="number" value={rate} onChange={e => setRate(+e.target.value || 0)} />
      </label>
      <label className="block font-medium mt-3">Years
        <input className="input" type="number" value={years} onChange={e => setYears(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Maturity Amount: ₹{isFinite(maturity) ? Math.round(maturity).toLocaleString() : "—"}</p>
      </div>
    </div>
  );
}

/* ---------------- RD ---------------- */
function RD() {
  const [monthly, setMonthly] = React.useState(2000);
  const [rate, setRate] = React.useState(6.5);
  const [years, setYears] = React.useState(3);

  const months = years * 12;
  // approximate RD maturity using monthly deposit formula (simple estimate)
  const maturity = monthly * months + monthly * (months * (months + 1) / 2) * (rate / 100 / 12);

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">RD Calculator</h1>

      <label className="block font-medium">Monthly Deposit (₹)
        <input className="input" type="number" value={monthly} onChange={e => setMonthly(+e.target.value || 0)} />
      </label>
      <label className="block font-medium mt-3">Annual Rate (%)
        <input className="input" type="number" value={rate} onChange={e => setRate(+e.target.value || 0)} />
      </label>
      <label className="block font-medium mt-3">Years
        <input className="input" type="number" value={years} onChange={e => setYears(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Approx. Maturity: ₹{isFinite(maturity) ? Math.round(maturity).toLocaleString() : "—"}</p>
      </div>
    </div>
  );
}

/* ---------------- GST ---------------- */
function GST() {
  const [amount, setAmount] = React.useState(1000);
  const [gst, setGst] = React.useState(18);

  const tax = amount * gst / 100;
  const total = amount + tax;

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">GST Calculator</h1>

      <label className="block font-medium">Amount (₹)
        <input className="input" type="number" value={amount} onChange={e => setAmount(+e.target.value || 0)} />
      </label>
      <label className="block font-medium mt-3">GST Rate (%)
        <input className="input" type="number" value={gst} onChange={e => setGst(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">GST: ₹{isFinite(tax) ? Math.round(tax).toLocaleString() : "—"}</p>
        <p className="text-slate-600">Total (incl. GST): ₹{isFinite(total) ? Math.round(total).toLocaleString() : "—"}</p>
      </div>
    </div>
  );
}

/* ---------------- Percentage ---------------- */
function PercentageTool() {
  const [value, setValue] = React.useState(1000);
  const [percent, setPercent] = React.useState(10);

  const part = (value * percent) / 100;
  const increased = value + part;
  const decreased = value - part;

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Percentage Calculator</h1>

      <label className="block font-medium">Value
        <input className="input" type="number" value={value} onChange={e => setValue(+e.target.value || 0)} />
      </label>
      <label className="block font-medium mt-3">Percent (%)
        <input className="input" type="number" value={percent} onChange={e => setPercent(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p>Part ({percent}%): <strong>₹{isFinite(part) ? part.toFixed(2) : "—"}</strong></p>
        <p>Increased: <strong>₹{isFinite(increased) ? increased.toFixed(2) : "—"}</strong></p>
        <p>Decreased: <strong>₹{isFinite(decreased) ? decreased.toFixed(2) : "—"}</strong></p>
      </div>
    </div>
  );
}

/* ---------------- Unit Converter ---------------- */
function UnitConverter() {
  const [type, setType] = React.useState("length");
  const [value, setValue] = React.useState(100);
  const [from, setFrom] = React.useState("cm");
  const [to, setTo] = React.useState("inch");

  const convert = (v, f, t) => {
    if (f === t) return v;
    if (f === "cm" && t === "m") return v / 100;
    if (f === "cm" && t === "inch") return v / 2.54;
    if (f === "m" && t === "cm") return v * 100;
    if (f === "m" && t === "inch") return v * 39.3701;
    if (f === "inch" && t === "cm") return v * 2.54;
    if (f === "inch" && t === "m") return v / 39.3701;

    if (f === "kg" && t === "g") return v * 1000;
    if (f === "kg" && t === "lb") return v * 2.20462;
    if (f === "g" && t === "kg") return v / 1000;
    if (f === "g" && t === "lb") return v / 453.592;
    if (f === "lb" && t === "kg") return v / 2.20462;
    if (f === "lb" && t === "g") return v * 453.592;
    return v;
  };

  const options = type === "length" ? [
    { value: "cm", label: "cm" },
    { value: "m", label: "m" },
    { value: "inch", label: "inch" },
  ] : [
    { value: "kg", label: "kg" },
    { value: "g", label: "g" },
    { value: "lb", label: "lb" },
  ];

  const result = convert(value, from, to);

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Unit Converter</h1>

      <label className="block font-medium">Type
        <select className="input" value={type} onChange={e => { setType(e.target.value); setFrom(e.target.value === 'length' ? 'cm' : 'kg'); setTo(e.target.value === 'length' ? 'inch' : 'lb'); }}>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
        </select>
      </label>

      <label className="block font-medium mt-3">Value
        <input className="input" type="number" value={value} onChange={e => setValue(+e.target.value || 0)} />
      </label>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <label>From
          <select className="input" value={from} onChange={e => setFrom(e.target.value)}>
            {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>

        <label>To
          <select className="input" value={to} onChange={e => setTo(e.target.value)}>
            {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>
      </div>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Result: {isFinite(result) ? Number(result).toFixed(4) : "—"}</p>
      </div>
    </div>
  );
}

/* ---------------- Currency (static) ---------------- */
function CurrencyConverter() {
  const [amount, setAmount] = React.useState(1000);
  const [from, setFrom] = React.useState("INR");
  const [to, setTo] = React.useState("USD");

  const rates = { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095 };
  const convert = (amt, f, t) => {
    if (!rates[f] || !rates[t]) return NaN;
    const inr = amt * (1 / rates[f]);
    return inr * rates[t];
  };

  const result = convert(amount, from, to);

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Currency Converter</h1>

      <label className="block font-medium">Amount
        <input className="input" type="number" value={amount} onChange={e => setAmount(+e.target.value || 0)} />
      </label>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <label>From
          <select className="input" value={from} onChange={e => setFrom(e.target.value)}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>

        <label>To
          <select className="input" value={to} onChange={e => setTo(e.target.value)}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </label>
      </div>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Converted: {isFinite(result) ? Number(result).toFixed(2) : "—"} {to}</p>
        <p className="text-slate-600 mt-1">Static rates used — replace with live API for real rates.</p>
      </div>
    </div>
  );
}

/* ---------------- Time Converter ---------------- */
function TimeConverter() {
  const [hours, setHours] = React.useState(1);
  const minutes = hours * 60;
  const seconds = hours * 3600;

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Time Converter</h1>

      <label className="block font-medium">Hours
        <input className="input" type="number" value={hours} onChange={e => setHours(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">{hours} hours = {minutes} minutes = {seconds} seconds</p>
      </div>
    </div>
  );
}

/* ---------------- Discount ---------------- */
function DiscountCalculator() {
  const [price, setPrice] = React.useState(1000);
  const [discount, setDiscount] = React.useState(20);

  const saved = price * discount / 100;
  const finalPrice = price - saved;

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Discount Calculator</h1>

      <label className="block font-medium">Original Price (₹)
        <input className="input" type="number" value={price} onChange={e => setPrice(+e.target.value || 0)} />
      </label>

      <label className="block font-medium mt-3">Discount (%)
        <input className="input" type="number" value={discount} onChange={e => setDiscount(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Final Price: ₹{isFinite(finalPrice) ? Number(finalPrice).toFixed(2) : "—"}</p>
        <p className="text-slate-600">You save: ₹{isFinite(saved) ? Number(saved).toFixed(2) : "—"}</p>
      </div>
    </div>
  );
}

/* ---------------- Calories ---------------- */
function CaloriesCalculator() {
  const [age, setAge] = React.useState(25);
  const [weight, setWeight] = React.useState(70);
  const [height, setHeight] = React.useState(170);
  const [gender, setGender] = React.useState("male");
  const [activity, setActivity] = React.useState("moderate");

  const bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  const activityFactor = activity === "sedentary" ? 1.2 : activity === "light" ? 1.375 : activity === "moderate" ? 1.55 : 1.725;
  const calories = bmr * activityFactor;

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Calories Calculator</h1>

      <label className="block font-medium">Age
        <input className="input" type="number" value={age} onChange={e => setAge(+e.target.value || 0)} />
      </label>

      <label className="block font-medium mt-3">Weight (kg)
        <input className="input" type="number" value={weight} onChange={e => setWeight(+e.target.value || 0)} />
      </label>

      <label className="block font-medium mt-3">Height (cm)
        <input className="input" type="number" value={height} onChange={e => setHeight(+e.target.value || 0)} />
      </label>

      <label className="block font-medium mt-3">Gender
        <select className="input" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label className="block font-medium mt-3">Activity Level
        <select className="input" value={activity} onChange={e => setActivity(e.target.value)}>
          <option value="sedentary">Sedentary (little/no exercise)</option>
          <option value="light">Light (1-3 days/week)</option>
          <option value="moderate">Moderate (3-5 days/week)</option>
          <option value="active">Very active (6-7 days/week)</option>
        </select>
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Est. Daily Calories: {isFinite(calories) ? Math.round(calories) : "—"} kcal</p>
        <p className="text-slate-600 mt-1">This is a basic estimate (Mifflin-St Jeor).</p>
      </div>
    </div>
  );
}

/* ---------------- Tax ---------------- */
function TaxCalculator() {
  const [income, setIncome] = React.useState(500000);

  const calcTax = (inc) => {
    let tax = 0;
    let remaining = inc;
    const slabs = [
      { upto: 250000, rate: 0 },
      { upto: 500000, rate: 0.05 },
      { upto: 750000, rate: 0.1 },
      { upto: 1000000, rate: 0.15 },
      { upto: Infinity, rate: 0.2 },
    ];
    let lower = 0;
    for (let s of slabs) {
      const upper = s.upto;
      const taxable = Math.max(0, Math.min(inc, upper) - lower);
      tax += taxable * s.rate;
      lower = upper;
      if (inc <= upper) break;
    }
    return tax;
  };

  const tax = calcTax(income);

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text drop-shadow mb-6">Income Tax Estimator</h1>

      <label className="block font-medium">Annual Taxable Income (₹)
        <input className="input" type="number" value={income} onChange={e => setIncome(+e.target.value || 0)} />
      </label>

      <div className="pro-card mt-8">
        <p className="text-xl font-bold text-blue-700">Estimated Tax: ₹{isFinite(tax) ? Math.round(tax) : "—"}</p>
        <p className="text-slate-600 mt-1">Simplified estimate — consult a professional for exact numbers.</p>
      </div>
    </div>
  );
}
