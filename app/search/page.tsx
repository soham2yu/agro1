"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Search, Users, MapPin, Truck, Store, BarChart3 } from "lucide-react"

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    if (query) {
      // Mock search results - in a real app, this would be an API call
      const mockResults = [
        {
          id: 1,
          type: "farmer",
          title: "Rajesh Kumar",
          subtitle: "Punjab - Wheat Farmer",
          icon: Users,
          description: "Verified farmer with 12 acres of wheat farm"
        },
        {
          id: 2,
          type: "checkpoint",
          title: "Checkpoint #1234",
          subtitle: "Punjab Border",
          icon: MapPin,
          description: "Quality verification checkpoint"
        },
        {
          id: 3,
          type: "retailer",
          title: "AgroMart Store",
          subtitle: "Delhi - Retail Chain",
          icon: Store,
          description: "Large retail chain with multiple locations"
        },
        {
          id: 4,
          type: "logistics",
          title: "FastTrack Logistics",
          subtitle: "Transportation Service",
          icon: Truck,
          description: "Reliable transportation and warehousing"
        }
      ].filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(mockResults)
    }
  }, [query])

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <div className="px-6 space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Search size={24} className="text-text-secondary" />
              <div>
                <h1 className="text-3xl font-bold text-text">Search Results</h1>
                <p className="text-text-secondary mt-1">
                  {results.length} results for "{query}"
                </p>
              </div>
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <div className="grid gap-4">
                {results.map((result) => {
                  const Icon = result.icon
                  return (
                    <div key={result.id} className="card hover:shadow-md transition-shadow">
                      <div className="card-body">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                            <Icon size={24} className="text-primary-dark" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-text">{result.title}</h3>
                            <p className="text-sm text-text-secondary mb-2">{result.subtitle}</p>
                            <p className="text-sm text-text">{result.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text mb-2">No results found</h3>
                <p className="text-text-secondary">
                  Try adjusting your search terms or check for typos.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
