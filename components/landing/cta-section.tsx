"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Transform Your Supply Chain?</h2>
        <p className="text-xl text-emerald-100 mb-8">
          Join the agricultural revolution. Choose your role and get started today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/farmer-login"
            className="px-8 py-3 bg-white text-emerald-600 rounded-full hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2"
          >
            Farmer Login <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/auth/retailer-login"
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium flex items-center justify-center gap-2"
          >
            Retailer Login <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/auth/checkpoint-login"
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium flex items-center justify-center gap-2"
          >
            Checkpoint Login <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
