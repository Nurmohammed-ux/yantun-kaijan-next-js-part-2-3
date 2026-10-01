import { Geist, Geist_Mono, Montserrat } from "next/font/google";
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

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yantun Khaijan",
    template: "%s | Yantun Khaijan",
  },
  description: "Best Restaurant in Dhaka",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col container mx-auto">
        <header className="px-5 pt-8 pb-3 flex justify-between items-center">
          <Logo />
          <div className="space-x-6">
            <Link prefetch={false} href={"/foods"} className="btn">
              Foods
            </Link>
            <Link href={"/reviews"} className="btn">
              Reviews
            </Link>
            <Link href={"/feedback"} className="btn">
              Feedback
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
