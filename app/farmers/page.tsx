import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { FarmerContent } from "@/components/farmers/farmer-content"

export default function FarmersPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <FarmerContent />
        </main>
      </div>
    </div>
  )
}
