"use client"

export function MarketDemandTrends() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Market Demand Trends</h2>
      </div>
      <div className="card-body">
        <div className="w-full h-64 bg-surface-secondary rounded-lg flex items-center justify-center border-2 border-dashed border-border mb-4">
          <p className="text-text-secondary">Demand curve visualization</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-surface-secondary rounded-lg">
            <p className="text-xs text-text-secondary font-medium mb-1">Peak Demand Month</p>
            <p className="text-lg font-bold text-text">December</p>
            <p className="text-xs text-text-secondary mt-1">+45% seasonal increase</p>
          </div>

          <div className="p-3 bg-surface-secondary rounded-lg">
            <p className="text-xs text-text-secondary font-medium mb-1">Avg. Price Elasticity</p>
            <p className="text-lg font-bold text-text">0.82</p>
            <p className="text-xs text-text-secondary mt-1">Moderate sensitivity</p>
          </div>

          <div className="p-3 bg-accent-light rounded-lg">
            <p className="text-xs text-accent font-medium mb-1">Growing Segment</p>
            <p className="text-lg font-bold text-accent">Organic Crops</p>
            <p className="text-xs text-accent mt-1">+28% YoY growth</p>
          </div>

          <div className="p-3 bg-info/10 rounded-lg">
            <p className="text-xs text-info font-medium mb-1">Market Saturation</p>
            <p className="text-lg font-bold text-info">23%</p>
            <p className="text-xs text-info mt-1">Low saturation level</p>
          </div>
        </div>
      </div>
    </div>
  )
}
