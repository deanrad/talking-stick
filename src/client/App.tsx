import React, { useState } from "react";
import { useWhileMounted } from "@rxfx/react";
import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../common/types";
import { Talker } from "./components/Talker";
import { moderatorService } from "../common/services/moderator";
import { bus } from "../common/bus";
import { TRequest } from "../common/services/moderator/moderator.reducer";

moderatorService.state.subscribe(console.info);

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

const forwardEvent = ({ payload }: { payload: TRequest }) => {
  const { subtype, ...updateFields } = payload;
  if (subtype === "pass-the-stick") {
    socket.timeout(200).emit("pass-the-stick");
  }
  if (subtype === "update") {
    socket.timeout(200).emit("update", updateFields);
  }
};

export default function App() {
  const [clientId, setClientId] = useState("");

  useWhileMounted(() => {
    socket = io("ws://localhost:8470/", { timeout: 100 });
    socket.on("update", (newState) => {
      try {
        moderatorService.request({ subtype: "server-update", ...newState });
      } catch (e) {
        console.error(e);
      }
    });
    socket.on("identify", setClientId);
    socket.connect();

    const forwarder = bus
      .query(moderatorService.actions.request.match)
      .subscribe(forwardEvent);

    return () => {
      socket.close();
      console.log("Socket closed!");
      forwarder.unsubscribe();
    };
  });

  return (
    <>
      <h1>Talking Stick</h1>
      <Talker talkerId={clientId} />
    </>
  );
}
