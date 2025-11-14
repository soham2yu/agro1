"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Farm to Table,{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                Completely Transparent
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect farmers, retailers, and logistics partners on a blockchain-verified platform. Real-time IoT
              monitoring, smart checkpoints, and secure transactions for the modern agriculture supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/login"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 font-medium"
              >
                Start Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="px-8 py-3 border-2 border-emerald-200 text-emerald-700 rounded-full hover:bg-emerald-50 transition-colors font-medium"
              >
                Scan Qr
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl" />
            <img
              src="2.jpg"
              alt="AgroLink X Dashboard"
              className="relative h-full w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
