"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"

export default function AuthLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              AgroLink X
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Role</h1>
          <p className="text-gray-600">Select how you'll access the platform</p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4">
          {/* Farmer */}
          <Link href="/auth/farmer-login" className="block">
            <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Farmer Login
                  </h3>
                  <p className="text-gray-600 mt-1">Monitor crops, verify harvest, and receive fair pricing</p>
                </div>
                <div className="text-2xl text-emerald-600">🌾</div>
              </div>
            </div>
          </Link>

          {/* Retailer */}
          <Link href="/auth/retailer-login" className="block">
            <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-amber-500 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    Retailer Login
                  </h3>
                  <p className="text-gray-600 mt-1">Source verified produce and manage purchases securely</p>
                </div>
                <div className="text-2xl">🏪</div>
              </div>
            </div>
          </Link>

          {/* Checkpoint */}
          <Link href="/auth/checkpoint-login" className="block">
            <div className="p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Checkpoint Login
                  </h3>
                  <p className="text-gray-600 mt-1">Track shipments, verify batches, and monitor conditions</p>
                </div>
                <div className="text-2xl">📍</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
