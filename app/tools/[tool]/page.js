"use client";
import React from "react";
import Link from "next/link";

export default function ToolPage({ params }) {
  const { tool } = params;

  if (tool === "emi") return <EMI />;
  if (tool === "bmi") return <BMI />;
  if (tool === "age") return <AgeCalc />;

  return (
    <div>
      <h2 className="page-title">Tool not found</h2>
      <p className="page-sub">
        Try going back to <Link href="/">Home</Link>.
      </p>
    </div>
  );
}

function EMI() {
  const [principal, setPrincipal] = React.useState(500000);
  const [rate, setRate] = React.useState(7.5);
  const [years, setYears] = React.useState(5);

  const monthlyRate = rate / 1200;
  const months = years * 12;
  const emi =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  return (
    <div>
      <h1 className="page-title">EMI Calculator</h1>

      <div className="grid gap-6 max-w-lg">
        <label className="font-medium">
          Principal Amount (₹)
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(+e.target.value)}
            className="input"
          />
        </label>

        <label className="font-medium">
          Interest Rate (%) per year
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="input"
          />
        </label>

        <label className="font-medium">
          Loan Tenure (years)
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="input"
          />
        </label>
      </div>

      <div className="pro-card mt-8 p-6 rounded-2xl shadow border border-slate-200">
        <p className="text-xl font-bold text-blue-700">
          Monthly EMI: ₹{isFinite(emi) ? emi.toFixed(0) : "—"}
        </p>
      </div>
    </div>
  );
}

function BMI() {
  const [weight, setWeight] = React.useState(70);
  const [height, setHeight] = React.useState(170);

  const m = height / 100;
  const bmi = weight / (m * m);

  const category =
    bmi < 18.5
      ? "Underweight"
      : bmi < 25
      ? "Normal"
      : bmi < 30
      ? "Overweight"
      : "Obese";

  return (
    <div>
      <h1 className="page-title">BMI Calculator</h1>

      <div className="space-y-6 max-w-lg">
        <label>
          Weight (kg)
          <input
            className="input"
            type="number"
            value={weight}
            onChange={(e) => setWeight(+e.target.value)}
          />
        </label>

        <label>
          Height (cm)
          <input
            className="input"
            type="number"
            value={height}
            onChange={(e) => setHeight(+e.target.value)}
          />
        </label>
      </div>

      <div className="pro-card mt-8 p-6 rounded-2xl border border-slate-200 shadow">
        <p className="text-xl font-bold text-blue-700">
          Your BMI: {bmi.toFixed(1)}
        </p>
        <p className="text-slate-600">{category}</p>
      </div>
    </div>
  );
}

function AgeCalc() {
  const [dob, setDob] = React.useState("2000-01-01");

  const age = (() => {
    const d = new Date(dob);
    const diff = Date.now() - d.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  })();

  return (
    <div>
      <h1 className="page-title">Age Calculator</h1>

      <label className="block max-w-lg">
        Date of Birth:
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="input mt-2"
        />
      </label>

      <div className="pro-card mt-8 p-6 rounded-2xl border border-slate-200 shadow">
        <p className="text-xl font-bold text-blue-700">
          You are {age} years old.
        </p>
      </div>
    </div>
  );
}
