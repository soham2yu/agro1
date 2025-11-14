"use client"

import { Thermometer, Scale, Activity, AlertCircle } from "lucide-react"

interface CheckpointListProps {
  onVerify: (checkpoint: any) => void
}

const checkpointData = [
  {
    id: 1,
    name: "Checkpoint Alpha",
    region: "Punjab",
    status: "active",
    temperature: "22.5°C",
    weight: "2,450 kg",
    qualityReading: "8.7/10",
    batchesProcessed: 147,
    lastVerified: "2 hours ago",
  },
  {
    id: 2,
    name: "Checkpoint Beta",
    region: "Haryana",
    status: "processing",
    temperature: "24.1°C",
    weight: "1,890 kg",
    qualityReading: "8.2/10",
    batchesProcessed: 89,
    lastVerified: "15 minutes ago",
  },
  {
    id: 3,
    name: "Checkpoint Gamma",
    region: "Uttar Pradesh",
    status: "active",
    temperature: "21.8°C",
    weight: "3,120 kg",
    qualityReading: "9.1/10",
    batchesProcessed: 203,
    lastVerified: "1 hour ago",
  },
  {
    id: 4,
    name: "Checkpoint Delta",
    region: "Maharashtra",
    status: "warning",
    temperature: "28.3°C",
    weight: "1,650 kg",
    qualityReading: "7.4/10",
    batchesProcessed: 56,
    lastVerified: "45 minutes ago",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "active":
      return <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">Active</span>
    case "processing":
      return <span className="px-3 py-1 bg-info/10 text-info text-xs font-medium rounded-full">Processing</span>
    case "warning":
      return <span className="px-3 py-1 bg-warning/10 text-warning text-xs font-medium rounded-full">Warning</span>
    default:
      return null
  }
}

export function CheckpointList({ onVerify }: CheckpointListProps) {
  return (
    <div className="grid gap-6">
      {checkpointData.map((checkpoint) => (
        <div key={checkpoint.id} className="card">
          <div className="card-body">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">{checkpoint.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{checkpoint.region}</p>
              </div>
              <div className="flex items-center gap-3">{getStatusBadge(checkpoint.status)}</div>
            </div>

            {/* IoT Data Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="p-3 bg-surface-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Thermometer size={16} className="text-info" />
                  <p className="text-xs text-text-secondary font-medium">Temperature</p>
                </div>
                <p className="text-lg font-bold text-text">{checkpoint.temperature}</p>
              </div>

              <div className="p-3 bg-surface-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Scale size={16} className="text-primary" />
                  <p className="text-xs text-text-secondary font-medium">Weight</p>
                </div>
                <p className="text-lg font-bold text-text">{checkpoint.weight}</p>
              </div>

              <div className="p-3 bg-surface-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Activity size={16} className="text-success" />
                  <p className="text-xs text-text-secondary font-medium">Quality</p>
                </div>
                <p className="text-lg font-bold text-text">{checkpoint.qualityReading}</p>
              </div>

              <div className="p-3 bg-surface-secondary rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <AlertCircle size={16} className="text-warning" />
                  <p className="text-xs text-text-secondary font-medium">Batches</p>
                </div>
                <p className="text-lg font-bold text-text">{checkpoint.batchesProcessed}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <p className="text-xs text-text-secondary">Last verified: {checkpoint.lastVerified}</p>
              <button onClick={() => onVerify(checkpoint)} className="btn-primary text-sm">
                Verify Batch
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
