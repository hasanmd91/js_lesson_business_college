// TODO: Clicking on 'Disable start' should disable the 'Start' button and clicking on 'Enable start' should enable the 'Start' button.
const enable = document.querySelector("#btn-enable");
const disable = document.querySelector("#btn-disable");
const start = document.querySelector("#btn-start");

disable.addEventListener("click", () => {
    start.setAttribute("disabled", "disabled");
});

enable.addEventListener("click", () => {
    start.removeAttribute("disabled");
});
