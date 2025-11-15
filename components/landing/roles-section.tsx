"use client"

import Link from "next/link"
import { Sprout, Store, Navigation, ShoppingCart, ArrowRight } from "lucide-react"

export function RolesSection() {
  const roles = [
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "For Farmers",
      description: "Grow crops with confidence, track your harvest, and get fair pricing with blockchain verification.",
      features: ["Real-time crop monitoring", "Yield predictions", "Direct market access", "Fair price verification"],
      link: "/auth/farmer-login",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "For Retailers",
      description: "Source verified, fresh produce directly from farmers with complete supply chain transparency.",
      features: ["Verified suppliers", "Quality tracking", "Secure escrow", "Traceability reports"],
      link: "/auth/retailer-login",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: <Navigation className="w-12 h-12" />,
      title: "For Logistics",
      description: "Manage checkpoints, monitor shipments in real-time, and ensure optimal storage conditions.",
      features: ["Real-time tracking", "Environmental sensors", "QR verification", "Delivery confirmation"],
      link: "/auth/checkpoint-login",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "For Consumers",
      description: "Scan QR codes to access detailed crop information, verify authenticity, and track farm-to-table journey.",
      features: ["QR code scanning", "Product traceability", "Quality verification", "Nutritional info"],
      link: "/auth/consumer-login",
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Built for Every Role</h2>
          <p className="text-xl text-gray-600">Tailored solutions for farmers, retailers, and logistics partners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative p-8 flex flex-col h-full">
                {/* Icon */}
                <div className={`text-transparent bg-gradient-to-r ${role.color} bg-clip-text mb-4`}>{role.icon}</div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{role.description}</p>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {role.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={role.link}
                  className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${role.color} text-white rounded-full hover:shadow-lg transition-all font-medium`}
                >
                  Login Here <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
