import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { AnalyticsContent } from "@/components/analytics/analytics-content"

export default function AnalyticsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <AnalyticsContent />
        </main>
      </div>
    </div>
  )
}
