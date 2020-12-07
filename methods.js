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
  const element = document.getElementsByTagName("p");
  for (let i = 0; i < element.length; i++) {
    console.log(element[i].classList.add("para"));
    element[i].addEventListener("click", () => {
      console.log(element[i]);
      container.removeChild(element[i]);
    });
  }
}
