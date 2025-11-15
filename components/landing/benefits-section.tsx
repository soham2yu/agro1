"use client"

import { CheckCircle2 } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "Reduce fraud with blockchain verification",
    "Increase shelf life with real-time monitoring",
    "Boost farmer income by 30-40%",
    "Decrease delivery time by up to 20-30%",
    "Access AI-powered market analytics",
    "Secure transactions with smart contracts",
  ]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl" />
            <img
              src="FARMER.png"
              alt="Benefits"
              className="relative h-full w-full object-cover rounded-3xl"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Why Choose AgroLink ?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of agricultural professionals already benefiting from transparent, efficient supply chains.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
