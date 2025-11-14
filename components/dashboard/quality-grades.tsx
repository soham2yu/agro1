"use client"

import { Award } from "lucide-react"

export function QualityGrades() {
  const grades = [
    { label: "Grade A", value: 58, color: "bg-success" },
    { label: "Grade B", value: 32, color: "bg-info" },
    { label: "Grade C", value: 10, color: "bg-warning" },
  ]

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          <Award size={20} className="text-primary" />
          Quality Grades
        </h2>
      </div>
      <div className="card-body">
        <div className="space-y-3">
          {grades.map((grade) => (
            <div key={grade.label}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-text">{grade.label}</p>
                <p className="text-sm font-bold text-text-secondary">{grade.value}%</p>
              </div>
              <div className="w-full bg-surface-secondary rounded-full h-3">
                <div className={`${grade.color} rounded-full h-3`} style={{ width: `${grade.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-primary-light rounded-lg">
          <p className="text-xs text-primary-dark font-medium">Average Quality Score</p>
          <p className="text-2xl font-bold text-primary-dark mt-1">8.4/10</p>
        </div>
      </div>
    </div>
  )
}
