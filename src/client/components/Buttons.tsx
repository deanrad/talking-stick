import * as React from "react";
import { useService } from "@rxfx/react";
import { moderatorService } from "/src/common/services/moderator";

export interface ButtonProps {
  isTalking: boolean;
  isQueued: boolean;
  talkerId: string;
  mayTalk: boolean;
  mayQueue: boolean;
}

export function Buttons(props: ButtonProps) {
  const { isTalking, isQueued, mayTalk, mayQueue, talkerId } = props;
  const { request } = useService(moderatorService);

  const requestTalk = () => {
    if (isTalking) {
      return request({ subtype: "pass-the-stick" });
    }
    request({ subtype: "update", talking: talkerId });
  };

  const requestQueue = () => request({ subtype: "update", queued: talkerId });

  return (
    <>
      <button
        className={`btn-talking ${isTalking ? "active" : ""}`}
        onClick={requestTalk}
        disabled={!mayTalk}
      >
        🎙
      </button>
      <button
        className={`btn-queued ${isQueued ? "active" : ""}`}
        onClick={requestQueue}
        disabled={!mayQueue}
      >
        ⏰
      </button>
    </>
  );
}
