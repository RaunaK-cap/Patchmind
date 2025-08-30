"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowBigRightDashIcon, Brain, Zap, Shield, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { redirect } from "next/navigation"



export default function Home() {
  return (
    <div className="relative">
      <div className="min-h-screen w-full relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(100% 100% at 50% 10%, #fff 10%, #6366f1 120%)",
          }}
        />
        <div className="h-screen">
          <nav className="flex items-center justify-around px-8 py-4 relative z-10 font-sans">
            <div className="text-2xl font-bold text-black">PatchMind</div>
            <div className="hidden md:flex space-x-8 text-gray-700">
              <a href="#features" className="hover:text-neutral-900 transition-colors">
                Features
              </a>
              <a href="#about" className="hover:text-neutral-900 transition-colors">
                About
              </a>
            </div>
            <Button
              onClick={() => redirect("/login")}
              className="px-4 py-2 bg-neutral-800 text-amber-200 rounded-lg shadow hover:bg-neutral-600 transition"
            >
              Get Started
            </Button>
          </nav>

          <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden font-sans text-center px-6">
            <Badge className="bg-neutral-200/10 backdrop-blur-2xl px-10 py-1 rounded-full shadow-lg">
              <h2 className="text-yellow-900 text-lg tracking-wide">Your Personal ✨</h2>
            </Badge>
            <h1 className="mt-1 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-tight">
              <span className="inline-block mr-2">AI</span>
              <span className="animate-pulse bg-gradient-to-r from-neutral-800 via-neutral-900 to-black bg-clip-text text-transparent">
                debugging
              </span>
              <span className="ml-2">journal </span>
            </h1>

            <p className="mt-6 max-w-2xl text-gray-600 text-md leading-relaxed">
              PatchMind is your <span className="font-semibold text-neutral-800">personal debugging journal</span>. Log,
              search, and revisit every bug you've fixed — so you'll never forget.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  redirect("/login")
                }}
                className="px-6 py-2 rounded-xl flex items-center gap-2 bg-neutral-800 text-white font-semibold shadow-md hover:scale-105 transition-all"
              >
                Try Now
                <ArrowBigRightDashIcon className="animate-bounce size-6" />
              </button>
            </div>
          </section>
        </div>
      </div>

      <section id="features" className="relative py-20 font-sans">
        <div
          className="absolute inset-0 bg-indigo-100 mix-blend-normal"
          
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-300/10 backdrop-blur-2xl  text-black px-10 py-2 rounded-full mb-4 border border-white/30">
              Features✨
            </Badge>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Everything you need to debug smarter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              PatchMind combines intelligent logging with AI-powered insights to make debugging effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📒</div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Smart Logging</h3>
              <p className="text-gray-600 leading-relaxed">
                Quickly log errors, stack traces, and your fix notes in one organized place with intelligent
                categorization.
              </p>
            </div>

            <div className="group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🔎</div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Easy Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Find past bugs instantly with full-text search across your entire debugging journal and history.
              </p>
            </div>

            <div className="group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📂</div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Organized Revisit</h3>
              <p className="text-gray-600 leading-relaxed">
                Revisit fixes anytime with organized categories so you never waste time solving the same bug twice.
              </p>
            </div>

            <div className="group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100/80 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">AI Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get intelligent summaries, pattern recognition, and personalized debugging advice from our AI assistant.
              </p>
            </div>

            <div className="group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100/80 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Frequent Error Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify your most common errors and get proactive suggestions to prevent recurring issues.
              </p>
            </div>

            <div className="group p-8 rounded-2xl shadow-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-100/80 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Secure & Private</h3>
              <p className="text-gray-600 leading-relaxed">
                Your debugging data stays private and secure with end-to-end encryption and local storage options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 font-sans">
        <div
          className="absolute inset-0 bg-neutral-100"
        
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Badge className="bg-yellow-400/30 backdrop-blur-2xl shadow-2xl text-neutral-600 px-10 py-2 rounded-full mb-8">
            About PatchMind
          </Badge>

          <h2 className="text-4xl font-bold text-neutral-900 mb-8">Your debugging companion that learns with you</h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-neutral-900">PatchMind</span> was born from the frustration of solving
              the same bugs over and over again. We believe that every developer deserves a personal debugging assistant
              that remembers their journey, learns from their patterns, and helps them grow.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With intelligent AI integration, PatchMind doesn't just store your fixes—it analyzes them, identifies
              patterns, and provides personalized insights to make you a more efficient developer. It's like having a
              senior developer's wisdom at your fingertips, available 24/7.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">10k+</div>
                <div className="text-gray-600">Bugs Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          
        />

        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <div className="grid md:grid-cols-4 gap-8 mb-12">

            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">PatchMind</div>
              <p className="text-gray-200 leading-relaxed max-w-md">
                Your personal AI debugging journal. Never forget a fix, never repeat a mistake. Debug smarter, not
                harder.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:text-white transition-colors">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>


            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">© 2024 PatchMind. All rights reserved.</div>

            {/* Social Media */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
