import type { Metadata } from "next";
import "./globals.css";
import InputContextProvider from "@/context/InputValueContext";

export const metadata: Metadata = {
  title: "WordQuest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="text-black bg-gray-200">
        <InputContextProvider>{children}</InputContextProvider>
      </body>
    </html>
  );
}