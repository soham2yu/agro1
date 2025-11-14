"use client"

import { useState } from "react"
import { DeliveryTracking } from "./delivery-tracking"
import { WarehouseStatus } from "./warehouse-status"
import { Plus, MapPin } from "lucide-react"

export function LogisticsContent() {
  const [view, setView] = useState<"tracking" | "warehouse">("tracking")

  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Logistics Management</h1>
          <p className="text-text-secondary mt-1">Real-time delivery tracking and warehouse status</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          New Shipment
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex gap-3">
        <button
          onClick={() => setView("tracking")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === "tracking" ? "bg-primary text-white" : "bg-surface-secondary text-text hover:bg-border"
          }`}
        >
          <MapPin size={18} className="inline mr-2" />
          Live Tracking
        </button>
        <button
          onClick={() => setView("warehouse")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === "warehouse" ? "bg-primary text-white" : "bg-surface-secondary text-text hover:bg-border"
          }`}
        >
          Warehouse Status
        </button>
      </div>

      {/* Content */}
      {view === "tracking" ? <DeliveryTracking /> : <WarehouseStatus />}
    </div>
  )
}
