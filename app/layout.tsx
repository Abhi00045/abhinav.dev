import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "portfolio.me",
  description: "Full stack developer portfolio",

  // 👉 ADD YOUR IMAGE URL HERE
  icons: {
    icon: "https://i.pinimg.com/1200x/57/3d/37/573d37c027e9c74a90baf6f38c2b5a9f.jpg", // paste your image link here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="1c44c067-a3fa-43fd-8760-67e56669e164"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
