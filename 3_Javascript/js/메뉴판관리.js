let rName = document.querySelector("#resNameInput");
const resName = document.querySelector("#resName");


document.querySelector("#resName").addEventListener("click", () => {

  resName.style.display = "none";

  rName.style.display = "block";

  rName.focus();

});

rName.addEventListener("blur", () => {

  if(rName.value.length != 0) {
    resName.innerHTML = rName.value; 
  }

  resName.style.display = "block";

  rName.style.display = "none";

});

document.querySelector("#updateBtn").addEventListener("click", () => {

  document.querySelector(".btn-container").style.display = "none";
  document.querySelector(".b-hidden").style.display = "block";

  document.querySelector(".menu > span").style.display = "none";

  const input = document.createElement("input");

  input.setAttribute("type", "text");

  input.value = document.querySelector(".menu-name").innerText;

  const input2 = document.createElement("input2");

  input2.setAttribute("type", "text");

  input2.value = document.querySelector(".menu-price").innerText;

  document.querySelector(".menu").append(input);
  document.querySelector(".menu").append(input2);
  


});

document.querySelector("#exitBtn").addEventListener("click", () => {

  document.querySelector(".b-hidden").style.display = "none";

  document.querySelector(".btn-container").style.display = "block";

});

