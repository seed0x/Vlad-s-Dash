export type User = {
  id: string
  name?: string
  email?: string
}

export type Habit = {
  id: string
  userId: string
  title: string
  streak?: number
}

export type Task = {
  id: string
  title: string
  dueAt?: string
}

export type TimeEntry = {
  id: string
  userId: string
  startedAt: string
  stoppedAt?: string
}
export type User = {
  id: string
  name?: string
  email?: string
}

export type Habit = {
  id: string
  userId: string
  title: string
  streak?: number
}

export type Task = {
  id: string
  title: string
  dueAt?: string
}

export type TimeEntry = {
  id: string
  userId: string
  startedAt: string
  stoppedAt?: string
}
