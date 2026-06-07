// SHINE – Signal
import { SHINE } from "./shine.core.js";

export function shineSignal(event) {
  SHINE.mark(event || "unbekannt");
}
