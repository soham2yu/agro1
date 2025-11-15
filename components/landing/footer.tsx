"use client"
import { Leaf, Star, Quote } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">AgroLink X</span>
            </div>
            <p className="text-sm text-gray-600">
              Connecting farmers, retailers, and logistics on a transparent, blockchain-verified platform.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#features" className="hover:text-emerald-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 pt-12 pb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What Our Users Say</h3>
            <p className="text-gray-600">Trusted by farmers, retailers, and consumers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-600 mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "This platform has transformed how we manage our crops in India. The blockchain verification gives our customers complete trust in our produce quality."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-bold">RS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">Indian Farmer, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-amber-600 mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "As a retailer, finding verified suppliers was always a challenge. AgroLink's platform makes it effortless and transparent."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold">KS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Kishor Sharma</p>
                  <p className="text-sm text-gray-600">Retail Manager</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-4 italic">
                "The QR code scanning feature is amazing! I can instantly verify the authenticity and trace the journey of my food."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Deendayal Raghuwanshi</p>
                  <p className="text-sm text-gray-600">Consumer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2025 AgroLink X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
