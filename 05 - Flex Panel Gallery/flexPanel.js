const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  const allPElements = panel.querySelectorAll("p");
  panel.addEventListener("mouseenter", (e) => {
    allPElements[0].style.transform = "none";
    allPElements[2].style.transform = "none";

    panel.style.flexGrow = "2";

    panel.classList.add("open");
  });

  panel.addEventListener("mouseleave", (e) => {
    allPElements[0].style.transform = "translateY(-100%)";
    allPElements[2].style.transform = "translateY(100%)";
    panel.style.flexGrow = "1";

    panel.classList.remove("open");
  });
});
