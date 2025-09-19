import create from 'zustand'

type HabitItem = { id: string; name: string }

type HabitsState = {
  habits: HabitItem[]
  add: (h: HabitItem) => void
  remove: (id: string) => void
}

export const useHabitsStore = create<HabitsState>((set) => ({
  habits: [],
  add: (h) => set((s) => ({ habits: [...s.habits, h] })),
  remove: (id) => set((s) => ({ habits: s.habits.filter(h => h.id !== id) }))
}))

