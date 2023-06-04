"use client";
import { Button, Text, Spacer } from "@geist-ui/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
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
        <Button
          className="button-hover-effect"
          type="secondary"
          onClick={() => router.push("/portfolio")}
        >
          Portfolio
        </Button>
      </div>
      <style jsx>{`
        .buttons :global(.button-hover-effect:hover) {
          box-shadow: 10px 10px rgb(225, 0, 120);
        }
      `}</style>
    </div>
  );
}
