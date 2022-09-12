const button = document.querySelector("#app-button");

console.log("A");
button.addEventListener("click", () => {
    // callback every time the button is clicked
    console.log("B");
});
console.log("C");
