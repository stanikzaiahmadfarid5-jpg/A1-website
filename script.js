function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.left === "0px") {
    menu.style.left = "-260px";
  } else {
    menu.style.left = "0px";
  }
}

window.onload = () => {
  document.querySelectorAll(".card").forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 120);
  });
};
