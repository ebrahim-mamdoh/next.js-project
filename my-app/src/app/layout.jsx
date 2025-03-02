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
      <body suppressHydrationWarning> {/* ✅ تجنب تحذيرات الـ Hydration */}
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main> {/* ✅ تحسين SEO باستخدام `<main>` */}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
