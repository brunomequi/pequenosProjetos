let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.classList.add("positivo");
    } else if (count < 0) {
      value.classList.add("negativo");
    } else {
      value.removeAttribute("class");
    }
    value.textContent = count;
  });
});
