"use client"

import { PredictedYield } from "./predicted-yield"
import { MarketDemandTrends } from "./market-demand-trends"
import { FarmerGrowth } from "./farmer-growth"
import { CropDistribution } from "./crop-distribution"
import { RevenueTrends } from "./revenue-trends"
import { SupplyChainHealth } from "./supply-chain-health"
import { Calendar } from "lucide-react"

export function AnalyticsContent() {
  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Analytics & Insights</h1>
          <p className="text-text-secondary mt-1">Market trends, yield predictions, and platform growth metrics</p>
        </div>
        <div className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-2">
          <Calendar size={18} className="text-text-secondary" />
          <select className="bg-transparent text-text-secondary text-sm focus:outline-none">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year to Date</option>
          </select>
        </div>
      </div>

      {/* Top Row - Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <div className="card-body">
            <p className="text-text-secondary text-sm font-medium">Total Crops Supplied</p>
            <p className="text-3xl font-bold text-text mt-2">28,450 MT</p>
            <p className="text-xs text-success mt-2">↑ 18.5% from last month</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-text-secondary text-sm font-medium">Average Price/MT</p>
            <p className="text-3xl font-bold text-text mt-2">₹2,847</p>
            <p className="text-xs text-warning mt-2">↑ 5.2% from last month</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-text-secondary text-sm font-medium">Platform Revenue</p>
            <p className="text-3xl font-bold text-text mt-2">₹81.2M</p>
            <p className="text-xs text-success mt-2">↑ 22.3% from last month</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-text-secondary text-sm font-medium">Active Users</p>
            <p className="text-3xl font-bold text-text mt-2">4,156</p>
            <p className="text-xs text-success mt-2">↑ 12.8% from last month</p>
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PredictedYield />
        <MarketDemandTrends />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FarmerGrowth />
        <CropDistribution />
      </div>

      {/* Charts Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueTrends />
        <SupplyChainHealth />
      </div>
    </div>
  )
}
