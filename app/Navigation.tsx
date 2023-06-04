"use client";
import { Button, Page, Text, Tabs } from "@geist-ui/core";
import { useRouter, usePathname } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      style={{
        boxShadow: "0 0 0 1px #333",
        backdropFilter: "saturate(180%) blur(5px);",
        position: "fixed",
        inset: "0 0 auto 0",
      }}
    >
      <Page.Header center style={{ height: 64 }}>
        <div className="tabs">
          <Tabs
            initialValue={pathname}
            hideDivider
            hideBorder
            onChange={(route) => router.push(route)}
          >
            <Tabs.Item label="Home" value="/" />
            <Tabs.Item label="About" value="about" />
            <Tabs.Item label="Portfolio" value="portfolio" />
            <Tabs.Item label="Contact" value="contact" />
          </Tabs>
        </div>
      </Page.Header>
      <style jsx>
        {`
          .tabs :global(.content) {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
