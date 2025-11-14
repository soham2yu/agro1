"use client"

export function CropFlowChart() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Crop Flow Trends</h2>
      </div>
      <div className="card-body">
        <div className="w-full h-64 bg-surface-secondary rounded-lg flex items-center justify-center border border-dashed border-border">
          <p className="text-text-secondary">Chart placeholder</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-3 bg-primary-light rounded-lg">
            <p className="text-xs text-primary-dark font-medium">Wheat</p>
            <p className="text-xl font-bold text-primary-dark mt-1">425 MT</p>
          </div>
          <div className="p-3 bg-accent-light rounded-lg">
            <p className="text-xs text-accent font-medium">Rice</p>
            <p className="text-xl font-bold text-accent mt-1">312 MT</p>
          </div>
        </div>
      </div>
    </div>
  )
}
