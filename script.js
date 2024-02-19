let body = document.querySelector("body");
let title = document.getElementById("title");
let par = document.getElementById("paragraph"); //code by Auni
let btn_titleColor = document.getElementById("titleColor");
let btn_parColor = document.getElementById("parColor");
let btn_changeAll = document.getElementById("changeAll");
let btn_back = document.getElementById("back");
let btn_choose = document.getElementById("choose");

btn_back.addEventListener("click", function background() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = "rgb(" + red + "," + green + "," + blue + ")";
  body.style.backgroundColor = color;
});
//code by Auni
btn_changeAll.addEventListener("click", function all() {
  let redAll = Math.floor(Math.random() * 256);
  let greenAll = Math.floor(Math.random() * 256);
  let blueAll = Math.floor(Math.random() * 256);

  let colorAll = "rgb(" + redAll + "," + greenAll + "," + blueAll + ")";
  title.style.color = colorAll;
  par.style.color = colorAll;
});
btn_parColor.addEventListener("click", function paragraph() {
  let redpar = Math.floor(Math.random() * 256);
  let greenpar = Math.floor(Math.random() * 256); //code  by Auni
  let bluepar = Math.floor(Math.random() * 256);

  let colorpar = "rgb(" + redpar + "," + greenpar + "," + bluepar + ")";
  par.style.color = colorpar;
});
//code by Auni
btn_titleColor.addEventListener("click", function titleColoring() {
  let redTitle = Math.floor(Math.random() * 256);
  let greenTitle = Math.floor(Math.random() * 256);
  let blueTitle = Math.floor(Math.random() * 256);

  let colorTitle = "rgb(" + redTitle + "," + greenTitle + "," + blueTitle + ")";
  title.style.color = colorTitle;
});

btn_choose.addEventListener("click", function chooseButton() {
  let buttonsText = ["Body", "Title", "Paragraph"];
  for (let i = 0; i < buttonsText.length; i++) {
    let button = document.createElement("button");
    button.innerText = buttonsText[i];
    document.body.appendChild(button); //code by  Auni
    button.classList.add("buttons");

    button.addEventListener("click", function () {
      processOption(button.innerText);
    });
    btn_choose.disabled = true;
  }
});

function processOption(option) {
  let colorInput = prompt(
    "Enter an HEX code color. (ex: #(******), * is from a to f and from 1 to 9. )."
  );
  while (!/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i.test(colorInput));
  switch (option) {
    case "Body":
      body.style.backgroundColor = "#" + colorInput;
      break;

    case "Title":
      title.style.color = "#" + colorInput;
      break; //code by Auni

    case "Paragraph":
      paragraph.style.color = "#" + colorInput;
      break;
  }
  btn_choose.disabled = true;
}
