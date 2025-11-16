"use client"

import { useState } from "react"
import { QrCode, Scan, CheckCircle, XCircle } from "lucide-react"
import { Header } from "@/components/layout/header"
import { SidebarAnimated } from "@/components/layout/sidebar-animated"

// ----------------------
// Types
// ----------------------
type Checkpoint = {
  name: string
  status: string
  date: string
}

type ScanResultType = {
  batchId: string
  cropType: string
  farmer: string
  harvestDate: string
  quality: string
  blockchainTx: string
  checkpoints: Checkpoint[]
  nutritionalInfo: {
    protein: string
    fiber: string
    calories: string
    vitamins: string[]
  }
}

export default function ConsumerPage() {
  const [scanning, setScanning] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResultType | null>(null)
  const [error, setError] = useState<string>("")

  const handleScan = () => {
    setScanning(true)
    setError("")
    setScanResult(null)

    setTimeout(() => {
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
    <div className="flex">
      <SidebarAnimated />

      <div className="flex-1 transition-all duration-300 ease-in-out ml-16 md:ml-64">
        <Header />

        {/* MAIN CONTENT */}
        <main className="pt-20 pb-8">
          <div className="space-y-6 px-6">

            {/* PAGE HEADER */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">QR Code Scanner</h1>
              <p className="text-text-secondary">
                Scan product QR codes to access detailed crop information and traceability
              </p>
            </div>

            {/* SCANNER */}
            <div className="max-w-md mx-auto">
              <div className="card">
                <div className="card-header">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <QrCode className="w-5 h-5" />
                    Product Scanner
                  </h2>
                </div>

                <div className="card-body">

                  {/* If NOT scanned */}
                  {!scanResult ? (
                    <div className="text-center space-y-4">
                      <div className="w-48 h-48 mx-auto bg-surface-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                        {scanning ? (
                          <div>
                            <Scan className="w-12 h-12 animate-pulse mx-auto mb-2" />
                            <p className="text-sm text-text-secondary">Scanning...</p>
                          </div>
                        ) : (
                          <div>
                            <QrCode className="w-12 h-12 text-text-secondary/30 mx-auto mb-2" />
                            <p className="text-xs text-text-secondary">Position QR code here</p>
                          </div>
                        )}
                      </div>

                      {error && (
                        <div className="p-3 bg-error/10 border border-error/20 rounded-lg">
                          <p className="text-sm flex items-center gap-2 text-error">
                            <XCircle className="w-4 h-4" />
                            {error}
                          </p>
                        </div>
                      )}

                      <button
                        onClick={handleScan}
                        disabled={scanning}
                        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        {scanning ? "Scanning..." : "Start Scan"}
                      </button>
                    </div>
                  ) : (
                    /* If scanned successfully */
                    <div className="space-y-4">

                      <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                        <p className="text-sm flex items-center gap-2 text-success">
                          <CheckCircle className="w-4 h-4" />
                          QR Code scanned successfully!
                        </p>
                      </div>

                      {/* Product Info */}
                      <div className="space-y-3">

                        <div className="p-3 bg-surface-secondary rounded-lg">
                          <h3 className="font-semibold mb-2">Product Details</h3>
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
                          <h3 className="font-semibold mb-2">Supply Chain Checkpoints</h3>
                          <div className="space-y-2">
                            {scanResult.checkpoints?.map((cp, idx) => (
                              <div key={idx} className="flex items-center justify-between text-sm">
                                <span className="text-text-secondary">{cp.name}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-text-secondary">{cp.date}</span>
                                  <CheckCircle className="w-4 h-4 text-success" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Nutritional Info */}
                        <div className="p-3 bg-surface-secondary rounded-lg">
                          <h3 className="font-semibold mb-2">Nutritional Information</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <p><span className="text-text-secondary">Protein:</span> {scanResult.nutritionalInfo.protein}</p>
                            <p><span className="text-text-secondary">Fiber:</span> {scanResult.nutritionalInfo.fiber}</p>
                            <p><span className="text-text-secondary">Calories:</span> {scanResult.nutritionalInfo.calories}</p>
                            <p><span className="text-text-secondary">Vitamins:</span> {scanResult.nutritionalInfo.vitamins.join(", ")}</p>
                          </div>
                        </div>

                        {/* Blockchain Hash */}
                        <div className="p-3 bg-surface-secondary rounded-lg">
                          <h3 className="font-semibold mb-2">Blockchain Verification</h3>
                          <p className="font-mono text-xs text-text-secondary break-all">
                            {scanResult.blockchainTx}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={resetScan}
                        className="w-full py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-all"
                      >
                        Scan Another Product
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
