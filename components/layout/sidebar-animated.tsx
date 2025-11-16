"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, MapPin, Truck, Store, BarChart3, Settings, QrCode, Search } from "lucide-react"
import { Sidebar, SidebarBody, SidebarLink, SidebarProvider } from "@/components/ui/sidebar-animated"

export function SidebarAnimated() {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState<string>("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const role = localStorage.getItem("userRole") || "farmer"
    setUserRole(role)
  }, [])

  const getNavItems = () => {
    const baseItems = [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard size={20} />
      }
    ]

    if (userRole === "farmer") {
      return [
        ...baseItems,
        {
          href: "/farmers",
          label: "Networks",
          icon: <Users size={20} />
        },
        {
          href: "/checkpoints",
          label: "Checkpoints",
          icon: <MapPin size={20} />
        },
        {
          href: "/search",
          label: "Search",
          icon: <Search size={20} />
        },
      ]
    } else if (userRole === "retailer") {
      return [
        ...baseItems,
        {
          href: "/farmers",
          label: "Suppliers",
          icon: <Users size={20} />
        },
        {
          href: "/retailers",
          label: "Orders",
          icon: <Store size={20} />
        },
        {
          href: "/logistics",
          label: "Tracking",
          icon: <Truck size={20} />
        },
        {
          href: "/search",
          label: "Search",
          icon: <Search size={20} />
        },
      ]
    } else if (userRole === "checkpoint") {
      return [
        ...baseItems,
        {
          href: "/checkpoints",
          label: "Checkpoints",
          icon: <MapPin size={20} />
        },
        {
          href: "/logistics",
          label: "Logistics",
          icon: <Truck size={20} />
        },
        {
          href: "/analytics",
          label: "Tracking",
          icon: <BarChart3 size={20} />
        },
        {
          href: "/search",
          label: "Search",
          icon: <Search size={20} />
        },
      ]
    } else if (userRole === "consumer") {
      return [
        ...baseItems,
        {
          href: "/consumer",
          label: "QR Scanner",
          icon: <QrCode size={20} />
        },
        {
          href: "/farmers",
          label: "Suppliers",
          icon: <Users size={20} />
        },
        {
          href: "/retailers",
          label: "Orders",
          icon: <Store size={20} />
        },
        {
          href: "/logistics",
          label: "Tracking",
          icon: <Truck size={20} />
        },
        {
          href: "/search",
          label: "Search",
          icon: <Search size={20} />
        },
      ]
    }

    return baseItems
  }

  const navItems = getNavItems()

  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={true}>
      <div className="fixed left-1 top-18 h-screen z-30">
        <Sidebar>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <SidebarLink
                    key={idx}
                    link={item}
                    className={pathname === item.href ? "bg-primary-light text-primary-dark font-medium" : ""}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1 py-20">
              <SidebarLink
                link={{
                  href: "/analytics",
                  label: "Analytics",
                  icon: <BarChart3 size={20} />
                }}
                className={pathname === "/analytics" ? "bg-primary-light text-primary-dark font-medium" : ""}
              />
              <SidebarLink
                link={{
                  href: "/settings",
                  label: "Settings",
                  icon: <Settings size={20} />
                }}
                className={pathname === "/settings" ? "bg-primary-light text-primary-dark font-medium" : ""}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
    </SidebarProvider>
  )
}
