"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Bell, CheckCircle, AlertCircle, Info, Trash2, Filter } from "lucide-react"

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all")

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "New farmer registration approved",
      message: "Rajesh Kumar from Punjab has been successfully verified and added to the platform.",
      timestamp: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "info",
      title: "Checkpoint verification completed",
      message: "Batch #1234 has passed quality verification at Punjab checkpoint.",
      timestamp: "4 hours ago",
      read: false
    },
    {
      id: 3,
      type: "warning",
      title: "Low stock alert",
      message: "Wheat inventory in warehouse #2 is below 20% capacity.",
      timestamp: "6 hours ago",
      read: true
    },
    {
      id: 4,
      type: "success",
      title: "Retailer order shipped",
      message: "Order #5678 for AgroMart Store has been shipped and is in transit.",
      timestamp: "1 day ago",
      read: true
    },
    {
      id: 5,
      type: "info",
      title: "System maintenance scheduled",
      message: "Platform maintenance is scheduled for tonight from 2:00 AM to 4:00 AM IST.",
      timestamp: "2 days ago",
      read: true
    },
    {
      id: 6,
      type: "warning",
      title: "Quality check failed",
      message: "Batch #5678 failed quality inspection at Maharashtra checkpoint.",
      timestamp: "3 days ago",
      read: true
    }
  ]

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") return true
    if (filter === "unread") return !notification.read
    return notification.type === filter
  })

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-success" />
      case "warning":
        return <AlertCircle size={20} className="text-warning" />
      case "info":
        return <Info size={20} className="text-primary" />
      default:
        return <Bell size={20} className="text-text-secondary" />
    }
  }

  const markAsRead = (id: number) => {
    // In a real app, this would update the notification status via API
    console.log("Marking notification", id, "as read")
  }

  const deleteNotification = (id: number) => {
    // In a real app, this would delete the notification via API
    console.log("Deleting notification", id)
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-20 pb-8">
          <div className="px-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-text">Notifications</h1>
                <p className="text-text-secondary mt-1">
                  Stay updated with platform activities and alerts
                </p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="input-field"
                >
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread Only</option>
                  <option value="success">Success</option>
                  <option value="warning">Warnings</option>
                  <option value="info">Information</option>
                </select>
                <button className="btn-secondary flex items-center gap-2">
                  <Filter size={18} />
                  Filter
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`card border-l-4 ${
                      notification.type === "success"
                        ? "border-l-success"
                        : notification.type === "warning"
                        ? "border-l-warning"
                        : "border-l-primary"
                    } ${!notification.read ? "bg-primary-light/10" : ""}`}
                  >
                    <div className="card-body">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-text">
                                {notification.title}
                              </h3>
                              <p className="text-text-secondary mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-text-secondary mt-2">
                                {notification.timestamp}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="text-sm text-primary hover:text-primary-dark transition-colors"
                                >
                                  Mark as read
                                </button>
                              )}
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="text-text-secondary hover:text-error transition-colors"
                                title="Delete notification"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Bell size={48} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text mb-2">No notifications found</h3>
                  <p className="text-text-secondary">
                    {filter === "all"
                      ? "You don't have any notifications yet."
                      : `No ${filter} notifications found.`
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-2xl font-bold text-text">
                    {notifications.length}
                  </div>
                  <p className="text-sm text-text-secondary">Total</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-2xl font-bold text-success">
                    {notifications.filter(n => n.type === "success").length}
                  </div>
                  <p className="text-sm text-text-secondary">Success</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-2xl font-bold text-warning">
                    {notifications.filter(n => n.type === "warning").length}
                  </div>
                  <p className="text-sm text-text-secondary">Warnings</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-2xl font-bold text-primary">
                    {notifications.filter(n => !n.read).length}
                  </div>
                  <p className="text-sm text-text-secondary">Unread</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
