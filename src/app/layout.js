// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Menu Maker",
  description: "Créez et personnalisez facilement vos menus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen bg-[#FFF4E8]`}>
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
