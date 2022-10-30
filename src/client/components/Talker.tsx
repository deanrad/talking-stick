import * as React from "react";
import { ButtonProps, Buttons } from "./Buttons";
export interface TalkerProps {
  talkerId: string;
}

function stateViewedByTalker(
  state: ModeratorState,
  talkerId: string
): ButtonProps {
  return {
    isTalking: state.talking === talkerId,
    isQueued: state.queued === talkerId,
  };
}

export function Talker(props: TalkerProps) {
  // simulate state for now
  const state = { talking: "", queued: "B" } as ModeratorState;
  const activity = stateViewedByTalker(state, props.talkerId);

  return (
    <div className="screen">
      <section>
        <summary>{props.talkerId}</summary>
        <Buttons {...activity} />
      </section>
    </div>
  );
}
