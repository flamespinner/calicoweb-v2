import { Inter } from 'next/font/google'
import './globals.css'
import styles from './styles.css';

// components
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calico County RP',
  description: 'Calico County RP',
}

export default function RootLayout({ children }) { //children prop = whatever is being wrapped. (In this case, the page that is being viewed)
  return (
    <html lang="en">
      <body className={inter.className}>
        <video 
          src={require("/public/background.mp4")}
          autoPlay
          muted
          loop
          className="absolute z-[-10] w-auto min-w-full min-h-full"
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

//this file wraps every webpage. Items that are needed on every webpage should go here, for example, a nav bar or footer. This way
//this isn't just repeated in every page file manually.
