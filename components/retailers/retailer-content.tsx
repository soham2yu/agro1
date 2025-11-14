"use client"

import { useState } from "react"
import { RetailerList } from "./retailer-list"
import { TransactionModal } from "./transaction-modal"
import { Plus } from "lucide-react"

export function RetailerContent() {
  const [selectedRetailer, setSelectedRetailer] = useState<any>(null)
  const [showTransactions, setShowTransactions] = useState(false)

  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text">Retailer Management</h1>
          <p className="text-text-secondary mt-1">Verified buyers and transaction oversight</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Add Retailer
        </button>
      </div>

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
