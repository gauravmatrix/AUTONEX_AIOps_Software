import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-black">

      {/* ================= HERO ================= */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-600 md:text-6xl">
          AUTONEX
        </h1>

        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-300">
          AI-Powered Autonomous Software Operations Platform
        </p>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Predict incidents, explain failures, and assist engineers with
          intelligent, safe operational decisions.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/dashboard"
            className="px-8 py-3 font-semibold transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            🚀 Launch Dashboard
          </Link>
          <a
            href="#core"
            className="px-8 py-3 font-semibold text-blue-600 transition border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            ⚙️ Explore Platform
          </a>
        </div>
      </section>

      {/* ================= WHAT IS / WHY ================= */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2">

          {/* What is */}
          <div className="p-8 transition border bg-zinc-900/60 border-white/10 rounded-xl hover:border-blue-600">
            <div className="mb-3 text-3xl">🧠</div>
            <h2 className="mb-3 text-2xl font-bold text-blue-600">
              What is AUTONEX?
            </h2>
            <p className="leading-relaxed text-gray-300">
              AUTONEX is an enterprise-grade AIOps platform that continuously
              observes system behavior, detects anomalies, explains root causes,
              and assists engineers with AI-driven operational intelligence.
            </p>
          </div>

          {/* Why */}
          <div className="p-8 transition border bg-zinc-900/60 border-white/10 rounded-xl hover:border-blue-600">
            <div className="mb-3 text-3xl">🚀</div>
            <h2 className="mb-3 text-2xl font-bold text-blue-600">
              Why AUTONEX?
            </h2>
            <p className="leading-relaxed text-gray-300">
              Modern systems are too complex for manual operations. AUTONEX
              shifts IT teams from reactive firefighting to proactive,
              explainable, and AI-assisted operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE FLOW ================= */}
      <section id="core" className="px-6 py-20">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
          How AUTONEX Works
        </h2>

        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-4">
          {[
            { icon: "📡", title: "Observe", desc: "Collect metrics, logs & signals." },
            { icon: "🧠", title: "Detect", desc: "AI detects anomalies & risks." },
            { icon: "🔍", title: "Explain", desc: "Root causes explained in plain language." },
            { icon: "🤝", title: "Assist", desc: "Human-approved corrective actions." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 transition border bg-zinc-900/60 border-white/10 rounded-xl hover:border-blue-600 hover:shadow-lg"
            >
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROBLEMS ================= */}
      <section className="px-6 py-20 bg-zinc-950">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
          Problems AUTONEX Solves
        </h2>

        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2">
          {[
            "Alert fatigue & noisy monitoring",
            "Reactive incident handling",
            "Microservice dependency complexity",
            "Slow & manual root cause analysis",
          ].map((text) => (
            <div
              key={text}
              className="p-6 transition border bg-zinc-900/60 border-white/10 rounded-xl hover:border-blue-600"
            >
              <p className="text-gray-300">⚠️ {text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="px-6 py-20">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-600">
          Real-World Use Cases
        </h2>

        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-3">
          {[
            "Production downtime prevention",
            "Failed deployment detection",
            "Traffic spike & capacity risks",
            "Memory leak identification",
            "AI-based incident explanation",
            "AI-assisted SRE operations",
          ].map((useCase) => (
            <div
              key={useCase}
              className="p-6 transition border bg-zinc-900/60 border-white/10 rounded-xl hover:border-blue-600"
            >
              <h3 className="mb-2 font-semibold text-blue-600">
                {useCase}
              </h3>
              <p className="text-sm text-gray-400">
                Enterprise-grade operational intelligence with AI.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 py-24 text-center bg-black">
        <h2 className="mb-4 text-4xl font-extrabold text-blue-600">
          The Future of IT Operations is Autonomous
        </h2>

        <p className="max-w-3xl mx-auto mb-8 text-gray-300">
          AUTONEX empowers engineers with clarity, intelligence, and control —
          without replacing human judgment.
        </p>

        <Link
          to="/dashboard"
          className="inline-block px-10 py-4 font-semibold transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Enter AUTONEX Platform
        </Link>

        <p className="mt-10 text-sm text-gray-500">
          AUTONEX · AI-Powered Autonomous Software Operations Platform
        </p>
      </section>
    </div>
  );
}
