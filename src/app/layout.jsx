import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yantun Khaijan",
  description: "Best Restaurant in Dhaka",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col container mx-auto">
        <header className="px-5 pt-8 pb-3 flex justify-between items-center">
          <Logo />
          <div className="space-x-6">
            <Link href={"/foods"} className="btn">
              Food
            </Link>
            <Link href={"/reviews"} className="btn">
              Reviews
            </Link>
          </div>
        </header>

        <main>
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
