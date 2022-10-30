import * as React from "react";
import { ButtonProps, Buttons } from "./Buttons";
import { useService } from "@rxfx/react";
import { moderatorService } from "/src/common/services/moderator";

export interface TalkerProps {
  talkerId: string;
}

function stateViewedByTalker(
  state: ModeratorState,
  talkerId: string
): Pick<ButtonProps, "isTalking" | "isQueued"> {
  return {
    isTalking: state.talking === talkerId,
    isQueued: state.queued === talkerId,
  };
}

export function Talker(props: TalkerProps) {
  const { state, request } = useService(moderatorService);
  const activity = stateViewedByTalker(state, props.talkerId);

  const handlers: Pick<ButtonProps, "requestTalk" | "requestQueue"> = {
    requestTalk: () => request({ subtype: "update", talking: props.talkerId }),
    requestQueue: () => request({ subtype: "update", queued: props.talkerId }),
  };

  return (
    <div className="screen">
      <section>
        <summary>{props.talkerId}</summary>
        <Buttons {...activity} {...handlers} />
      </section>
    </div>
  );
}
