import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Church Website',
  description: 'Welcome to our church community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Church Name</div>
            <div className="space-x-4">
              <a href="/about" className="hover:text-accent">About Us</a>
              <a href="/connect" className="hover:text-accent">Connect</a>
              <a href="/sermons" className="hover:text-accent">Sermons</a>
              <a href="/give" className="hover:text-accent">Give</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-secondary text-white p-8 mt-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p>1215 Church Street</p>
                <p>City, State 12345</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Service Times</h3>
                <p>Sunday School: 9:00 AM</p>
                <p>Corporate Gathering: 10:30 AM</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <a href="/about" className="block hover:text-accent">About Us</a>
                <a href="/connect" className="block hover:text-accent">Connect</a>
                <a href="/sermons" className="block hover:text-accent">Sermons</a>
                <a href="/give" className="block hover:text-accent">Give</a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Church Name. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 