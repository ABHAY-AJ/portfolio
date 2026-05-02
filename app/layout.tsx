import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Jangra | AI Media, Backend, and Cloud Systems",
  description:
    "Modern engineering portfolio for Abhay Jangra, focused on production-ready AI media, backend, and cloud systems.",
  icons: {
    icon: "/profile.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
