"use client"

import { MapPin, Package, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function CheckpointMap() {
  const checkpoints = [
    { name: "Checkpoint Alpha", region: "Punjab", status: "active", color: "bg-success", icon: Package },
    { name: "Checkpoint Beta", region: "Haryana", status: "processing", color: "bg-warning", icon: AlertCircle },
    { name: "Checkpoint Gamma", region: "Rajasthan", status: "active", color: "bg-success", icon: Package },
    { name: "Checkpoint Delta", region: "Uttar Pradesh", status: "maintenance", color: "bg-info", icon: AlertCircle },
  ]

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <MapPin size={20} className="text-primary" />
          </motion.div>
          Smart Checkpoints Map
        </h2>
      </div>
      <div className="card-body">
        {/* Animated Map Area */}
        <motion.div
          className="w-full h-80 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center border border-dashed border-border relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />

          <div className="text-center relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <MapPin size={48} className="text-primary mx-auto mb-2" />
            </motion.div>
            <motion.p
              className="text-text-secondary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Interactive map visualization
            </motion.p>
            <motion.p
              className="text-xs text-text-secondary/70 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Real-time checkpoint tracking with crop availability
            </motion.p>
          </div>

          {/* Floating checkpoint indicators */}
          {checkpoints.map((checkpoint, index) => (
            <motion.div
              key={checkpoint.name}
              className={`absolute w-4 h-4 rounded-full ${checkpoint.color} border-2 border-white shadow-lg`}
              style={{
                top: `${20 + index * 15}%`,
                left: `${15 + index * 20}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </motion.div>

        {/* Animated Checkpoint List */}
        <motion.div
          className="mt-6 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {checkpoints.map((checkpoint, index) => {
            const Icon = checkpoint.icon
            return (
              <motion.div
                key={checkpoint.name}
                className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg hover:bg-surface transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${checkpoint.color}`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <div>
                    <p className="text-sm font-medium text-text">{checkpoint.name}</p>
                    <p className="text-xs text-text-secondary">Region: {checkpoint.region} | Status: {checkpoint.status}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={18} className={`text-${checkpoint.status === 'active' ? 'success' : checkpoint.status === 'processing' ? 'warning' : 'info'}`} />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}
