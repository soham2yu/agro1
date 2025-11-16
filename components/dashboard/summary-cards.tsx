"use client"

import { TrendingUp, Users, Store, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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
  const [animatedValues, setAnimatedValues] = useState(summaryData.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(summaryData.map(item => parseInt(item.value.replace(',', ''))))
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {summaryData.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card cursor-pointer"
          >
            <div className="card-body">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-text-secondary text-sm font-medium">{item.label}</p>
                  <motion.p
                    className="text-3xl font-bold text-text mt-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {animatedValues[index].toLocaleString()}
                  </motion.p>
                </div>
                <motion.div
                  className={`${item.color} p-3 rounded-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`${item.iconColor}`} size={24} />
                </motion.div>
              </div>
              <motion.p
                className="text-xs text-text-secondary mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                ↑ 12% from last month
              </motion.p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
