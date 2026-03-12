import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Notts Hack 2026 | Blockchain Hackathon",
  description: "Build. Hack. Decentralize. Join Notts Hack, a blockchain-themed hackathon by CSS at University of Nottingham. April 6-12, 2026.",
  keywords: ["hackathon", "blockchain", "web3", "university of nottingham", "CSS", "coding", "decentralized"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Notts Hack 2026",
    description: "Build. Hack. Decentralize. A blockchain-themed hackathon.",
    type: "website",
    images: [
      {
        url: "/NottsHack23.png",
        width: 1154,
        height: 543,
        alt: "Notts Hack 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notts Hack 2026 | Blockchain Hackathon",
    description: "Build. Hack. Decentralize. A blockchain-themed hackathon.",
    images: ["/NottsHack23.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
