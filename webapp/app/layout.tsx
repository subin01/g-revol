import { Suspense } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.scss";
import localFont from "next/font/local";
import Header from "@/components/Header";

const myFont = localFont({
  src: [
    {
      path: "./styles/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./styles/HelveticaNowDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./styles/HelveticaNowDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "G Revolution - Good Empire",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={myFont.className}>
          <Suspense>
            <Header />
          </Suspense>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
