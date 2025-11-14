"use client"

import { X, TrendingUp, FileText } from "lucide-react"

interface TransactionModalProps {
  retailer: any
  onClose: () => void
}

const transactionHistory = [
  {
    id: 1,
    date: "2024-11-10",
    amount: "₹45,600",
    crop: "Wheat",
    quantity: "200 kg",
    status: "completed",
    batchId: "BAT-2024-#7421",
  },
  {
    id: 2,
    date: "2024-11-08",
    amount: "₹38,200",
    crop: "Rice",
    quantity: "150 kg",
    status: "completed",
    batchId: "BAT-2024-#7388",
  },
  {
    id: 3,
    date: "2024-11-05",
    amount: "₹52,100",
    crop: "Corn",
    quantity: "250 kg",
    status: "completed",
    batchId: "BAT-2024-#7301",
  },
  {
    id: 4,
    date: "2024-11-02",
    amount: "₹41,300",
    crop: "Wheat",
    quantity: "180 kg",
    status: "completed",
    batchId: "BAT-2024-#7256",
  },
]

export function TransactionModal({ retailer, onClose }: TransactionModalProps) {
  const totalEscrow = Number.parseInt(retailer.escrowBalance.replace(/[₹,]/g, ""))
  const average = Math.round(totalEscrow / transactionHistory.length)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-surface">
          <div>
            <h2 className="text-xl font-bold text-text">{retailer.name}</h2>
            <p className="text-sm text-text-secondary mt-1">Transaction & Escrow Summary</p>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-text">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface-secondary rounded-lg">
              <p className="text-xs text-text-secondary font-medium mb-2">Total Escrow</p>
              <p className="text-2xl font-bold text-text">{retailer.escrowBalance}</p>
            </div>
            <div className="p-4 bg-surface-secondary rounded-lg">
              <p className="text-xs text-text-secondary font-medium mb-2">Total Transactions</p>
              <p className="text-2xl font-bold text-text">{retailer.totalTransactions}</p>
            </div>
            <div className="p-4 bg-primary-light rounded-lg">
              <p className="text-xs text-primary-dark font-medium mb-2">Avg Transaction</p>
              <p className="text-2xl font-bold text-primary-dark">₹{average.toLocaleString()}</p>
            </div>
          </div>

          {/* Transaction History */}
          <div>
            <h3 className="text-sm font-bold text-text mb-4 flex items-center gap-2">
              <FileText size={18} className="text-primary" />
              Recent Transactions
            </h3>
            <div className="space-y-3">
              {transactionHistory.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-4 bg-surface-secondary rounded-lg flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                        <TrendingUp size={18} className="text-primary-dark" />
                      </div>
                      <div>
                        <p className="font-medium text-text">{transaction.crop}</p>
                        <p className="text-xs text-text-secondary">{transaction.batchId}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-text">{transaction.amount}</p>
                    <p className="text-xs text-text-secondary">{transaction.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Escrow Details */}
          <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
            <p className="text-sm text-info font-medium mb-2">Escrow Information</p>
            <p className="text-xs text-info/80">
              Secure escrow account holds funds until batch delivery confirmation. All transactions are protected by
              blockchain verification.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-surface-secondary sticky bottom-0">
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
          <button className="btn-primary">Export Report</button>
        </div>
      </div>
    </div>
  )
}
