import { Bus } from '@rxfx/bus'
import { Action } from 'typescript-fsa'

export const bus  = new Bus<Action<any>>;
