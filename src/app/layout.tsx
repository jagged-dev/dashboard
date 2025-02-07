import "@/src/css/styles.css";
import { inter } from "@/src/ts/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Acme Dashboard",
    description: "The official Next.js Learn Dashboard built with App Router.",
    images: [
      {
        url: "https://dashboard-jagged.vercel.app/opengraph-image.png?opengraph-image.4bef2aca.png",
        width: 1686,
        height: 882,
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
