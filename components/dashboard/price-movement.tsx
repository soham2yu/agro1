"use client"

import { TrendingUp } from "lucide-react"

export function PriceMovement() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" />
          Price Movement
        </h2>
      </div>
      <div className="card-body">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Wheat</p>
              <p className="text-sm font-bold text-success">₹2,450</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-2">
              <div className="bg-success rounded-full h-2 w-3/4"></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Rice</p>
              <p className="text-sm font-bold text-info">₹3,120</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-2">
              <div className="bg-info rounded-full h-2 w-2/3"></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Corn</p>
              <p className="text-sm font-bold text-warning">₹1,890</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-2">
              <div className="bg-warning rounded-full h-2 w-1/2"></div>
            </div>
          </div>
        </div>

        <p className="text-xs text-text-secondary mt-6">Market update: +2.3% from yesterday</p>
      </div>
    </div>
  )
}
