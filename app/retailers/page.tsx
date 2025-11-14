import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { RetailerContent } from "@/components/retailers/retailer-content"

export default function RetailersPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <RetailerContent />
        </main>
      </div>
    </div>
  )
}
