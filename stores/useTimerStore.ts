import create from 'zustand'

type TimerState = {
  running: boolean
  start?: number
  elapsed: number
  startTimer: () => void
  stopTimer: () => void
}

export const useTimerStore = create<TimerState>((set) => ({
  running: false,
  elapsed: 0,
  startTimer: () => set((s) => ({ running: true, start: Date.now() })),
  stopTimer: () => set((s) => ({ running: false, elapsed: s.elapsed + (s.start ? Date.now() - s.start : 0), start: undefined })),
}))
import create from 'zustand'

type TimerState = {
  running: boolean
  start?: number
  elapsed: number
  startTimer: () => void
  stopTimer: () => void
}

export const useTimerStore = create<TimerState>((set) => ({
  running: false,
  elapsed: 0,
  startTimer: () => set((s) => ({ running: true, start: Date.now() })),
  stopTimer: () => set((s) => ({ running: false, elapsed: s.elapsed + (s.start ? Date.now() - s.start : 0), start: undefined })),
}))
