"use client"

import { useState } from "react"
import { FileText, Upload, CheckCircle, AlertCircle } from "lucide-react"
import { apiPost } from "@/lib/api"

export function CertificateAddition() {
  const [certificateNumber, setCertificateNumber] = useState("")
  const [issueDate, setIssueDate] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [certificateType, setCertificateType] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('certificateNumber', certificateNumber)
      formData.append('issueDate', issueDate)
      formData.append('expiryDate', expiryDate)
      formData.append('certificateType', certificateType)
      if (uploadedFile) {
        formData.append('certificate', uploadedFile)
      }

      await apiPost("/api/certificates", formData, true)

      setSubmitStatus("success")
      // Reset form
      setCertificateNumber("")
      setIssueDate("")
      setExpiryDate("")
      setCertificateType("")
      setUploadedFile(null)
    } catch (error) {
      console.error("Error submitting certificate:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <FileText size={20} className="text-primary" />
          Government Certificate Addition
        </h2>
        <p className="text-sm text-text-secondary">Add official certificates provided by Government of India</p>
      </div>
      <div className="card-body">
        {submitStatus === "success" && (
          <div className="mb-4 p-3 bg-success/10 border border-success/20 rounded-lg flex items-center gap-2">
            <CheckCircle size={18} className="text-success" />
            <span className="text-sm text-success font-medium">Certificate added successfully!</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 p-3 bg-error/10 border border-error/20 rounded-lg flex items-center gap-2">
            <AlertCircle size={18} className="text-error" />
            <span className="text-sm text-error font-medium">Failed to add certificate. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Certificate Type */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">Certificate Type</label>
            <select
              value={certificateType}
              onChange={(e) => setCertificateType(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:border-primary focus:outline-none bg-surface"
              required
            >
              <option value="">Select certificate type</option>
              <option value="organic">Organic Farming Certificate</option>
              <option value="seed">Seed Certification</option>
              <option value="pesticide">Pesticide Residue Certificate</option>
              <option value="quality">Quality Assurance Certificate</option>
              <option value="export">Export Certificate</option>
              <option value="other">Other Government Certificate</option>
            </select>
          </div>

          {/* Certificate Number */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">Certificate Number</label>
            <input
              type="text"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              placeholder="Enter certificate number"
              className="w-full px-3 py-2 border border-border rounded-lg focus:border-primary focus:outline-none bg-surface"
              required
            />
          </div>

          {/* Issue Date */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">Issue Date</label>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:border-primary focus:outline-none bg-surface"
              required
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">Expiry Date</label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:border-primary focus:outline-none bg-surface"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-text mb-2">Upload Certificate</label>
            <div className="border-2 border-dashed border-border rounded-lg p-4">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
                id="certificate-upload"
                required
              />
              <label
                htmlFor="certificate-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload size={24} className="text-text-secondary" />
                <span className="text-sm text-text-secondary text-center">
                  {uploadedFile ? uploadedFile.name : "Click to upload certificate (PDF, JPG, PNG)"}
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Adding Certificate...
              </>
            ) : (
              <>
                <FileText size={18} />
                Add Certificate
              </>
            )}
          </button>
        </form>

        {/* Certificate Guidelines */}
        <div className="mt-6 p-4 bg-surface-secondary rounded-lg">
          <h4 className="text-sm font-medium text-text mb-2">Certificate Guidelines</h4>
          <ul className="text-xs text-text-secondary space-y-1">
            <li>• Only Government of India issued certificates are accepted</li>
            <li>• Certificate must be valid and not expired</li>
            <li>• Supported formats: PDF, JPG, PNG (max 5MB)</li>
            <li>• Ensure certificate details are clearly visible</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
