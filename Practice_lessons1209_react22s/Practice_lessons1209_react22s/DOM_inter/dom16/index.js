const getUserName = () => {
  let userName = document.querySelector("#user-name").value;
  return userName;
};

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getUserName());
});
