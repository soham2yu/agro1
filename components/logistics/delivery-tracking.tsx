"use client"

import { Truck, MapPin, CheckCircle, AlertTriangle } from "lucide-react"

const deliveryData = [
  {
    id: 1,
    shipmentId: "SHP-2024-0847",
    origin: "Punjab Hub",
    destination: "Delhi Distribution Center",
    status: "in-transit",
    progress: 65,
    driver: "Harjeet Singh",
    vehicle: "MH-01-AB-1234",
    weight: "5,200 kg",
    currentLocation: "Haryana Border",
    estimatedDelivery: "3 hours",
    lastUpdate: "15 mins ago",
  },
  {
    id: 2,
    shipmentId: "SHP-2024-0846",
    origin: "Haryana Hub",
    destination: "Mumbai Distribution Center",
    status: "completed",
    progress: 100,
    driver: "Priya Sharma",
    vehicle: "GJ-02-CD-5678",
    weight: "4,800 kg",
    currentLocation: "Mumbai Hub",
    estimatedDelivery: "Delivered",
    lastUpdate: "2 hours ago",
  },
  {
    id: 3,
    shipmentId: "SHP-2024-0845",
    origin: "Uttar Pradesh Hub",
    destination: "Kolkata Distribution Center",
    status: "warning",
    progress: 45,
    driver: "Rajesh Patel",
    vehicle: "UP-03-EF-9012",
    weight: "3,600 kg",
    currentLocation: "Jharkhand",
    estimatedDelivery: "6 hours",
    lastUpdate: "8 mins ago",
  },
  {
    id: 4,
    shipmentId: "SHP-2024-0844",
    origin: "Maharashtra Hub",
    destination: "Bangalore Distribution Center",
    status: "in-transit",
    progress: 28,
    driver: "Deepak Kulkarni",
    vehicle: "KA-04-GH-3456",
    weight: "2,900 kg",
    currentLocation: "Andhra Pradesh",
    estimatedDelivery: "12 hours",
    lastUpdate: "5 mins ago",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "in-transit":
      return <span className="px-3 py-1 bg-info/10 text-info text-xs font-medium rounded-full">In Transit</span>
    case "completed":
      return <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">Delivered</span>
    case "warning":
      return <span className="px-3 py-1 bg-warning/10 text-warning text-xs font-medium rounded-full">Delayed</span>
    default:
      return null
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "in-transit":
      return <Truck className="text-info" size={20} />
    case "completed":
      return <CheckCircle className="text-success" size={20} />
    case "warning":
      return <AlertTriangle className="text-warning" size={20} />
    default:
      return null
  }
}

export function DeliveryTracking() {
  return (
    <div className="space-y-4">
      {/* Map Placeholder */}
      <div className="card">
        <div className="card-body">
          <div className="w-full h-80 bg-surface-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin size={48} className="text-text-secondary/30 mx-auto mb-2" />
              <p className="text-text-secondary">Live tracking map</p>
              <p className="text-xs text-text-secondary/70 mt-1">Real-time vehicle locations across India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery List */}
      <div className="space-y-4">
        {deliveryData.map((delivery) => (
          <div key={delivery.id} className="card">
            <div className="card-body">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    {getStatusIcon(delivery.status)}
                    <div>
                      <h3 className="text-lg font-bold text-text">{delivery.shipmentId}</h3>
                      <p className="text-sm text-text-secondary">
                        {delivery.origin} → {delivery.destination}
                      </p>
                    </div>
                  </div>
                </div>
                {getStatusBadge(delivery.status)}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Progress</span>
                  <span className="text-sm font-bold text-text">{delivery.progress}%</span>
                </div>
                <div className="w-full bg-surface-secondary rounded-full h-2">
                  <div
                    className={`rounded-full h-2 transition-all ${
                      delivery.status === "warning"
                        ? "bg-warning"
                        : delivery.status === "completed"
                          ? "bg-success"
                          : "bg-info"
                    }`}
                    style={{ width: `${delivery.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="p-3 bg-surface-secondary rounded-lg">
                  <p className="text-xs text-text-secondary font-medium mb-1">Location</p>
                  <p className="text-sm font-medium text-text">{delivery.currentLocation}</p>
                </div>
                <div className="p-3 bg-surface-secondary rounded-lg">
                  <p className="text-xs text-text-secondary font-medium mb-1">Driver</p>
                  <p className="text-sm font-medium text-text">{delivery.driver}</p>
                </div>
                <div className="p-3 bg-surface-secondary rounded-lg">
                  <p className="text-xs text-text-secondary font-medium mb-1">Vehicle</p>
                  <p className="text-sm font-medium text-text">{delivery.vehicle}</p>
                </div>
                <div className="p-3 bg-surface-secondary rounded-lg">
                  <p className="text-xs text-text-secondary font-medium mb-1">Est. Delivery</p>
                  <p className="text-sm font-medium text-text">{delivery.estimatedDelivery}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-text-secondary">
                <span>{delivery.lastUpdate}</span>
                <button className="text-primary hover:text-primary-dark font-medium">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
