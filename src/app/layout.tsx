import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { BottomNav } from "~/app/_components/bottomnav";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Recipe Shuffler",
  description: "A Recipe Shuffler by Stefan & Kevin",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <BottomNav />
          {children}
          {modal}
          <Toaster />
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
