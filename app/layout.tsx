import "./globals.scss";
import { Inter } from "next/font/google";
import PwaActions from "./PwaActions";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <PwaActions />
      </body>
    </html>
  );
}
