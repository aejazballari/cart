function addElement() {
  const container = document.querySelector(".container");
  const inputBox = document.querySelector(".inputBox");
  let newElement = document.createElement("div");
  newElement.innerHTML = `<p>${inputBox.value}</p>
                    <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>`;
  container.appendChild(newElement);
  inputBox.value = "";
  const btn = document.querySelectorAll(".delete-btn");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", deleteItem);
  }
}
function removeElement() {
  const container = document.querySelector(".container");
  const remove = document.querySelector(".container div");
  container.removeChild(remove);
}

function deleteItem(e) {
  const container = document.querySelector(".container");
  const selected = e.currentTarget.parentElement;
  container.removeChild(selected);
}
