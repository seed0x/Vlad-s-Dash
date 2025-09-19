import { useEffect, useRef, useState, useCallback } from 'react'

export const useWebSocket = (url: string) => {
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const webSocketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const ws = new WebSocket(url)
    webSocketRef.current = ws

    ws.onopen = () => setIsConnected(true)
    ws.onclose = () => setIsConnected(false)
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        setMessages(prev => [...prev, message])
      } catch (e) {
        console.warn('Non-JSON message', event.data)
      }
    }

    return () => ws.close()
  }, [url])

  const sendMessage = useCallback((message: any) => {
    if (webSocketRef.current?.readyState === WebSocket.OPEN) {
      webSocketRef.current.send(JSON.stringify(message))
    }
  }, [])

  return { isConnected, messages, sendMessage }
}
