import * as React from "react";

export interface ButtonProps {
  isTalking: boolean;
  isQueued: boolean;
  requestTalk: () => void;
  requestQueue: () => void;
}

export function Buttons(props: ButtonProps) {
  const { isTalking, isQueued, requestTalk, requestQueue } = props;
  return (
    <>
      <button
        className={`btn-talking ${isTalking ? "active" : ""}`}
        onClick={requestTalk}
      >
        🎙
      </button>
      <button
        className={`btn-queued ${isQueued ? "active" : ""}`}
        onClick={requestQueue}
      >
        ⏰
      </button>
    </>
  );
}
