'use client'

export default function TasksPage() {
  const demo = [
    { id: 't1', title: 'Finish Homework' },
    { id: 't2', title: 'Group Project Meeting' }
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold">Tasks</h2>
      <div className="mt-4 space-y-2">
        {demo.map(t => (
          <div key={t.id} className="p-3 bg-white border rounded">{t.title}</div>
        ))}
      </div>
    </div>
  )
}
