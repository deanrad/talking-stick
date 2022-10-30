import { Action } from "typescript-fsa";
import { ActionCreators } from "@rxfx/service";

export type TRequest = Partial<ModeratorState>;
export type TNext = ModeratorState;

export const initialState: ModeratorState = {
  talking: "",
  queued: "",
};

export const reducerProducer =
  (EVENTS: ActionCreators<TRequest, TNext, Error>) =>
  (state: ModeratorState, e?: Action<any>) => {
    if (!e) return state;
    if (EVENTS.request.match(e)) {
      return {
        ...state,
        ...e.payload,
      };
    }
    return state;
  };
