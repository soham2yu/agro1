"use client"

import { motion } from "framer-motion"
import { TrendingUp, Wheat } from "lucide-react"

export function CropFlowChart() {
  const crops = [
    { name: "Wheat", amount: 425, unit: "MT", color: "from-amber-400 to-yellow-500", icon: Wheat, bgColor: "bg-primary-light", textColor: "text-primary-dark" },
    { name: "Rice", amount: 312, unit: "MT", color: "from-blue-400 to-cyan-500", icon: Wheat, bgColor: "bg-accent-light", textColor: "text-accent" },
  ]

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendingUp size={20} className="text-primary" />
          </motion.div>
          Crop Flow Trends
        </h2>
      </div>
      <div className="card-body">
        {/* Animated Chart Area */}
        <motion.div
          className="w-full h-64 rounded-lg overflow-hidden relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-200"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "url('/land.png'), linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
              backgroundSize: "cover, 200% 200%",
              backgroundBlendMode: "overlay",
            }}
          />

          {/* Animated crop flow lines */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
            animate={{
              x: [0, 50, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
            animate={{
              x: [0, 40, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            animate={{
              x: [-60, 0, -60],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2,
            }}
          />

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Animated Crop Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {crops.map((crop, index) => {
            const Icon = crop.icon
            return (
              <motion.div
                key={crop.name}
                className={`p-3 ${crop.bgColor} rounded-lg cursor-pointer`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Icon size={16} className={crop.textColor} />
                  </motion.div>
                  <p className={`text-xs ${crop.textColor} font-medium`}>{crop.name}</p>
                </div>
                <motion.p
                  className={`text-xl font-bold ${crop.textColor} mt-1`}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {crop.amount} {crop.unit}
                </motion.p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}
