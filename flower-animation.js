function openMagic() {
  document.body.classList.remove("not-loaded");
}

function resetAnimation() {
  document.body.classList.add("not-loaded");
  document.querySelectorAll(".flower, .flower__leafs, .flower__line, .grow-ans, .growing-grass, .long-g").forEach((element) => {
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation = "";
  });
  window.setTimeout(openMagic, 50);
}

window.addEventListener("load", () => {
  window.setTimeout(openMagic, 1000);
});