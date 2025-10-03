import { DurableObject } from "cloudflare:workers";

export interface Env {
  GlobalDurableObject: DurableObjectNamespace;
}

export { GlobalDurableObject } from './durableObject';