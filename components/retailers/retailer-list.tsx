"use client"

import { MapPin, Phone, Mail, ShoppingCart, TrendingUp } from "lucide-react"

interface RetailerListProps {
  onViewTransactions: (retailer: any) => void
}

const retailerData = [
  {
    id: 1,
    name: "Fresh Mart Delhi",
    location: "New Delhi",
    email: "admin@freshmart.in",
    phone: "+91 98765 43210",
    verified: true,
    totalPurchases: 847,
    purchaseValue: "₹4,235,600",
    totalTransactions: 156,
    escrowBalance: "₹342,500",
    status: "active",
  },
  {
    id: 2,
    name: "Green Valley Retail",
    location: "Mumbai",
    email: "contact@greenvalley.in",
    phone: "+91 87654 32109",
    verified: true,
    totalPurchases: 623,
    purchaseValue: "₹3,118,400",
    totalTransactions: 112,
    escrowBalance: "₹278,900",
    status: "active",
  },
  {
    id: 3,
    name: "Agriculture Plus",
    location: "Bangalore",
    email: "sales@agriplus.com",
    phone: "+91 76543 21098",
    verified: true,
    totalPurchases: 432,
    purchaseValue: "₹2,159,800",
    totalTransactions: 89,
    escrowBalance: "₹185,600",
    status: "active",
  },
  {
    id: 4,
    name: "Quality Foods India",
    location: "Kolkata",
    email: "info@qualityfoods.in",
    phone: "+91 65432 10987",
    verified: false,
    totalPurchases: 156,
    purchaseValue: "₹892,400",
    totalTransactions: 32,
    escrowBalance: "₹125,300",
    status: "pending",
  },
]

export function RetailerList({ onViewTransactions }: RetailerListProps) {
  return (
    <div className="space-y-4">
      {retailerData.map((retailer) => (
        <div key={retailer.id} className="card">
          <div className="card-body">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-text">{retailer.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      retailer.verified ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                    }`}
                  >
                    {retailer.verified ? "Verified" : "Pending"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {retailer.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail size={16} />
                    {retailer.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={16} />
                    {retailer.phone}
                  </span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  retailer.status === "active" ? "bg-success/10 text-success" : "bg-muted text-text-secondary"
                }`}
              >
                {retailer.status}
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-surface-secondary rounded-lg">
              <div>
                <p className="text-xs text-text-secondary font-medium mb-1 flex items-center gap-2">
                  <ShoppingCart size={16} className="text-primary" />
                  Total Purchases
                </p>
                <p className="text-lg font-bold text-text">{retailer.totalPurchases}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium mb-1">Purchase Value</p>
                <p className="text-lg font-bold text-text">{retailer.purchaseValue}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium mb-1">Transactions</p>
                <p className="text-lg font-bold text-text">{retailer.totalTransactions}</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary font-medium mb-1 flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" />
                  Escrow Balance
                </p>
                <p className="text-lg font-bold text-text">{retailer.escrowBalance}</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-4 bg-primary-light rounded-lg mb-4">
              <p className="text-sm text-primary-dark font-medium mb-2">Recent Activity</p>
              <p className="text-xs text-primary-dark">Last purchase: 2 days ago | Next delivery: 3 days</p>
            </div>

            {/* Action Button */}
            <div className="flex justify-end">
              <button onClick={() => onViewTransactions(retailer)} className="btn-primary">
                View Transactions
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
