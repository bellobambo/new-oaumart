import { Toaster } from "react-hot-toast";


import './globals.css'
import Navbar from "../../components/Navbar";
import Providers from "../../components/Providers";
import News from "../../components/News";

export const metadata = {
  title: 'OAU Market²',
  description: 'OAU Online Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="luxury">
      <body>
        <Providers>
          <Navbar />
          <News/>
          {children}
        </Providers>
      </body>
    </html>
  )
}