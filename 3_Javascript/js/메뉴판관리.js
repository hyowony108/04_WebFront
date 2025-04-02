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

  

  const input = document.createElement("input");

  input.setAttribute("type", "text");

  input.value = ;

  


});

document.querySelector("#exitBtn").addEventListener("click", () => {

  document.querySelector(".b-hidden").style.display = "none";

  document.querySelector(".btn-container").style.display = "block";

});

