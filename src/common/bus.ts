import { Bus } from "@rxfx/bus";
import { Action } from "typescript-fsa";

export const bus = new Bus<Action<any>>();
bus.spy(console.log);
bus.errors.subscribe(console.error);
