import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { LogisticsContent } from "@/components/logistics/logistics-content"

export default function LogisticsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <LogisticsContent />
        </main>
      </div>
    </div>
  )
}
