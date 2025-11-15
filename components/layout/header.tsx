"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Bell, User, LogOut } from "lucide-react"

export function Header() {
  const router = useRouter()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real app, this would trigger a search
      console.log("Searching for:", searchQuery)
      // You could navigate to a search results page or filter data
    }
  }

  return (
    <header className="bg-surface border-b border-border h-20 fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ml-64">
          <img src="/1.jpg" alt="AgroLink Logo" className="w-8 h-8 rounded-lg" />
          <h1 className="text-xl font-bold text-text">AgroLink </h1>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative hidden md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search farms, retailers..."
            className="input-field w-64"
          />
          <button type="submit" className="absolute right-3 top-2.5 text-text-secondary hover:text-primary transition-colors" title="Search">
            <Search size={18} />
          </button>
        </form>

        {/* Notifications */}
        <button className="relative text-text-secondary hover:text-primary transition-colors" title="Notifications">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 pl-6 border-l border-border hover:opacity-80 transition-opacity"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-text">Admin User</p>
              <p className="text-xs text-text-secondary">Platform Manager</p>
            </div>
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
              <User size={20} className="text-primary-dark" />
            </div>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-error hover:bg-surface-secondary transition-colors rounded-lg"
              >
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
