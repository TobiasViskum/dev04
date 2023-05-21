import "./globals.scss";
import { Inter } from "next/font/google";
import PwaActions from "./PwaActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Made by Tobias T. Viskum",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <PwaActions />
      </body>
    </html>
  );
}
