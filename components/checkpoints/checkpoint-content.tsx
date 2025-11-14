"use client"

import { useState } from "react"
import { CheckpointList } from "./checkpoint-list"
import { VerificationModal } from "./verification-modal"
import { Plus } from "lucide-react"

export function CheckpointContent() {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Checkpoint Management</h1>
          <p className="text-text-secondary mt-1">Monitor real-time IoT data and verify batches</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Checkpoint
        </button>
      </div>

      {/* Checkpoint List */}
      <CheckpointList
        onVerify={(checkpoint) => {
          setSelectedCheckpoint(checkpoint)
          setShowModal(true)
        }}
      />

      {/* Verification Modal */}
      {showModal && selectedCheckpoint && (
        <VerificationModal checkpoint={selectedCheckpoint} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}
