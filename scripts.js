"use strict";

const creator = (value) => {
    let listItem = document.createElement("li");
    let listBtn = document.createElement("button");
    listItem.classList.add("listItem");
    listBtn.classList.add("listBtn");
    listBtn.innerHTML = "Delete";
    listItem.innerHTML = value;
    list.append(listItem);
    listItem.append(listBtn);
  };

let userMessage = document.forms.userMessage;
let { textField } = document.forms.userMessage.elements;
let list = document.getElementById("list");
let errorMessage = document.querySelector(".error-message");

userMessage.onsubmit = (event) => {
  event.preventDefault();
  if (textField.value.trim() === "") {
    textField.classList.add("error");
    errorMessage.innerHTML = "empty field,try again";
    return;
  }
  creator(textField.value);
  userMessage.reset();
  textField.classList.remove("success");
};

list.addEventListener("click", (event) => {
  let removeBtn = event.target.className === "listBtn";
  if (removeBtn) {
    event.target.closest(".listItem").remove();
  }
});

textField.oninput = () => {
  if (textField.classList.contains("error")) {
    textField.classList.remove("error");
    errorMessage.innerHTML = "";
  }
  if (textField.value.trim().length > 0) {
    textField.classList.add("success");
  } else {
    textField.classList.remove("success");
  }
};