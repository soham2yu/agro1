"use client"

import { SummaryCards } from "./summary-cards"
import { CropFlowChart } from "./crop-flow-chart"
import { CheckpointMap } from "./checkpoint-map"
import { PriceMovement } from "./price-movement"
import { QualityGrades } from "./quality-grades"
import { CertificateAddition } from "./certificate-addition"
import { motion } from "framer-motion"

export function DashboardContent() {
  return (
    <motion.div
      className="space-y-6 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Summary Cards */}
      <SummaryCards />

      {/* Main Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Map Section */}
        <div className="lg:col-span-2">
          <CheckpointMap />
        </div>

        {/* Quality Grades */}
        <div>
          <QualityGrades />
        </div>
      </motion.div>

      {/* Certificate Addition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <CertificateAddition />
      </motion.div>

      {/* Analytics Row */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <CropFlowChart />
        <PriceMovement />
      </motion.div>
    </motion.div>
  )
}
