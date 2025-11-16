import { Header } from "@/components/layout/header"
import { SidebarAnimated } from "@/components/layout/sidebar-animated"
import { RetailerContent } from "@/components/retailers/retailer-content"

export default function RetailersPage() {
  return (
    <div className="flex">
      <SidebarAnimated />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <RetailerContent />
        </main>
      </div>
    </div>
  )
}
