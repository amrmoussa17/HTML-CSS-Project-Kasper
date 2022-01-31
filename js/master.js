const statsSection = document.querySelector(".stats");
const statsNumber = document.querySelectorAll(".stats .box .number");
let counted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!counted) {
      statsNumber.forEach((stat) => doCount(stat));
    }
    counted = true;
  }
});

function doCount(el) {
  let goal = el.dataset.number;
  let increaseCount = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(increaseCount);
    }
  }, 2000 / goal);
}
