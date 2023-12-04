import { Toaster } from "react-hot-toast";


import './globals.css'
import Navbar from "../../components/Navbar";
import Providers from "../../components/Providers";
import News from "../../components/News";
import Footer from "../../components/Footer";

export const metadata = {
  title: 'OAU Market²',
  description: 'OAU Online Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="aqua">
      <body>
        <Providers>
          <Navbar />
          <News/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}