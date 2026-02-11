window.addEventListener("load", () => {
  document.querySelectorAll("a, img").forEach((el) => {
    el.setAttribute("draggable", "false");
  });
});
