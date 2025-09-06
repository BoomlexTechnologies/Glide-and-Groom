import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Glide & Groom - Spa On Wheels',
  description: 'Mobile pet grooming service bringing top-notch grooming and wellness services right to your doorstep.',
  keywords: 'pet grooming, mobile grooming, dog grooming, cat grooming, spa on wheels',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
