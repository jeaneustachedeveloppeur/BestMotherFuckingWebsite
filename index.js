const contrastBtn = document.getElementById("contrast-btn");
const invertBtn = document.getElementById("invert-btn");
const body = document.querySelector("body");
const html = document.querySelector("html");

console.log(contrastBtn, invertBtn, body);

contrastBtn.addEventListener("click", () => {
    body.classList = body.className === "contrasted" ? "" : "contrasted";
    contrastBtn.innerText = contrastBtn.innerText === "Add more contrast" ? "Remove additional contrast" : "Add more contrast";
});

invertBtn.addEventListener("click", () => {
    html.classList = html.className === "inverted" ? "" : "inverted";
    invertBtn.innerText = invertBtn.innerText === "Inverted mode" ? "Normal mode" : "Inverted mode";
})