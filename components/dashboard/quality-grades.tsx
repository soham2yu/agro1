"use client"

import { Award } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function QualityGrades() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues([58, 32, 10])
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const grades = [
    { label: "Grade A", value: 58, color: "bg-success", textColor: "text-success" },
    { label: "Grade B", value: 32, color: "bg-info", textColor: "text-info" },
    { label: "Grade C", value: 10, color: "bg-warning", textColor: "text-warning" },
  ]

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Award size={20} className="text-primary" />
          </motion.div>
          Quality Grades
        </h2>
      </div>
      <div className="card-body">
        <div className="space-y-3">
          {grades.map((grade, index) => (
            <motion.div
              key={grade.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-text">{grade.label}</p>
                <motion.p
                  className="text-sm font-bold text-text-secondary"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {animatedValues[index]}%
                </motion.p>
              </div>
              <div className="w-full bg-surface-secondary rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`${grade.color} rounded-full h-3`}
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedValues[index]}%` }}
                  transition={{
                    duration: 1.2,
                    delay: 1 + index * 0.2,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 p-3 bg-gradient-to-br from-primary-light to-accent-light rounded-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <p className="text-xs text-primary-dark font-medium">Average Quality Score</p>
            <motion.p
              className="text-2xl font-bold text-primary-dark mt-1"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
            >
              8.4/10
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
