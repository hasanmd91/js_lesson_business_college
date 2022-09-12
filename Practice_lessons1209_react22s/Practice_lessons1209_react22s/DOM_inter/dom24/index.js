// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.querySelector("#app-sidebar").classList.toggle("show");
});
