"use client"

export function RevenueTrends() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const revenue = [48, 52, 58, 61, 65, 62, 68, 72, 75, 78, 81, 85]

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text">Annual Revenue Trend</h2>
      </div>
      <div className="card-body">
        <div className="w-full h-64 bg-surface-secondary rounded-lg flex items-end justify-between gap-1 p-4 border-2 border-dashed border-border">
          {revenue.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-primary rounded-t-lg transition-all hover:bg-primary-dark"
              style={{ height: `${(value / Math.max(...revenue)) * 100}%` }}
              title={`${months[index]}: ₹${value}M`}
            ></div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-text-secondary">
          {months.map((month) => (
            <span key={month} className="w-1/12 text-center">
              {month}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="p-3 bg-surface-secondary rounded-lg">
            <p className="text-xs text-text-secondary font-medium">Min Revenue</p>
            <p className="text-lg font-bold text-text">₹48M</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-lg">
            <p className="text-xs text-text-secondary font-medium">Avg Revenue</p>
            <p className="text-lg font-bold text-text">₹65.5M</p>
          </div>
          <div className="p-3 bg-success/10 rounded-lg">
            <p className="text-xs text-success font-medium">Max Revenue</p>
            <p className="text-lg font-bold text-success">₹85M</p>
          </div>
        </div>
      </div>
    </div>
  )
}
