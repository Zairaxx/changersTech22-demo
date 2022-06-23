//DOM Manipulation
// let myH1 = document.querySelector("h1");
// console.log(myH1);
// myH1.innerText = "Changers Tech 2022 - Javascript edition"

// Event listener

// 1. Hitta vår knapp
let showMoreBtn = document.querySelector("#show-more");
console.log(showMoreBtn);
// 2. Koppla en funktion till ett knapptryck
showMoreBtn.addEventListener("click", function (){

    let description = document.querySelector(".description");
    
    if(description.style.display !== "block") {
    // 3. Gå in i dess styling och ändra display-värde
        description.style.display = "block";
        showMoreBtn.innerText = "Show less"
    } else {
        description.style.display = "none";
        showMoreBtn.innerText = "Show more"
    }
})

let darkModeBtn = document.querySelector("#darkmode");
let contentDiv = document.querySelector("#content");

darkModeBtn.addEventListener("click", function(){
    if(contentDiv.classList.contains("darkmode")){
        document.body.style.background = "#FFFFFF"
        contentDiv.classList.remove("darkmode");
    } else {
        document.body.style.background = "#000000";
        contentDiv.classList.add("darkmode");
    }
})

//Miniräknare logik

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function(){
   let tal1 = document.querySelector("#tal1");
   let tal2 = document.querySelector("#tal2");

   let result = document.querySelector("#result");
   result.innerText = +tal1.value + +tal2.value;
})

let subtractBtn = document.querySelector("#subtractBtn");
subtractBtn.addEventListener("click", function(){
    let tal1 = document.querySelector("#tal1");
    let tal2 = document.querySelector("#tal2");
 
    let result = document.querySelector("#result");
    result.innerText = +tal1.value - +tal2.value;
 })

 let multiplyBtn = document.querySelector("#multiplyBtn");
multiplyBtn.addEventListener("click", function(){
    let tal1 = document.querySelector("#tal1");
    let tal2 = document.querySelector("#tal2");

    let result = document.querySelector("#result");
    result.innerText = +tal1.value * +tal2.value;
 })