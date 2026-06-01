import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SnipLink",
  description: "SnipLink helps you shorten your URLs easily",
  icons: {
    icon: [
      {
        url: "/web-tab-logo.webp",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-yellow-50 text-black`}
      > 
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
