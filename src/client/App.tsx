import React from "react";
import { useWhileMounted } from "@rxfx/react";
import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../common/types";
import { Talker } from "./components/Talker";
import { moderatorService } from "../common/services/moderator";

moderatorService.state.subscribe(console.info);

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

export default function App() {
  useWhileMounted(() => {
    socket = io("ws://localhost:8470/", { timeout: 100 });
    socket.on("update", (newState) => console.info("New State: ", newState));
    socket.connect();

    return () => {
      socket.close();
      console.log("Socket closed!");
    };
  });
  return (
    <>
      <h1 onClick={() => socket.timeout(200).emit("pass-the-stick")}>
        Talking Stick
      </h1>
      <Talker talkerId="A" />
      <Talker talkerId="B" />
    </>
  );
}
