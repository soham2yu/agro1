"use client"

import { useState } from "react"
import { FarmerTable } from "./farmer-table"
import { FarmerFilters } from "./farmer-filters"
import { Plus } from "lucide-react"

export function FarmerContent() {
  const [filters, setFilters] = useState({
    region: "",
    crop: "",
    status: "",
    search: "",
  })

  return (
    <div className="space-y-6 px-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Farmer Management</h1>
          <p className="text-text-secondary mt-1">Manage and verify registered farmers</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Farmer
        </button>
      </div>

      {/* Filters */}
      <FarmerFilters filters={filters} setFilters={setFilters} />

      {/* Table */}
      <FarmerTable filters={filters} />
    </div>
  )
}
