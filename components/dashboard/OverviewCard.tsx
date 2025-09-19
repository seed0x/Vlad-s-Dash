export default function OverviewCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-gray-600">{children}</div>
    </div>
  )
}
export default function OverviewCard({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-2 text-sm text-gray-600">{children}</div>
    </div>
  )
}

