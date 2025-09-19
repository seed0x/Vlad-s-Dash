import React from 'react'
import '../../globals.css'
import Sidebar from '../../components/layout/Sidebar'
import Topbar from '../../components/layout/Topbar'
import MobileNav from '../../components/mobile/MobileNav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1">
        <aside className="hidden md:block w-64 bg-white border-r">
          <div className="p-4 font-bold">Student Dashboard</div>
          <Sidebar />
        </aside>

        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
      <MobileNav />
    </div>
  )
}
