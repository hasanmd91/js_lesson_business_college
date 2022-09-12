const getSelectedCurrencies = () => {

}

// Sample usage - do not modify
document.querySelectorAll(".cards .card")
.forEach(card => {
    card.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active");
        console.log(getSelectedCurrencies());
    });
})
