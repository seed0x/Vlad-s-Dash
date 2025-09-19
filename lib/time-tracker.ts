export class TimeTracker {
  private startTime: Date = new Date()
  private isVisible: boolean = !document.hidden
  public isIdle: boolean = false
  private lastActivity: Date = new Date()

  constructor(private options: { idleTimeout?: number } = {}) {
    this.setupEventListeners()
    this.startIdleDetection()
  }

  private setupEventListeners() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.onPageHidden()
      } else {
        this.onPageVisible()
      }
    })

    ;['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach(event => {
      document.addEventListener(event, () => this.onUserActivity(), { passive: true })
    })
  }

  private startIdleDetection() {
    setInterval(() => {
      const timeSinceActivity = new Date().getTime() - this.lastActivity.getTime()
      if (timeSinceActivity > (this.options.idleTimeout || 30000) && !this.isIdle) {
        this.isIdle = true
      }
    }, 1000)
  }

  private onUserActivity() {
    this.lastActivity = new Date()
    this.isIdle = false
  }

  private onPageHidden() {
    this.isVisible = false
  }

  private onPageVisible() {
    this.isVisible = true
  }

  getActiveTime(): number {
    const now = new Date()
    let activeTime = now.getTime() - this.startTime.getTime()
    
    if (this.isIdle || !this.isVisible) {
      // Subtract idle/invisible time (simplified)
      activeTime *= 0.8
    }
    
    return Math.max(0, activeTime)
  }
}

// Hook
import { useState, useEffect } from 'react'

export const useTimeTracking = () => {
  const [timeData, setTimeData] = useState({
    totalTime: 0,
    focusedTime: 0,
    isActive: true
  })

  useEffect(() => {
    const tracker = new TimeTracker({ idleTimeout: 30000 })
    const interval = setInterval(() => {
      setTimeData({
        totalTime: tracker.getActiveTime(),
        focusedTime: tracker.getActiveTime() * 0.8,
        isActive: !tracker.isIdle
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return timeData
}
export function formatDuration(ms: number) {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  return `${h}h ${m % 60}m ${s % 60}s`
}

