"use client"

import { useState } from "react"
import { FarmerTable } from "./farmer-table"
import { FarmerFilters } from "./farmer-filters"
import { Plus } from "lucide-react"
import { apiPost } from "@/lib/api"

export function FarmerContent() {
  const [filters, setFilters] = useState({
    region: "",
    crop: "",
    status: "",
    search: "",
  })

  const [showAddForm, setShowAddForm] = useState(false)
  const [newFarmer, setNewFarmer] = useState({
    name: "",
    region: "",
    crop: "",
    farmSize: "",
    contact: "",
  })

  const handleAddFarmer = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await apiPost("/api/farmers/create", newFarmer, true)
      setNewFarmer({ name: "", region: "", crop: "", farmSize: "", contact: "" })
      setShowAddForm(false)
      // Refresh the table by triggering a re-render
      // window.location.reload() // Commented out to avoid full page reload
      // Instead, we can trigger a re-fetch if we had a refetch function
    } catch (error) {
      console.error("Error adding farmer:", error)
    }
  }

  return (
    <div className="space-y-6 px-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Farmer Management</h1>
          <p className="text-text-secondary mt-1">Manage and verify registered farmers</p>
        </div>
        <button
          className="btn-primary flex items-center gap-2"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Add Farmer
        </button>
      </div>

      {/* Add Farmer Form */}
      {showAddForm && (
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-bold text-text">Add New Farmer</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleAddFarmer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Name</label>
                <input
                  type="text"
                  value={newFarmer.name}
                  onChange={(e) => setNewFarmer({ ...newFarmer, name: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Region</label>
                <select
                  value={newFarmer.region}
                  onChange={(e) => setNewFarmer({ ...newFarmer, region: e.target.value })}
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
              <div>
                <label className="block text-sm font-medium text-text mb-2">Crop Type</label>
                <select
                  value={newFarmer.crop}
                  onChange={(e) => setNewFarmer({ ...newFarmer, crop: e.target.value })}
                  className="input-field"
                  required
                >
                  <option value="">Select Crop</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Rice">Rice</option>
                  <option value="Corn">Corn</option>
                  <option value="Cotton">Cotton</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Farm Size</label>
                <input
                  type="text"
                  value={newFarmer.farmSize}
                  onChange={(e) => setNewFarmer({ ...newFarmer, farmSize: e.target.value })}
                  placeholder="e.g., 10 acres"
                  className="input-field"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text mb-2">Contact</label>
                <input
                  type="text"
                  value={newFarmer.contact}
                  onChange={(e) => setNewFarmer({ ...newFarmer, contact: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="input-field"
                  required
                />
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="btn-primary">Add Farmer</button>
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

      {/* Filters */}
      <FarmerFilters filters={filters} setFilters={setFilters} />

      {/* Table */}
      <FarmerTable filters={filters} />
    </div>
  )
}
