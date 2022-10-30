import { bus } from "../../bus";
import { moderatorService } from "./moderator";

// Validation
// runtime keys must be valid
bus.guard(moderatorService.actions.request.match, ({ payload }) => {
  Object.keys(payload).forEach((k) => {
    if (!["talking", "queued", "subtype"].includes(k)) {
      throw new Error(`${k} is not a valid key`);
    }
  });
});

// cant talk over another
bus.guard(moderatorService.actions.request.match, ({ payload: request }) => {
  if (request) {
    if (moderatorService.state.value.talking && request.talking) {
      throw new Error("cant steal the stalking stick");
    }
  }
});
