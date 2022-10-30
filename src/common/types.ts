export interface ModeratorState {
  talking: string;
  queued: string;
}

export interface ServerToClientEvents {
  update: (newState: ModeratorState) => void;
}

export interface ClientToServerEvents {
  update: (newFields: Partial<ModeratorState>) => void;
}
