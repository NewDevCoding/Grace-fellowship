import './globals.css'
import type { Metadata } from 'next'
import { MobileNav } from '@/components/ui/mobile-nav'
import Link from 'next/link'
import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grace Fellowship Church',
  description: 'Grace Fellowship Church of Christ',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav className="bg-[#EBF0D2] text-black h-[80px] flex items-center top-0 z-50 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold ml-[30px] hover:text-gray-700">
                <img
                  src="/images/church-icon.png"
                  alt="Church Logo"
                  className="h-[80px] w-[280px] mr-2">
                </img>
              </Link>
              <div className="hidden md:flex space-x-12">
                <a href="/about" className="menu-item text-xl font-semibold ml-[50px] hover:text-gray-400">About Us</a>
                <a href="/connect" className="menu-item text-xl font-semibold ml-[50px] hover:text-gray-400">Connect</a>
                <a href="/sermons" className="menu-item text-xl font-semibold ml-[50px] hover:text-gray-400">Sermons</a>
              </div>
              <MobileNav />
            </div>
          </nav>

          <main className="relative z-0">{children}</main>
          
          <footer className="bg-[#EBF0D2] text-black p-8 mt-8">
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
                  <a href="/about" className="block hover:text-gray-700">About Us</a>
                  <a href="/connect" className="block hover:text-gray-700">Connect</a>
                  <a href="/sermons" className="block hover:text-gray-700">Sermons</a>
                  <a href="/give" className="block hover:text-gray-700">Give</a>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p>&copy; {new Date().getFullYear()} Church Name. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
} 

export default RootLayout