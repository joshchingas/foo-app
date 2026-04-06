import './globals.css'

export const metadata = {
  title: 'FOO - Food Supply Chain Intelligence',
  description: 'Trace what happened to your food between farm and shelf',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
