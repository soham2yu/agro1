"use client"

import { X, QrCode, ImageIcon, Weight, LinkIcon } from "lucide-react"
import { useState } from "react"

interface VerificationModalProps {
  checkpoint: any
  onClose: () => void
}

export function VerificationModal({ checkpoint, onClose }: VerificationModalProps) {
  const [verified, setVerified] = useState(false)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-surface">
          <h2 className="text-xl font-bold text-text">Verify Batch - {checkpoint.name}</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* QR Code Section */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-2">
              <QrCode size={18} className="text-primary" />
              QR Code Scan
            </h3>
            <div className="w-40 h-40 bg-surface-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <QrCode size={48} className="text-text-secondary/30 mx-auto mb-2" />
                <p className="text-xs text-text-secondary">Batch ID: BAT-2024-#7421</p>
              </div>
            </div>
          </div>

          {/* AI Image Scan */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-2">
              <ImageIcon size={18} className="text-primary" />
              AI Quality Scan Image
            </h3>
            <div className="w-full h-32 bg-surface-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <ImageIcon size={48} className="text-text-secondary/30 mx-auto mb-2" />
                <p className="text-xs text-text-secondary">Quality analysis image</p>
              </div>
            </div>
          </div>

          {/* Weight Log */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-2">
              <Weight size={18} className="text-primary" />
              Weight Log
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
                <span className="text-sm text-text-secondary">Initial Weight</span>
                <span className="font-bold text-text">2,450 kg</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
                <span className="text-sm text-text-secondary">Current Weight</span>
                <span className="font-bold text-text">2,448 kg</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary-light rounded-lg">
                <span className="text-sm font-medium text-primary-dark">Variance</span>
                <span className="font-bold text-primary-dark">-2 kg (0.08%)</span>
              </div>
            </div>
          </div>

          {/* Blockchain Transaction ID */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-3 flex items-center gap-2">
              <LinkIcon size={18} className="text-primary" />
              Blockchain Transaction
            </h3>
            <div className="p-3 bg-surface-secondary rounded-lg font-mono text-xs text-text-secondary break-all">
              0x7a3f9e2c1b8d4f6a9e2c1b8d4f6a9e2c1b8d4f
            </div>
          </div>

          {/* Verification Status */}
          <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-sm text-success font-medium">
              All verifications passed. Batch is authentic and ready for distribution.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-surface-secondary sticky bottom-0">
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
          <button onClick={() => setVerified(true)} className="btn-primary">
            {verified ? "Batch Verified ✓" : "Approve Batch"}
          </button>
        </div>
      </div>
    </div>
  )
}
