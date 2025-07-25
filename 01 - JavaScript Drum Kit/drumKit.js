// lets start by applying the style upon clicking the A keyboard button

let allKeyDownsFromDrums = [];
window.addEventListener("keydown", (event) => {
  const keyPress = event.key.toUpperCase();
  const drums = document.querySelectorAll("kbd");
  let parentElementOfDrum = null;
  let selectedDrum = null;

  drums.forEach((drum) => {
    if (drum.innerText === keyPress) {
      selectedDrum = drum;
      parentElementOfDrum = selectedDrum.parentElement;
      selectedDrum.parentElement.classList.add("playing");
      allKeyDownsFromDrums = [...allKeyDownsFromDrums, selectedDrum];
    }
  });

  if (selectedDrum) {
    const soundNode = parentElementOfDrum.querySelector("span");

    playSound(soundNode);
  }
});

const playSound = (soundName) => {
  var audio = new Audio(`./sounds/${soundName.innerText}.wav`);
  audio.play();
};

window.addEventListener("keyup", (event) => {
  allKeyDownsFromDrums.forEach((drum) =>
    drum.parentElement.classList.remove("playing")
  );
});
