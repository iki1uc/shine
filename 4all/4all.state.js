// 4ALL – State Container
export const FourAllState = {
  current: "NEU",
  history: [],
  set(state) {
    this.history.push(this.current);
    this.current = state;
    console.log("4ALL STATE →", state);
  }
};

