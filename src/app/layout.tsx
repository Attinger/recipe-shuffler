import "~/styles/globals.css";

import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

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
          <SignedOut>
            <div className="flex justify-center items-center min-h-screen min-w-screen">
              <SignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="layout max-w-screen-xl m-auto">
              <BottomNav />
              {children}
              {modal}
              <Toaster />
              <div id="modal-root" />
            </div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
