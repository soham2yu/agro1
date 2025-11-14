"use client"

import { SummaryCards } from "./summary-cards"
import { CropFlowChart } from "./crop-flow-chart"
import { CheckpointMap } from "./checkpoint-map"
import { PriceMovement } from "./price-movement"
import { QualityGrades } from "./quality-grades"

export function DashboardContent() {
  return (
    <div className="space-y-6 px-6">
      {/* Summary Cards */}
      <SummaryCards />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <CheckpointMap />
        </div>

        {/* Quality Grades */}
        <div>
          <QualityGrades />
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CropFlowChart />
        <PriceMovement />
      </div>
    </div>
  )
}
