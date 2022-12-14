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
  if (request.subtype !== "update") return;

  const state = moderatorService.state.value;
  if (state.talking && request.talking && request.talking !== state.queued) {
    console.log(state, request);
    throw new Error(
      "cant steal the talking stick - you must be in the queue first."
    );
  }
});

// // cant be queued if you're already talking
bus.guard(moderatorService.actions.request.match, ({ payload: request }) => {
  if (request.subtype !== "update") return;

  if (moderatorService.state.value.talking === request.queued) {
    throw new Error("cant queue - you're already talking");
  }
});
