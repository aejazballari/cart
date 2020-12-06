function addElement() {
  const container = document.querySelector(".container");
  const inputBox = document.querySelector(".inputBox");
  let newElement = document.createElement("p");

  newElement.innerText = inputBox.value;
  inputBox.value = "";
  container.appendChild(newElement);
}
function removeElement() {
  const container = document.querySelector(".container");
  const remove = document.querySelector("p");
  container.removeChild(remove);
}
