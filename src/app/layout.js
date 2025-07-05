import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

// Configure Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

// Configure Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata = {
  title: "BlogAdmin Pro",
  description: "Content Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-gray-900 text-gray-100">
        <div className="flex min-h-screen">
          {/* Fixed sidebar container */}
          <div className="hidden lg:block fixed inset-y-0 left-0 z-30 w-80">
            <Navbar />
          </div>
          
          {/* Mobile drawer toggle container */}
          <div className="lg:hidden">
            <Navbar />
          </div>
          
          {/* Main content with left margin */}
          <main className="flex-1 lg:ml-80 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}