"use client"

import { useState } from "react"
import { RetailerList } from "./retailer-list"
import { TransactionModal } from "./transaction-modal"
import { Plus } from "lucide-react"
import { apiPost } from "@/lib/api"

export function RetailerContent() {
  const [selectedRetailer, setSelectedRetailer] = useState<any>(null)
  const [showTransactions, setShowTransactions] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newRetailer, setNewRetailer] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
  })

  const handleAddRetailer = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await apiPost("/api/retailers/create", newRetailer, true)
      setNewRetailer({ name: "", location: "", email: "", phone: "" })
      setShowAddForm(false)
      // Refresh the list by triggering a re-render
      // window.location.reload() // Commented out to avoid full page reload
    } catch (error) {
      console.error("Error adding retailer:", error)
    }
  }

  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Retailer Management</h1>
          <p className="text-text-secondary mt-1">Verified buyers and transaction oversight</p>
        </div>
        <button
          className="btn-primary flex items-center gap-2"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Add Retailer
        </button>
      </div>

      {/* Add Retailer Form */}
      {showAddForm && (
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-bold text-text">Add New Retailer</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleAddRetailer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text mb-2">Name</label>
                <input
                  type="text"
                  value={newRetailer.name}
                  onChange={(e) => setNewRetailer({ ...newRetailer, name: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Location</label>
                <select
                  value={newRetailer.location}
                  onChange={(e) => setNewRetailer({ ...newRetailer, location: e.target.value })}
                  className="input-field"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Email</label>
                <input
                  type="email"
                  value={newRetailer.email}
                  onChange={(e) => setNewRetailer({ ...newRetailer, email: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">Phone</label>
                <input
                  type="text"
                  value={newRetailer.phone}
                  onChange={(e) => setNewRetailer({ ...newRetailer, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="input-field"
                  required
                />
              </div>
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="btn-primary">Add Retailer</button>
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

      {/* Retailer List */}
      <RetailerList
        onViewTransactions={(retailer) => {
          setSelectedRetailer(retailer)
          setShowTransactions(true)
        }}
      />

      {/* Transaction Modal */}
      {showTransactions && selectedRetailer && (
        <TransactionModal retailer={selectedRetailer} onClose={() => setShowTransactions(false)} />
      )}
    </div>
  )
}
