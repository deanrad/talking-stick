import * as React from "react";

export interface TalkerProps {
  memberId: string;
}

export function Talker(props: TalkerProps) {
  return (
    <div className="screen">
      <section>
        <summary>{props.memberId}</summary>
        <button>🎙</button>
        <button>⏰</button>
      </section>
    </div>
  );
}
