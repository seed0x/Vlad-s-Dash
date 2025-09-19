interface WidgetCardProps {
  title: string
  children: React.ReactNode
  isMobile?: boolean
}

export default function WidgetCard({ title, children, isMobile = false }: WidgetCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border ${isMobile ? 'p-4' : 'p-6'} ${isMobile ? 'min-h-[200px]' : 'min-h-[300px]'} transition-all duration-200 hover:shadow-md`}>
      <h3 className={`font-semibold text-gray-900 mb-4 ${isMobile ? 'text-lg' : 'text-xl'}`}>
        {title}
      </h3>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}

