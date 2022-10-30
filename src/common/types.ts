export interface ModeratorState {
  talking: string;
  queued: string;
}

export type RequestSubtype = "update" | "pass-the-stick" | "server-update";

export interface ServerToClientEvents {
  update: (newState: ModeratorState) => void;
}

export interface ClientToServerEvents {
  update: (newFields: Partial<ModeratorState>) => void;
  "pass-the-stick": () => void;
}
