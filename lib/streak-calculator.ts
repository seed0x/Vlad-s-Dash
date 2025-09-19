export type HabitLog = { habitId: string; completionDate: string }
export type HabitStreak = {
  habitId: string | number
  currentStreak: number
  longestStreak: number
  lastCompletionDate?: string
}

export class StreakCalculator {
  static calculateStreaks(logs: HabitLog[]): HabitStreak {
    if (logs.length === 0) {
      return { habitId: 0, currentStreak: 0, longestStreak: 0 }
    }

    const sortedLogs = [...logs].sort((a, b) => 
      new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime()
    )

    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    let currentStreak = 0
    let longestStreak = 0

    // Calculate current streak
    const mostRecentLog = new Date(sortedLogs[0].completionDate)
    const todayStr = this.formatDate(today)
    const yesterdayStr = this.formatDate(yesterday)
    const mostRecentStr = this.formatDate(mostRecentLog)

    if (mostRecentStr === todayStr || mostRecentStr === yesterdayStr) {
      currentStreak = this.calculateConsecutiveDays(sortedLogs, 0)
    }

    // Calculate longest streak
    let i = 0
    while (i < sortedLogs.length) {
      const tempStreak = this.calculateConsecutiveDays(sortedLogs, i)
      longestStreak = Math.max(longestStreak, tempStreak)
      i += tempStreak || 1
    }

    return {
      habitId: sortedLogs[0].habitId,
      currentStreak,
      longestStreak,
      lastCompletionDate: sortedLogs[0].completionDate
    }
  }

  private static calculateConsecutiveDays(logs: HabitLog[], startIndex: number): number {
    if (startIndex >= logs.length) return 0

    let streak = 1
    let currentDate = new Date(logs[startIndex].completionDate)

    for (let i = startIndex + 1; i < logs.length; i++) {
      const nextDate = new Date(logs[i].completionDate)
      const expectedDate = new Date(currentDate)
      expectedDate.setDate(expectedDate.getDate() - 1)

      if (this.formatDate(nextDate) === this.formatDate(expectedDate)) {
        streak++
        currentDate = nextDate
      } else {
        break
      }
    }

    return streak
  }

  private static formatDate(date: Date): string {
    return date.toISOString().split('T')[0]
  }
}
