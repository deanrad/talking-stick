import React from "react";
import ReactDOM from "react-dom";
import App from "/src/client/App";

import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "../common/types";

// TODO scope to a component lifetime
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "ws://localhost:8470/",
  { timeout: 100 }
);
socket.on("update", (newState) => console.info("New State: ", newState));
socket.connect();

ReactDOM.render(<App />, document.getElementById("root"));
