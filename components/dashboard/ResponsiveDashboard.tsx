'use client'

import { useState, useEffect } from 'react'

export default function ResponsiveDashboard({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`${isMobile ? 'mobile-layout' : 'desktop-layout'} min-h-screen bg-gray-50`}>
      <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </div>
  )
}

