import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar"; // Adjust the import path as needed

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "BlogAdmin Pro",
  description: "Content Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <div className="flex min-h-screen">
          <div className="bg-gray-800">
            <Navbar />
          </div>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
