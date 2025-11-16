import { Header } from "@/components/layout/header"
import { SidebarAnimated } from "@/components/layout/sidebar-animated"
import { LogisticsContent } from "@/components/logistics/logistics-content"

export default function LogisticsPage() {
  return (
    <div className="flex">
      <SidebarAnimated />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <LogisticsContent />
        </main>
      </div>
    </div>
  )
}
