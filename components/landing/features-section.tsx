"use client"

import { BarChart3, Shield, Zap, Droplets, TrendingUp, Lock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "IoT sensors track temperature, weight, and quality at every checkpoint",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Blockchain Verified",
      description: "Immutable transaction records ensure complete supply chain transparency",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Verification",
      description: "QR code scanning and AI-powered quality verification at checkpoints",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Environmental Data",
      description: "Track humidity and storage conditions for crop preservation",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Insights",
      description: "AI-driven analytics for yield predictions and price trends",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Escrow",
      description: "Smart contract-based transactions with buyer protection",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Agriculture
          </h2>
          <p className="text-xl text-gray-600">Everything you need to manage a transparent, efficient supply chain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border-2 border-emerald-100 rounded-2xl hover:border-emerald-300 hover:shadow-lg transition-all group"
            >
              <div className="text-emerald-600 mb-4 group-hover:text-emerald-700 transition-colors">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
