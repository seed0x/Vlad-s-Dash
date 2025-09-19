export async function GET() {
  const encoder = new TextEncoder()
  
  const stream = new ReadableStream({
    async start(controller) {
      const sendEvent = (event: string, data: any) => {
        const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
        controller.enqueue(encoder.encode(payload))
      }

      // Real-time updates
      const interval = setInterval(() => {
        const metrics = {
          studyTime: Math.floor(Math.random() * 180) + 60,
          habitsCompleted: Math.floor(Math.random() * 5) + 1,
          tasksRemaining: Math.floor(Math.random() * 10) + 2,
          timestamp: new Date().toISOString()
        }
        sendEvent('dashboard-update', metrics)
      }, 5000)

      return () => clearInterval(interval)
    }
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
