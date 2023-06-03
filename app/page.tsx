"use client";
import Image from "next/image";
import { Button, Page, Text, Spacer } from "@geist-ui/core";

export default () => (
  <>
    <Spacer h={10} />
    <Text h1 style={{ textAlign: "center", marginBottom: 0 }} font="5em">
      Designer & Developer
    </Text>
    <Text p style={{ textAlign: "center", marginTop: 0 }}>
      Hi 👋 I'm [insert name] blah blah blah
    </Text>
    <Spacer />
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="buttons"
    >
      <Button className="button-hover-effect">About Me</Button>
      <Spacer />
      <Button className="button-hover-effect" type="secondary">
        Portfolio
      </Button>
    </div>
    <style jsx>{`
      .buttons :global(.button-hover-effect:hover) {
        box-shadow: 10px 10px rgb(225, 0, 120);
      }
    `}</style>
  </>
);
