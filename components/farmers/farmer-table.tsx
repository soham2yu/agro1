"use client"

import { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, XCircle, MoreVertical } from "lucide-react"
import { apiGet } from "@/lib/api"

interface FarmerTableProps {
  filters: {
    region: string
    crop: string
    status: string
    search: string
  }
}

function getVerificationBadge(status: string) {
  switch (status) {
    case "verified":
      return (
        <div className="flex items-center gap-2 text-success">
          <CheckCircle size={18} />
          <span className="text-sm font-medium">Verified</span>
        </div>
      )
    case "pending":
      return (
        <div className="flex items-center gap-2 text-warning">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">Pending</span>
        </div>
      )
    case "rejected":
      return (
        <div className="flex items-center gap-2 text-error">
          <XCircle size={18} />
          <span className="text-sm font-medium">Rejected</span>
        </div>
      )
    default:
      return null
  }
}

export function FarmerTable({ filters }: FarmerTableProps) {
  const [farmerData, setFarmerData] = useState([]);

  useEffect(() => {
    apiGet("/api/retailers/farmers", true).then((data) => {
      setFarmerData(Array.isArray(data) ? data : []);
    });
  }, []);

  const safeFarmers = Array.isArray(farmerData) ? farmerData : [];
  const filteredData = safeFarmers.filter((farmer) => {
    if (filters.search && !farmer.name.toLowerCase().includes(filters.search.toLowerCase())) return false
    if (filters.region && farmer.region.toLowerCase() !== filters.region.toLowerCase()) return false
    if (filters.crop && farmer.crop.toLowerCase() !== filters.crop.toLowerCase()) return false
    if (filters.status && farmer.verification.toLowerCase() !== filters.status.toLowerCase()) return false
    return true
  })

  return (
    <div className="card overflow-hidden">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Registered Farmers ({filteredData.length})</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface-secondary border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Farmer Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Region</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Crop Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Yield Data</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Farm Size</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-text">Contact</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-text">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((farmer, index) => (
              <tr
                key={farmer.id}
                className={`border-b border-border transition-colors hover:bg-surface-secondary ${
                  index % 2 === 0 ? "bg-surface" : "bg-surface-secondary"
                }`}
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-text">{farmer.name}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-text-secondary">{farmer.region}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary-dark text-xs font-medium rounded-full">
                    {farmer.crop}
                  </span>
                </td>
                <td className="px-6 py-4">{getVerificationBadge(farmer.verification)}</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-text">{farmer.yield}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-text-secondary">{farmer.farmSize}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-text-secondary">{farmer.contact}</p>
                </td>
                <td className="px-6 py-4">
                  <button className="text-text-secondary hover:text-text transition-colors mx-auto">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
