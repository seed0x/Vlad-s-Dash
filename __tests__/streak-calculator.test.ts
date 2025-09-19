import { StreakCalculator } from '../lib/streak-calculator'

describe('StreakCalculator', () => {
  it('calculates current streak correctly', () => {
    const logs = [
      { completionDate: '2024-01-03', habitId: 1 },
      { completionDate: '2024-01-02', habitId: 1 },
      { completionDate: '2024-01-01', habitId: 1 }
    ]
    
    const streak = StreakCalculator.calculateStreaks(logs as any)
    expect(streak.currentStreak).toBe(3)
  })
})

