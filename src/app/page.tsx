"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowBigRightDashIcon, Brain, Zap, Shield, Github, Twitter } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

<div className="min-h-screen w-full bg-black relative">
    {/* Vercel Grid */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Your Content/Components */}
  </div>

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-neutral-900 font-sans">
      {/* Ember Glow Background (global wrapper) */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        }}
      />

      {/* All Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-around px-6 md:px-12 py-4 font-sans mx-auto">
          <div className="text-2xl font-bold text-white">PatchMind</div>
          <div className="hidden md:flex space-x-8 text-gray-200">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          <Button
            onClick={() => redirect("/login")}
            className="px-4 py-2 bg-neutral-800 text-amber-200 rounded-lg shadow hover:bg-neutral-600 transition"
          >
            Get Started
          </Button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
          <Badge className="bg-neutral-200/10 backdrop-blur-2xl px-8 py-1 rounded-full shadow-lg">
            <h2 className="text-yellow-300 text-lg tracking-wide">Your Personal ✨</h2>
          </Badge>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            <span className="inline-block mr-2">AI</span>
            <span className="animate-pulse bg-gradient-to-r from-blue-400 via-blue-200 to-orange-300 bg-clip-text text-transparent">
              Debugging
            </span>
            <span className="ml-2">Journal</span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed">
            PatchMind is your <span className="font-semibold text-white">personal debugging journal</span>.  
            Log, search, and revisit every bug you’ve fixed — so you’ll never forget.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => redirect("/login")}
              className="px-6 py-3 rounded-xl flex items-center gap-2 bg-neutral-200 text-black font-semibold shadow-md hover:scale-105 transition-all"
            >
              Try Now
              <ArrowBigRightDashIcon className="animate-bounce size-6" />
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20 font-sans">
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="backdrop-blur-2xl px-10 py-2 rounded-full mb-4">
                Features✨
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Everything you need to know about PatchMind
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                PatchMind combines intelligent logging with AI-powered insights to make debugging effortless.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "📒", title: "Smart Logging", text: "Quickly log errors, stack traces, and fix notes in one organized place." },
                { icon: "🔎", title: "Easy Search", text: "Find past solutions instantly with full-text search across your journal." },
                { icon: "📂", title: "Organized Revisit", text: "Revisit fixes anytime with categories so you never solve the same bug again." },
              ].map((f, i) => (
                <div key={i} className="group p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{f.text}</p>
                </div>
              ))}

              <div className="group p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-500/30 rounded-xl mb-4">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Insights</h3>
                <p className="text-gray-300 leading-relaxed">Get intelligent summaries, pattern recognition, and personalized debugging advice.</p>
              </div>

              <div className="group p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/30 rounded-xl mb-4">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Frequent Error Analysis</h3>
                <p className="text-gray-300 leading-relaxed">Identify your most common errors and get AI suggestions to avoid repetition.</p>
              </div>

              <div className="group p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-500/30 rounded-xl mb-4">
                  <Shield className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
                <p className="text-gray-300 leading-relaxed">Your debugging data stays private and secure with end-to-end encryption.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 font-sans">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Badge variant="secondary" className="backdrop-blur-2xl px-10 py-2 rounded-full mb-8">
              ⚡About PatchMind ⚡
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Your Debugging Journal Companion That Learns With You
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 sm:p-12 shadow-2xl border border-white/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <span className="font-semibold text-white">PatchMind</span> was born from the frustration of solving
                the same bugs again and again, and forgetting how we actually fixed them.  
                It helps you log, track, and revisit your errors in an organized way with the help of AI.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With AI integration, PatchMind doesn’t just store your errors — it analyzes them, finds patterns,
                and provides personalized solutions. It’s like having a senior developer by your side 24/7.
              </p>

              <h1 className="animate-pulse font-bold text-6xl tracking-widest bg-gradient-to-r from-blue-400 via-blue-200 to-yellow-400 bg-clip-text text-transparent">
                PATCHMIND
              </h1>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 font-sans bg-black/90">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="text-2xl font-bold mb-4">PatchMind</div>
                <p className="text-gray-300 max-w-md">
                  Your personal AI debugging journal. Never forget a fix, never repeat a mistake. Debug smarter, not harder.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white">Features</a></li>
                  <li><a href="#about" className="hover:text-white">About</a></li>
                  <li><a href="/login" className="hover:text-white">Get Started</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                  <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 PatchMind. All rights reserved.</div>
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-white hover:scale-110 transition">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white hover:scale-110 transition">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
