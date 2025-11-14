"use client"

import { Package, Thermometer } from "lucide-react"

const warehouseData = [
  {
    id: 1,
    name: "Delhi Distribution Hub",
    location: "Delhi",
    capacity: 85,
    temperature: "18.2°C",
    humidity: "45%",
    activeShipments: 142,
    status: "optimal",
  },
  {
    id: 2,
    name: "Mumbai Warehouse",
    location: "Mumbai",
    capacity: 92,
    temperature: "22.5°C",
    humidity: "62%",
    activeShipments: 198,
    status: "warning",
  },
  {
    id: 3,
    name: "Bangalore Storage",
    location: "Bangalore",
    capacity: 68,
    temperature: "20.1°C",
    humidity: "50%",
    activeShipments: 87,
    status: "optimal",
  },
  {
    id: 4,
    name: "Kolkata Depot",
    location: "Kolkata",
    capacity: 76,
    temperature: "23.8°C",
    humidity: "58%",
    activeShipments: 114,
    status: "optimal",
  },
]

function getStatusColor(status: string) {
  return status === "optimal" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
}

export function WarehouseStatus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {warehouseData.map((warehouse) => (
        <div key={warehouse.id} className="card">
          <div className="card-body">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">{warehouse.name}</h3>
                <p className="text-sm text-text-secondary">{warehouse.location}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(warehouse.status)}`}>
                {warehouse.status === "optimal" ? "Optimal" : "Caution"}
              </span>
            </div>

            {/* Capacity */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-secondary flex items-center gap-2">
                  <Package size={16} />
                  Capacity Usage
                </span>
                <span className="text-sm font-bold text-text">{warehouse.capacity}%</span>
              </div>
              <div className="w-full bg-surface-secondary rounded-full h-2">
                <div
                  className={`rounded-full h-2 ${warehouse.capacity > 85 ? "bg-warning" : "bg-success"}`}
                  style={{ width: `${warehouse.capacity}%` }}
                ></div>
              </div>
            </div>

            {/* Environmental Conditions */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-surface-secondary rounded-lg">
                <p className="text-xs text-text-secondary font-medium mb-1 flex items-center gap-2">
                  <Thermometer size={14} />
                  Temperature
                </p>
                <p className="font-bold text-text">{warehouse.temperature}</p>
              </div>
              <div className="p-3 bg-surface-secondary rounded-lg">
                <p className="text-xs text-text-secondary font-medium mb-1">Humidity</p>
                <p className="font-bold text-text">{warehouse.humidity}</p>
              </div>
            </div>

            {/* Active Shipments */}
            <div className="p-3 bg-primary-light rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-primary-dark">Active Shipments</span>
              <span className="text-xl font-bold text-primary-dark">{warehouse.activeShipments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
