import { Header } from "@/components/layout/header"
import { SidebarAnimated } from "@/components/layout/sidebar-animated"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function Dashboard() {
  return (
    <div className="flex">
      <SidebarAnimated />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
