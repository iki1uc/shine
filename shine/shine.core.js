// SHINE – Kern
export const SHINE = {
  active: false,
  reason: null,

  mark(reason) {
    this.active = true;
    this.reason = reason;
    console.log("SHINE:", reason);
  },

  clear() {
    this.active = false;
    this.reason = null;
  }
};
