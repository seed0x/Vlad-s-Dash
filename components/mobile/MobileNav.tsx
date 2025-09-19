'use client'

import Link from 'next/link'

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 md:hidden">
      <div className="flex justify-around">
        <Link href="/dashboard" className="text-sm">Overview</Link>
        <Link href="/dashboard/habits" className="text-sm">Habits</Link>
        <Link href="/dashboard/tasks" className="text-sm">Tasks</Link>
      </div>
    </nav>
  )
}
