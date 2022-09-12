'use strict';

/**
Every time you click on the Add button, the addItemToShoppingList function is called and
it receives the text inside the textbox.
**/

/**
 * @param {string} item
 */
const addItemToShoppingList = item => {

}

// Sample usage - do not modify
const form = document.querySelector("#shopping-form");
const input = document.querySelector("#item-name");
form.addEventListener("submit", event => {
    event.preventDefault();
    // call addItemToShoppingList with what's written inside the textbox
    addItemToShoppingList(input.value);
});
