"use client"

import { TrendingUp, Users, Store, Truck } from "lucide-react"

const summaryData = [
  {
    label: "Total Registered Farmers",
    value: "2,847",
    icon: Users,
    color: "bg-primary-light",
    iconColor: "text-primary-dark",
  },
  {
    label: "Verified Crop Batches",
    value: "1,263",
    icon: TrendingUp,
    color: "bg-accent-light",
    iconColor: "text-accent",
  },
  { label: "Active Retailers", value: "486", icon: Store, color: "bg-info/10", iconColor: "text-info" },
  { label: "Ongoing Deliveries", value: "342", icon: Truck, color: "bg-success/10", iconColor: "text-success" },
]

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {summaryData.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="card">
            <div className="card-body">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-text-secondary text-sm font-medium">{item.label}</p>
                  <p className="text-3xl font-bold text-text mt-2">{item.value}</p>
                </div>
                <div className={`${item.color} p-3 rounded-lg`}>
                  <Icon className={`${item.iconColor}`} size={24} />
                </div>
              </div>
              <p className="text-xs text-text-secondary mt-4">↑ 12% from last month</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
