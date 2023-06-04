"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/core";
import Navigation from "./Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GeistProvider themeType={"dark"}>
          <CssBaseline />
          <Page>
            <Navigation />
            <Page.Content>{children}</Page.Content>
          </Page>
        </GeistProvider>
      </body>
    </html>
  );
}
