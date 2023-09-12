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
          <footer>
            <div className="page-wrap my-6">
              <p className="serif">ACKNOWLEDGEMENT OF COUNTRY</p>
              <p>
                We have much to learn from those who perhaps better understand
                how to walk softly on this earth. The Good Empire team live and
                work on the lands of the Peramangk and Kaurna people. Their
                connection with the land, their innate culture of sustainability
                is something we open our minds and hearts to embrace and
                practise. We honour their traditions and respect their elders,
                past, present and future. May we all together heal this
                beautiful planet, and find harmony as one global human
                community.
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
