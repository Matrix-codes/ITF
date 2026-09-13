import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "International Technical Foundation (ITF) | Industrial Safety Training Institute",
  description:
    "Government-affiliated industrial safety training institute in Deoria, UP. Certified courses in Work Permit Receiver (WPR), Oil & Gas Safety, Fire Watcher, Flagman, and Hole Watcher. ISO 9001:2015 & MSDE aligned.",
  keywords: [
    "International Technical Foundation",
    "ITF Deoria",
    "Work Permit Receiver course",
    "Oil and Gas Safety training",
    "Fire Watcher certification",
    "HSE institute Uttar Pradesh",
    "Sachin Kumar Singh ADIAS NEBOSH",
    "industrial safety Deoria",
  ],
  authors: [{ name: "International Technical Foundation" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-base text-body font-body antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
