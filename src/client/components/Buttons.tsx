import * as React from "react";

export interface ButtonProps {
  isTalking: boolean;
  isQueued: boolean;
}

export function Buttons(props: ButtonProps) {
  const { isTalking, isQueued } = props;
  return (
    <>
      <button className={`btn-talking ${isTalking ? "active" : ""}`}>🎙</button>
      <button className={`btn-queued ${isQueued ? "active" : ""}`}>⏰</button>
    </>
  );
}
