"use client";
import { Button, Page, Text, Tabs } from "@geist-ui/core";

export default function Navigation() {
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
          <Tabs initialValue="html" hideDivider hideBorder>
            <Tabs.Item label="Home" value="home" />
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
