const width = document.querySelector("#width");

const height = document.getElementById("height");

const fontSize = document.getElementById("fontSize");

const fontCo = document.getElementById("fontCo");

const backColor = document.getElementById("backColor");

const input = document.getElementById("input");

const object = document.querySelector(".object");

const text = document.querySelector(".text");

const start = document.querySelector(".start");

const nomal = document.querySelector("#nomal");
const bolder = document.querySelector("#bold");

const rows = document.getElementsByName("rows")

start.addEventListener("click", () => {
  console.log(nomal);

  object.style.backgroundColor = backColor.value;

  object.style.width = width.value + "px";
  object.style.height = height.value + "px";

  text.style.fontSize = fontSize.value + "px";
  text.style.color = fontCo.value;
  text.innerText = input.value;
  
  if(nomal.checked){
    text.style.fontWeight = "normal" ;
  }

  if(bolder.checked){
    text.style.fontWeight = "bold" ;
  }

  if(document.querySelector("#left").checked){
    object.style.justifyContent = "flex-start";
  }

  if(document.querySelector("#center").checked){
    object.style.justifyContent = "center";
  }

});

