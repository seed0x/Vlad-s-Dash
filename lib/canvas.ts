import { getServerSession } from 'next-auth'

export type Course = any
export type Assignment = any
export type Submission = any
export type Announcement = any

export type StudentDashboardData = {
  courses: Course[]
  assignments: Assignment[]
  submissions: Submission[]
  announcements: Announcement[]
}

export class CanvasAPIClient {
  constructor(private baseURL: string, private accessToken: string) {}

  async fetchStudentData(userId: string): Promise<StudentDashboardData> {
    const [courses, assignments, submissions, announcements] = await Promise.all([
      this.getCourses(),
      this.getAssignments(),
      this.getSubmissions(userId),
      this.getAnnouncements()
    ])

    return { courses, assignments, submissions, announcements }
  }

  async getCourses() {
    return this.apiRequest<Course[]>('/api/v1/courses?enrollment_state=active&include[]=total_scores')
  }

  async getAssignments() {
    return this.apiRequest<Assignment[]>('/api/v1/users/self/todo')
  }

  async getSubmissions(userId: string) {
    return this.apiRequest<Submission[]>(`/api/v1/users/${userId}/submissions`) 
  }

  async getAnnouncements() {
    return this.apiRequest<Announcement[]>('/api/v1/accounts/self/announcements')
  }

  private async apiRequest<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Accept': 'application/json+canvas-string-ids'
      }
    })

    if (!response.ok) {
      throw new Error(`Canvas API Error: ${response.status}`)
    }

    return response.json()
  }
}
export async function fetchCanvasCourses(accessToken: string) {
  // placeholder for Canvas LMS API client
  return []
}
