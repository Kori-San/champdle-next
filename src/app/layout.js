import './globals.css'
import { Inter } from 'next/font/google'
import LogoHeader from "./logoHeader"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Champdle',
  description: 'A Next application about guessing games using the Data Dragon\'s Riot API.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"background " + inter.className}>
        <div>
          <LogoHeader/>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
