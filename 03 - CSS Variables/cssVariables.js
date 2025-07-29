const spacingInput = document.getElementById("spacing");
const blurInput = document.getElementById("blur");
const colour = document.getElementById("base");
const image = document.querySelector("image");
const root = document.querySelector(":root");

spacingInput.addEventListener("input", (event) => {
  root.style.setProperty("--spacing", `${event.target.value}px`);
});

blurInput.addEventListener("input", (event) => {
  root.style.setProperty("--blur", `${event.target.value}px`);
});

colour.addEventListener("input", (event) => {
  root.style.setProperty("--base", `${event.target.value}`);
});
