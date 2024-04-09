let card = document.getElementsByClassName("coupon_card");
let element = "";
for (const i of card) {
  i.addEventListener("click", () => {
    element = i.firstElementChild.lastElementChild.classList;
    element.remove("d-none");
    setTimeout(() => {
      element.add("d-none");
    }, 1000);
  });
}
