"use client"

import { TrendingUp } from "lucide-react"

export function PredictedYield() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" />
          Predicted Yield (Next Quarter)
        </h2>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Wheat</p>
              <p className="text-sm font-bold text-text">32,400 MT</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-3">
              <div className="bg-success rounded-full h-3 w-4/5"></div>
            </div>
            <p className="text-xs text-success mt-1">↑ 8.5% above average</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Rice</p>
              <p className="text-sm font-bold text-text">28,600 MT</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-3">
              <div className="bg-info rounded-full h-3 w-3/4"></div>
            </div>
            <p className="text-xs text-info mt-1">↑ 3.2% above average</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Corn</p>
              <p className="text-sm font-bold text-text">24,100 MT</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-3">
              <div className="bg-warning rounded-full h-3 w-2/3"></div>
            </div>
            <p className="text-xs text-warning mt-1">↓ 2.1% below average</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Cotton</p>
              <p className="text-sm font-bold text-text">19,800 MT</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-3">
              <div className="bg-accent rounded-full h-3 w-1/2"></div>
            </div>
            <p className="text-xs text-accent mt-1">↑ 5.8% above average</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary-light rounded-lg">
          <p className="text-sm font-medium text-primary-dark">Total Predicted Yield</p>
          <p className="text-2xl font-bold text-primary-dark mt-1">104,900 MT</p>
        </div>
      </div>
    </div>
  )
}
