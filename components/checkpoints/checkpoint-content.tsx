"use client"

import { useState } from "react"
import { CheckpointList } from "./checkpoint-list"
import { VerificationModal } from "./verification-modal"
import { Plus } from "lucide-react"
import { apiPost } from "@/lib/api"

export function CheckpointContent() {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newCheckpoint, setNewCheckpoint] = useState({
    name: "",
    region: "",
  })

  const handleAddCheckpoint = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await apiPost("/api/checkpoints/create", newCheckpoint, true)
      setNewCheckpoint({ name: "", region: "" })
      setShowAddForm(false)
      // Refresh the list by triggering a re-render
      // window.location.reload() // Commented out to avoid full page reload
    } catch (error) {
      console.error("Error adding checkpoint:", error)
    }
  }

  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Checkpoint Management</h1>
          <p className="text-text-secondary mt-1">Monitor real-time IoT data and verify batches</p>
        </div>
        <button
          className="btn-primary flex items-center gap-2"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Add Checkpoint
        </button>
      </div>

      {/* Add Checkpoint Form */}
      {showAddForm && (
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-bold text-text">Add New Checkpoint</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleAddCheckpoint} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Name</label>
                <input
                  type="text"
                  value={newCheckpoint.name}
                  onChange={(e) => setNewCheckpoint({ ...newCheckpoint, name: e.target.value })}
                  placeholder="e.g., Checkpoint Alpha"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Region</label>
                <select
                  value={newCheckpoint.region}
                  onChange={(e) => setNewCheckpoint({ ...newCheckpoint, region: e.target.value })}
                  className="input-field"
                  required
                >
                  <option value="">Select Region</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="btn-primary">Add Checkpoint</button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
