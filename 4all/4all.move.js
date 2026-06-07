// 4ALL – Move Layer
import { FourAllState } from "./4all.state.js";

export function activateMove(name) {
  FourAllState.set(name);
}

