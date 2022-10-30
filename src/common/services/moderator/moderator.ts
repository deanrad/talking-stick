import { createService } from "@rxfx/service";
import { bus } from "../../bus";
import { reducerProducer, TRequest, TNext } from "./moderator.reducer";
import { ModeratorState } from "../../types";

// prettier-ignore
export const moderatorService = createService<TRequest, TNext, Error, ModeratorState>(
  "moderator",
  bus,
  () => {},
  // @ts-ignore
  reducerProducer
)

typeof window !== "undefined" && Object.assign(window, { moderatorService });
