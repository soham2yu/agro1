"use client"

import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function PriceMovement() {
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress([75, 67, 50]) // percentages for wheat, rice, corn
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const crops = [
    { name: "Wheat", price: "₹2,450", color: "bg-success", progress: 75 },
    { name: "Rice", price: "₹3,120", color: "bg-info", progress: 67 },
    { name: "Corn", price: "₹1,890", color: "bg-warning", progress: 50 },
  ]

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendingUp size={20} className="text-primary" />
          </motion.div>
          Price Movement
        </h2>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          {crops.map((crop, index) => (
            <motion.div
              key={crop.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-text">{crop.name}</p>
                <motion.p
                  className={`text-sm font-bold text-${crop.color.split('-')[1]}`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {crop.price}
                </motion.p>
              </div>
              <div className="w-full bg-surface-secondary rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`${crop.color} rounded-full h-3`}
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedProgress[index]}%` }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2 + index * 0.2,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 p-3 bg-gradient-to-r from-primary-light to-accent-light rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.p
            className="text-xs text-primary-dark font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Market update: +2.3% from yesterday
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}
