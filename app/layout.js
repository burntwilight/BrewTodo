import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ToastProvider from '@/providers/ToastProvider'
import getUser from '@/actions/getUser'
import { Analytics } from '@vercel/analytics/react'

const font = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'BrewTodo',
  description: 'Morning to do list website',
}

export default async function RootLayout({ children }) {
  const user = await getUser()  

  return (
    <html lang="en" className='h-full '>
      <body className={`${font.className} h-full`}>
        <ToastProvider />
        {/* <UserProvider> */}
          <Navbar user={user} />
            {children}
          <Footer />
          <Analytics />
        {/* </UserProvider> */}
      </body>
    </html>
  )
}