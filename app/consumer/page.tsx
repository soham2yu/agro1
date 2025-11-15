"use client"

import { useState } from "react"
import { QrCode, Scan, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ConsumerPage() {
  const [scanning, setScanning] = useState(false)
  const [scanResult, setScanResult] = useState<any>(null)
  const [error, setError] = useState<string>("")

  const handleScan = () => {
    setScanning(true)
    setError("")
    setScanResult(null)

    // Simulate QR scan process
    setTimeout(() => {
      // Mock successful scan result
      setScanResult({
        batchId: "BAT-2024-#7421",
        cropType: "Organic Wheat",
        farmer: "Green Valley Farms",
        harvestDate: "2024-01-15",
        quality: "Premium Grade A",
        blockchainTx: "0x7a3f9e2c1b8d4f6a9e2c1b8d4f6a9e2c1b8d4f",
        checkpoints: [
          { name: "Harvest Checkpoint", status: "verified", date: "2024-01-15" },
          { name: "Quality Control", status: "verified", date: "2024-01-16" },
          { name: "Storage Facility", status: "verified", date: "2024-01-17" },
        ],
        nutritionalInfo: {
          protein: "12.5g",
          fiber: "3.2g",
          calories: "340 kcal",
          vitamins: ["B1", "B3", "E"]
        }
      })
      setScanning(false)
    }, 2000)
  }

  const resetScan = () => {
    setScanResult(null)
    setError("")
  }

  return (
    <div className="space-y-6 px-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-text mb-2">QR Code Scanner</h1>
        <p className="text-text-secondary">Scan product QR codes to access detailed crop information and traceability</p>
      </div>

      {/* Scanner Section */}
      <div className="max-w-md mx-auto">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-bold text-text flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              Product Scanner
            </h2>
          </div>
          <div className="card-body">
            {!scanResult ? (
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-surface-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  {scanning ? (
                    <div className="text-center">
                      <Scan className="w-12 h-12 text-primary animate-pulse mx-auto mb-2" />
                      <p className="text-sm text-text-secondary">Scanning...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <QrCode className="w-12 h-12 text-text-secondary/30 mx-auto mb-2" />
                      <p className="text-xs text-text-secondary">Position QR code here</p>
                    </div>
                  )}
                </div>

                {error && (
                  <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
                    <p className="text-sm text-error flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      {error}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleScan}
                  disabled={scanning}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all font-medium disabled:opacity-50"
                >
                  {scanning ? "Scanning..." : "Start Scan"}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Success Message */}
                <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                  <p className="text-sm text-success flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    QR Code scanned successfully!
                  </p>
                </div>

                {/* Product Information */}
                <div className="space-y-3">
                  <div className="p-3 bg-surface-secondary rounded-lg">
                    <h3 className="font-semibold text-text mb-2">Product Details</h3>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-text-secondary">Batch ID:</span> {scanResult.batchId}</p>
                      <p><span className="text-text-secondary">Crop Type:</span> {scanResult.cropType}</p>
                      <p><span className="text-text-secondary">Farmer:</span> {scanResult.farmer}</p>
                      <p><span className="text-text-secondary">Harvest Date:</span> {scanResult.harvestDate}</p>
                      <p><span className="text-text-secondary">Quality:</span> {scanResult.quality}</p>
                    </div>
                  </div>

                  {/* Checkpoints */}
                  <div className="p-3 bg-surface-secondary rounded-lg">
                    <h3 className="font-semibold text-text mb-2">Supply Chain Checkpoints</h3>
                    <div className="space-y-2">
                      {scanResult.checkpoints.map((checkpoint: any, index: number) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">{checkpoint.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-text-secondary">{checkpoint.date}</span>
                            <CheckCircle className="w-4 h-4 text-success" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nutritional Info */}
                  <div className="p-3 bg-surface-secondary rounded-lg">
                    <h3 className="font-semibold text-text mb-2">Nutritional Information</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p><span className="text-text-secondary">Protein:</span> {scanResult.nutritionalInfo.protein}</p>
                      <p><span className="text-text-secondary">Fiber:</span> {scanResult.nutritionalInfo.fiber}</p>
                      <p><span className="text-text-secondary">Calories:</span> {scanResult.nutritionalInfo.calories}</p>
                      <p><span className="text-text-secondary">Vitamins:</span> {scanResult.nutritionalInfo.vitamins.join(", ")}</p>
                    </div>
                  </div>

                  {/* Blockchain Transaction */}
                  <div className="p-3 bg-surface-secondary rounded-lg">
                    <h3 className="font-semibold text-text mb-2">Blockchain Verification</h3>
                    <p className="font-mono text-xs text-text-secondary break-all">{scanResult.blockchainTx}</p>
                  </div>
                </div>

                <button
                  onClick={resetScan}
                  className="w-full py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-all font-medium"
                >
                  Scan Another Product
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
