"use client";
import { Themetoggler } from "@/components/Theme-toggler";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowBigRight,
  ArrowBigRightDashIcon,
  ArrowBigRightIcon,
} from "lucide-react";
import { redirect } from "next/navigation";

<div className="font-sans grid  items-center justify-items-center relative top-24 gap-2">
  <Themetoggler />
</div>;

export default function Home() {
  return (
    <div className="relative z-10 h-screen">
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(100% 120% at 50% 10%, #fff 20%, #6366f1 100%)",
        }}
      />
      <div className="h-screen">
        <nav className="flex items-center justify-around px-8 py-4 relative z-10 font-sans">
          <div className="text-2xl font-bold text-black">PatchMind</div>
          <div className="hidden md:flex space-x-8 text-gray-700">
            <a href="#">Features</a>
            <a href="#">About</a>
          </div>
          <Button
            onClick={() => redirect("/login")}
            className="px-4 py-2 bg-neutral-800 text-amber-200 rounded-lg shadow hover:bg-neutral-600 transition"
          >
            Get Started
          </Button>
        </nav>

        <section className="relative flex flex-col items-center justify-center min-h-[90vh]  overflow-hidden font-sans text-center px-6">
          <Badge className="bg-neutral-200/10  backdrop-blur-2xl px-10 py-1 rounded-full shadow-lg">
            <h2 className="text-yellow-900 text-lg  tracking-wide">
              Your Personal ✨
            </h2>
          </Badge>
          <h1 className="mt-1  text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-tight">
            <span className="inline-block mr-2">AI</span>
            <span className="animate-pulse bg-gradient-to-r from-neutral-800 via-neutral-900 to-black bg-clip-text text-transparent">
              debugging
            </span>
            <span className="ml-2">journal </span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-600 text-md leading-relaxed">
            PatchMind is your{" "}
            <span className="font-semibold text-neutral-800">
              personal debugging journal
            </span>
            . Log, search, and revisit every bug you’ve fixed — so you’ll never
            forget.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                redirect("/login");
              }}
              className="px-6 py-2 rounded-xl flex items-center gap-2 bg-neutral-800 text-white font-semibold shadow-md hover:scale-105 transition-all "
            >
              Try Now
              <ArrowBigRightDashIcon className="animate-bounce size-6 " />
            </button>
          </div>
        </section>
      </div>
    </div>
    <div className="relative z-10 bg-neutral-200">

    
      
      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto h-screen">
          <div className="p-6 rounded-xl shadow-lg bg-yellow-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              📒 Smart Logging
            </h3>
            <p className="text-gray-600">
              Quickly log errors, stack traces, and your fix notes in one place.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-yellow-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              🔎 Easy Search
            </h3>
            <p className="text-gray-600">
              Find past bugs instantly with full-text search across your journal.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-yellow-50 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              📂 Organized Revisit
            </h3>
            <p className="text-gray-600">
              Revisit fixes anytime so you never waste time solving the same bug twice.
            </p>
          </div>
        </div>
        </div>

      </div>
  );
}
