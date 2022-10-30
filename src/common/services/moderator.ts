import { createService } from "@rxfx/service";
import { bus } from "../bus";
import { reducerProducer, TRequest, TNext } from "./moderator.reducer";

// prettier-ignore
export const moderatorService = createService<TRequest, TNext, Error>(
  "moderator",
  bus,
  () => {},
  // @ts-ignore
  reducerProducer
)

Object.assign(window, { moderatorService });
