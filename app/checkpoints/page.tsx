import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { CheckpointContent } from "@/components/checkpoints/checkpoint-content"

export default function CheckpointsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <CheckpointContent />
        </main>
      </div>
    </div>
  )
}
