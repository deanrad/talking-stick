import React from "react";
import { randomId } from "/src/common/utils";
import { Talker } from "./components/Talker";
import { moderatorService } from "../common/services/moderator";
moderatorService.state.subscribe(console.info);

export default function App() {
  return (
    <>
      <h1>Talking Stick</h1>
      <Talker talkerId="A" />
      <Talker talkerId="B" />
    </>
  );
}
