"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Bell, User, LogOut } from "lucide-react"

export function Header() {
  const router = useRouter()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
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
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="bg-surface border-b border-border h-10 fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-1 py-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 ml-4">
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
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative text-text-secondary hover:text-primary transition-colors"
            title="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-surface border border-border rounded-lg shadow-lg z-50">
              <div className="p-4 border-b border-border">
                <h3 className="text-sm font-semibold text-text">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-4 border-b border-border hover:bg-surface-secondary transition-colors">
                  <p className="text-sm text-text">New farmer registration: Rajesh Kumar from Punjab</p>
                  <p className="text-xs text-text-secondary mt-1">2 hours ago</p>
                </div>
                <div className="p-4 border-b border-border hover:bg-surface-secondary transition-colors">
                  <p className="text-sm text-text">Checkpoint verification completed for batch #1234</p>
                  <p className="text-xs text-text-secondary mt-1">4 hours ago</p>
                </div>
                <div className="p-4 border-b border-border hover:bg-surface-secondary transition-colors">
                  <p className="text-sm text-text">Low stock alert: Wheat in warehouse #2</p>
                  <p className="text-xs text-text-secondary mt-1">6 hours ago</p>
                </div>
                <div className="p-4 hover:bg-surface-secondary transition-colors">
                  <p className="text-sm text-text">Retailer order #5678 has been shipped</p>
                  <p className="text-xs text-text-secondary mt-1">1 day ago</p>
                </div>
              </div>
              <div className="p-4 border-t border-border">
                <button className="text-sm text-primary hover:text-primary-dark transition-colors">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

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
