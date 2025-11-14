"use client"

import { MapPin, Package, AlertCircle } from "lucide-react"

export function CheckpointMap() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <MapPin size={20} className="text-primary" />
          Smart Checkpoints Map
        </h2>
      </div>
      <div className="card-body">
        {/* Placeholder Map Area */}
        <div className="w-full h-80 bg-surface-secondary rounded-lg flex items-center justify-center border border-dashed border-border">
          <div className="text-center">
            <MapPin size={48} className="text-text-secondary/30 mx-auto mb-2" />
            <p className="text-text-secondary">Interactive map visualization</p>
            <p className="text-xs text-text-secondary/70 mt-1">Real-time checkpoint tracking with crop availability</p>
          </div>
        </div>

        {/* Checkpoint List */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-text">Checkpoint Alpha</p>
                <p className="text-xs text-text-secondary">Region: Punjab | Status: Active</p>
              </div>
            </div>
            <Package size={18} className="text-success" />
          </div>

          <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-text">Checkpoint Beta</p>
                <p className="text-xs text-text-secondary">Region: Haryana | Status: Processing</p>
              </div>
            </div>
            <AlertCircle size={18} className="text-warning" />
          </div>
        </div>
      </div>
    </div>
  )
}
