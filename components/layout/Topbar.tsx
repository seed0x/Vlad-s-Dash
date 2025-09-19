'use client'

export default function Topbar({ title }: { title?: string }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="font-semibold">{title || 'Dashboard'}</div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 text-sm rounded bg-gray-100">Profile</button>
      </div>
    </header>
  )
}

