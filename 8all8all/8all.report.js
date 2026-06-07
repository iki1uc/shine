// 8ALL REPORT – einfache Ausgabe
import { EightAll } from "./8all.core.js";

export function eightAllReport() {
  const status = EightAll.check();
  console.log("8ALL REPORT:", status);
  return status;
}

