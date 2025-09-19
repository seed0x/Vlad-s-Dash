'use client'

import HabitList from '../../../components/habits/HabitList'

export default function HabitsPage() {
  const demo = [
    { id: '1', name: 'Study Math' },
    { id: '2', name: 'Read 20 pages' }
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold">Habits</h2>
      <p className="text-sm text-gray-600">Track daily and weekly habits.</p>
      <div className="mt-4">
        <HabitList items={demo} />
      </div>
    </div>
  )
}
