'use client'

import Link from 'next/link'

export default function Sidebar() {
  const items = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/habits', label: 'Habits' },
    { href: '/dashboard/tasks', label: 'Tasks' },
    { href: '/dashboard/time-tracking', label: 'Time Tracking' },
    { href: '/dashboard/calendar', label: 'Calendar' },
    { href: '/dashboard/settings', label: 'Settings' }
  ]

  return (
    <nav className="p-4">
      <ul className="space-y-2">
        {items.map(i => (
          <li key={i.href}>
            <Link href={i.href} className="block px-3 py-2 rounded hover:bg-gray-100">{i.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

