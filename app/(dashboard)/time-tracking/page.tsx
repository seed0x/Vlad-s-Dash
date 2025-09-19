'use client'

import { useState } from 'react'
import { useTimerStore } from '../../../stores/useTimerStore'

export default function TimeTrackingPage() {
  const { running, elapsed, startTimer, stopTimer } = useTimerStore()

  return (
    <div>
      <h2 className="text-2xl font-semibold">Time Tracking</h2>
      <div className="mt-4">
        <div className="p-4 bg-white rounded inline-block">Elapsed: {Math.floor(elapsed / 1000)}s</div>
      </div>
      <div className="mt-4 space-x-2">
        <button onClick={startTimer} className="px-3 py-2 bg-green-600 text-white rounded">Start</button>
        <button onClick={stopTimer} className="px-3 py-2 bg-red-600 text-white rounded">Stop</button>
      </div>
    </div>
  )
}
