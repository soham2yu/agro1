"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { useEffect, useState } from "react"

export function LandingHeader() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    setIsAuthenticated(!!userRole)
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-lg">
              <img
              src="1.jpg"
              alt="AgroLink X Dashboard"
              className="relative h-full w-full object-cover rounded-3xl"
            />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              AgroLink 
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Features
            </a>
            <a href="#roles" className="text-gray-700 hover:text-emerald-600 transition-colors">
              For Everyone
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Benefits
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
