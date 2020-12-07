function addElement() {
  const container = document.querySelector(".container");
  const inputBox = document.querySelector(".inputBox");
  let newElement = document.createElement("p");
  newElement.innerText = inputBox.value;
  inputBox.value = "";
  container.appendChild(newElement);
  console.log(newElement);
  //   let newElement = document.createElement("div");
  //   newElement.innerHTML = `<p>${inputBox.value}</p>
  //                   <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>`;
  //   container.appendChild(newElement);
  //   inputBox.value = "";
  //   const btn = document.querySelectorAll(".delete-btn");
  //   for (var i = 0; i < btn.length; i++) {
  //     btn[i].addEventListener("click", deleteItem);
  //   }
  //   container.innerHTML = `<div>
  //                 <p>${inputBox.value}</p>
  //                 <button class="delete-btn" onclick="removeItem()"><i class="fas fa-trash-alt"></i></button>
  //             </div>`;
}
function removeElement() {
  const container = document.querySelector(".container");
  //   const inputBox = document.querySelector(".inputBox");
  const remove = document.querySelector(".container div");
  container.removeChild(remove);
}

// function removeItem() {
//   const container = document.querySelector(".container");
//   const btn = document.querySelectorAll(".delete-btn");
//   for (var i = 0; i < btn.length; i++) {
//     const selectParent = btn[i].parentElement;
//     console.log(selectParent);
//     return selectParent;
//   }
//   container.removeChild(selectParent);
// }

function deleteItem(e) {
  const container = document.querySelector(".container");
  const selected = e.currentTarget.parentElement;
  container.removeChild(selected);
}
