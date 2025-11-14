"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, MapPin, Truck, Store, BarChart3, Settings } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState<string>("")

  useEffect(() => {
    const role = localStorage.getItem("userRole") || "farmer"
    setUserRole(role)
  }, [])

  const getNavItems = () => {
    const baseItems = [{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard }]

    if (userRole === "farmer") {
      return [
        ...baseItems,
        { href: "/farmers", label: "My Crops", icon: Users },
        { href: "/checkpoints", label: "Checkpoints", icon: MapPin },
      ]
    } else if (userRole === "retailer") {
      return [
        ...baseItems,
        { href: "/farmers", label: "Suppliers", icon: Users },
        { href: "/retailers", label: "Orders", icon: Store },
        { href: "/logistics", label: "Tracking", icon: Truck },
      ]
    } else if (userRole === "checkpoint") {
      return [
        ...baseItems,
        { href: "/checkpoints", label: "Checkpoints", icon: MapPin },
        { href: "/logistics", label: "Logistics", icon: Truck },
        { href: "/analytics", label: "Tracking", icon: BarChart3 },
      ]
    }

    return baseItems
  }

  const navItems = getNavItems()

  return (
    <aside className="w-64 bg-surface border-r border-border h-screen fixed left-0 top-0 pt-20">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary-light text-primary-dark font-medium"
                  : "text-text-secondary hover:bg-surface-secondary"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 border-t border-border">
        <Link
          href="/analytics"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            pathname === "/analytics"
              ? "bg-primary-light text-primary-dark font-medium"
              : "text-text-secondary hover:bg-surface-secondary"
          }`}
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </Link>
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            pathname === "/settings"
              ? "bg-primary-light text-primary-dark font-medium"
              : "text-text-secondary hover:bg-surface-secondary"
          }`}
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  )
}
