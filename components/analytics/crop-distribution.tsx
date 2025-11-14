"use client"

export function CropDistribution() {
  const crops = [
    { name: "Wheat", percentage: 35, color: "bg-success" },
    { name: "Rice", percentage: 28, color: "bg-info" },
    { name: "Corn", percentage: 22, color: "bg-warning" },
    { name: "Cotton", percentage: 15, color: "bg-accent" },
  ]

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Crop Distribution by Volume</h2>
      </div>
      <div className="card-body">
        {/* Pie Chart Placeholder */}
        <div className="w-48 h-48 rounded-full border-8 border-primary/20 mx-auto mb-6 flex items-center justify-center bg-surface-secondary">
          <div className="text-center">
            <p className="text-3xl font-bold text-text">28.5K</p>
            <p className="text-xs text-text-secondary mt-1">MT Processed</p>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {crops.map((crop) => (
            <div key={crop.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 ${crop.color} rounded-full`}></div>
                <p className="text-sm text-text font-medium">{crop.name}</p>
              </div>
              <p className="text-sm font-bold text-text">{crop.percentage}%</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-surface-secondary rounded-lg">
          <p className="text-xs text-text-secondary text-center">
            Wheat leads volume with 35% share, steady demand across all crops
          </p>
        </div>
      </div>
    </div>
  )
}
