"use client"

import { Search, Filter } from "lucide-react"

interface FarmerFiltersProps {
  filters: {
    region: string
    crop: string
    status: string
    search: string
  }
  setFilters: (filters: any) => void
}

export function FarmerFilters({ filters, setFilters }: FarmerFiltersProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search farmer name..."
              className="input-field"
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <Search size={18} className="absolute right-3 top-2.5 text-text-secondary" />
          </div>

          {/* Region Filter */}
          <select
            className="input-field"
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
          >
            <option value="">All Regions</option>
            <option value="punjab">Punjab</option>
            <option value="haryana">Haryana</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
          </select>

          {/* Crop Filter */}
          <select
            className="input-field"
            value={filters.crop}
            onChange={(e) => setFilters({ ...filters, crop: e.target.value })}
          >
            <option value="">All Crops</option>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
            <option value="cotton">Cotton</option>
          </select>

          {/* Verification Status Filter */}
          <select
            className="input-field"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">All Status</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>

          {/* Reset Button */}
          <button
            className="btn-secondary flex items-center justify-center gap-2"
            onClick={() => setFilters({ region: "", crop: "", status: "", search: "" })}
          >
            <Filter size={18} />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
