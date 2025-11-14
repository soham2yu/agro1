"use client"

import { CheckCircle } from "lucide-react"

export function SupplyChainHealth() {
  const metrics = [
    { label: "On-Time Deliveries", value: "94%", status: "optimal" },
    { label: "Quality Pass Rate", value: "96%", status: "optimal" },
    { label: "Batch Verification", value: "99%", status: "optimal" },
    { label: "Farmer Satisfaction", value: "87%", status: "optimal" },
  ]

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Supply Chain Health Score</h2>
      </div>
      <div className="card-body">
        {/* Overall Score */}
        <div className="mb-6 p-4 bg-success/10 rounded-lg border border-success/20">
          <div className="flex items-end gap-3">
            <p className="text-4xl font-bold text-success">94</p>
            <p className="text-sm text-success font-medium mb-1">/ 100</p>
          </div>
          <p className="text-sm text-success/80 mt-2">Excellent platform health</p>
        </div>

        {/* Metrics */}
        <div className="space-y-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle size={18} className="text-success" />
                <p className="text-sm text-text font-medium">{metric.label}</p>
              </div>
              <p className="text-sm font-bold text-text">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-primary-light rounded-lg text-center">
          <p className="text-sm font-medium text-primary-dark">
            All metrics above industry standards. Platform performing optimally.
          </p>
        </div>
      </div>
    </div>
  )
}
