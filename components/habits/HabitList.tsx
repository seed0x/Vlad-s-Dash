'use client'

import React from 'react'

export default function HabitList({ items }: { items: { id: string; name: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map(h => (
        <li key={h.id} className="p-3 bg-white border rounded">
          {h.name}
        </li>
      ))}
    </ul>
  )
}
