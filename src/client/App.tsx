import React from "react";
import { randomId } from "/src/common/utils";
import { Talker } from "./components/Talker";

export default function App() {
  return (
    <>
      <h1>Talking Stick</h1>
      <Talker memberId={randomId()} />
      <Talker memberId={randomId()} />
    </>
  );
}
