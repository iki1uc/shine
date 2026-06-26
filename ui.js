export function shineUpdate(step) {
  const el = document.getElementById("status");
  if (el) {
    el.textContent = "Aktiv: " + step;
  }
}
