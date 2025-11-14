"use client"

export function FarmerGrowth() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Farmer Participation Growth</h2>
      </div>
      <div className="card-body">
        <div className="w-full h-64 bg-surface-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border mb-4">
          <p className="text-text-secondary">Growth chart visualization</p>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">This Month</p>
              <p className="text-sm font-bold text-success">+284 farmers</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-2">
              <div className="bg-success rounded-full h-2 w-4/5"></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-text">Last Month</p>
              <p className="text-sm font-bold text-info">+156 farmers</p>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-2">
              <div className="bg-info rounded-full h-2 w-2/5"></div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-primary-light rounded-lg">
            <p className="text-sm text-primary-dark font-medium">YTD Growth: 4,287 farmers</p>
            <p className="text-xs text-primary-dark/70 mt-1">82% increase from last year</p>
          </div>
        </div>
      </div>
    </div>
  )
}
