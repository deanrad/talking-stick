import { createService } from "@rxfx/service";
import { bus } from "../bus";

// prettier-ignore
export const moderatorService = createService(
  "moderator",
  bus,
  () => {}
)
