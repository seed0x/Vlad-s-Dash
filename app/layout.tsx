import './globals.css'

export const metadata = {
  title: 'Student Dashboard',
  description: 'Productivity dashboard for students',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
