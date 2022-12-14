import * as React from "react";
import { ButtonProps, Buttons } from "./Buttons";
import { useService } from "@rxfx/react";
import { moderatorService } from "/src/common/services/moderator";
import { ModeratorState } from "/src/common/types";

export interface TalkerProps {
  talkerId: string;
}

function stateViewedByTalker(
  state: ModeratorState,
  talkerId: string
): Pick<ButtonProps, "isTalking" | "isQueued" | "mayTalk" | "mayQueue"> {
  return {
    isTalking: state.talking === talkerId,
    isQueued: state.queued === talkerId,
    mayTalk: !state.talking || state.talking === talkerId,
    mayQueue: !state.queued,
  };
}

export function Talker(props: TalkerProps) {
  const { state } = useService(moderatorService);
  const activity = stateViewedByTalker(state, props.talkerId);

  return (
    <div className="screen">
      <section>
        <summary>{props.talkerId}</summary>
        <Buttons {...activity} talkerId={props.talkerId} />
      </section>
    </div>
  );
}
