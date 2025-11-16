"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { User, Bell, Shield, Palette, Globe, Save } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    profile: {
      name: "Admin User",
      email: "admin@agrolink.com",
      role: "Platform Manager"
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      farmerRegistrations: true,
      checkpointAlerts: true,
      stockAlerts: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: "30",
      passwordChangeReminder: true
    },
    appearance: {
      theme: "light",
      language: "en",
      timezone: "IST"
    }
  })

  const handleSave = () => {
    // In a real app, this would save settings to backend
    console.log("Saving settings:", settings)
    alert("Settings saved successfully!")
  }

  const updateSetting = (category: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }))
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
                <h1 className="text-3xl font-bold text-text">Settings</h1>
                <p className="text-text-secondary mt-1">
                  Manage your account preferences and platform settings
                </p>
              </div>
              <button
                onClick={handleSave}
                className="btn-primary flex items-center gap-2"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Profile Settings */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <User size={20} className="text-primary" />
                    <h2 className="text-lg font-semibold text-text">Profile Settings</h2>
                  </div>
                </div>
                <div className="card-body space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Full Name</label>
                    <input
                      type="text"
                      value={settings.profile.name}
                      onChange={(e) => updateSetting('profile', 'name', e.target.value)}
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.profile.email}
                      onChange={(e) => updateSetting('profile', 'email', e.target.value)}
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Role</label>
                    <select
                      value={settings.profile.role}
                      onChange={(e) => updateSetting('profile', 'role', e.target.value)}
                      className="input-field w-full"
                    >
                      <option value="Platform Manager">Platform Manager</option>
                      <option value="Farmer">Farmer</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Checkpoint Officer">Checkpoint Officer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Bell size={20} className="text-primary" />
                    <h2 className="text-lg font-semibold text-text">Notification Preferences</h2>
                  </div>
                </div>
                <div className="card-body space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Email Notifications</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.emailNotifications}
                        onChange={(e) => updateSetting('notifications', 'emailNotifications', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Push Notifications</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.pushNotifications}
                        onChange={(e) => updateSetting('notifications', 'pushNotifications', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">SMS Notifications</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.smsNotifications}
                        onChange={(e) => updateSetting('notifications', 'smsNotifications', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <hr className="border-border" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Farmer Registrations</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.farmerRegistrations}
                        onChange={(e) => updateSetting('notifications', 'farmerRegistrations', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Checkpoint Alerts</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.checkpointAlerts}
                        onChange={(e) => updateSetting('notifications', 'checkpointAlerts', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Stock Alerts</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.stockAlerts}
                        onChange={(e) => updateSetting('notifications', 'stockAlerts', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Shield size={20} className="text-primary" />
                    <h2 className="text-lg font-semibold text-text">Security Settings</h2>
                  </div>
                </div>
                <div className="card-body space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Two-Factor Authentication</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactorAuth}
                        onChange={(e) => updateSetting('security', 'twoFactorAuth', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Session Timeout (minutes)</label>
                    <select
                      value={settings.security.sessionTimeout}
                      onChange={(e) => updateSetting('security', 'sessionTimeout', e.target.value)}
                      className="input-field w-full"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="240">4 hours</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text">Password Change Reminder</span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.security.passwordChangeReminder}
                        onChange={(e) => updateSetting('security', 'passwordChangeReminder', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Appearance Settings */}
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Palette size={20} className="text-primary" />
                    <h2 className="text-lg font-semibold text-text">Appearance & Localization</h2>
                  </div>
                </div>
                <div className="card-body space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Theme</label>
                    <select
                      value={settings.appearance.theme}
                      onChange={(e) => updateSetting('appearance', 'theme', e.target.value)}
                      className="input-field w-full"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="auto">Auto (System)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Language</label>
                    <select
                      value={settings.appearance.language}
                      onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
                      className="input-field w-full"
                    >
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="mr">Marathi</option>
                      <option value="te">Telugu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Timezone</label>
                    <select
                      value={settings.appearance.timezone}
                      onChange={(e) => updateSetting('appearance', 'timezone', e.target.value)}
                      className="input-field w-full"
                    >
                      <option value="IST">IST (UTC+5:30)</option>
                      <option value="UTC">UTC</option>
                      <option value="EST">EST (UTC-5)</option>
                      <option value="PST">PST (UTC-8)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
