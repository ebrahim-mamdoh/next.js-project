import { ThemeProvider } from "@/context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from '@/context/CartContext';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer/>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
