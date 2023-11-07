import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ToastProvider from '@/providers/ToastProvider'

const font = Poppins({ weight: ['400', '700'], subsets: ['latin'] })
// Brew to do? Brew list?
export const metadata = {
  title: 'BrewTodo',
  description: 'Morning to do list website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full '>
      <body className={`${font.className} h-full`}>
        <ToastProvider />
          <Navbar />
            {children}
          <Footer />
      </body>
    </html>
  )
}
