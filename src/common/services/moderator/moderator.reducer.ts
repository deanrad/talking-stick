import { Action } from "typescript-fsa";
import { ActionCreators, HasSubtype } from "@rxfx/service";
import { ModeratorState } from "../../types";

export type TRequest = Partial<ModeratorState> &
  HasSubtype<"update" | "pass-the-stick">;
export type TNext = ModeratorState;

export const initialState: ModeratorState = {
  talking: "A",
  queued: "B",
};

export const reducerProducer =
  (EVENTS: ActionCreators<TRequest, TNext, Error>) =>
  (state: ModeratorState = initialState, e?: Action<any>) => {
    if (!e) return state;

    if (EVENTS.request.match(e)) {
      if (e.payload.subtype !== "pass-the-stick")
        return {
          ...state,
          ...e.payload,
        };

      if (e.payload.subtype === "pass-the-stick") {
        return {
          talking: state.queued,
          queued: null,
        };
      }
    }

    return state;
  };
