import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdelrhman Alaa Portfolio",
  description: "Full-Stack Developer | Front-End Developer | Back-End Developer | Mobile Developer | UI/UX Designer | Software Engineer | Web Developer | React Developer | Next.js Developer | JavaScript Developer | TypeScript Developer | Node.js Developer | Express.js Developer | MongoDB Developer | PostgreSQL Developer | MySQL Developer | Firebase Developer | GraphQL Developer | REST API Developer",
    icons: {
    icon: '/images/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-white`}
      >

        {children}
      </body>
    </html>
  );
}
