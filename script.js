 //Creating 16x16 grid
 const gridContainer = document.querySelector("#grid-container");
 for (let i = 0; i < 425; i++) {
   const div = document.createElement("div");
   div.style.cssText = "width:20px;height:20px;border: 1px solid WhiteSmoke;";
   gridContainer.appendChild(div);
 }

 //Adding mouse over functionality
 const divNodeList = document.querySelectorAll("#grid-container > div");
 for (let i = 0; i < divNodeList.length; i++) {
   divNodeList[i].addEventListener("mouseover", function () {
     divNodeList[i].style.backgroundColor = "black";
   });
 }
 //Adding reset button
 const buttonReset = document.querySelector("#btn-reset");
 buttonReset.addEventListener("click", function () {
   const divNodeList = document.querySelectorAll("#grid-container > div");
       for (let i = 0; i < divNodeList.length; i++) {
       divNodeList[i].style.backgroundColor = "white";
   }
 });

 //Letting user pick color
 const buttonColor = document.querySelector("#btn-color");
 buttonColor.addEventListener("click", function () {
   colorChoice = prompt("Please enter a valid color name".toLowerCase());
   for (let i = 0; i < divNodeList.length; i++) {
     divNodeList[i].addEventListener("mouseover", function () {
       divNodeList[i].style.backgroundColor = colorChoice;
     });
   }
 });

 
 document.addEventListener('keydown', event => {
     console.log(event.keyCode)
   if (event.keyCode == 49) {
       const divNodeList = document.querySelectorAll("#grid-container > div");
       colorChoice = prompt("Please enter a valid color name".toLowerCase());
       for (let i = 0; i < divNodeList.length; i++) {
       divNodeList[i].addEventListener("mouseover", function () {
       divNodeList[i].style.backgroundColor = colorChoice;
     })
   }
 }
});


 const gridSize = document.querySelector("#grid-size");
 gridSize.addEventListener("click", function () {
   const container = document.querySelector("#grid-container");
   container.innerHTML = "";
   let squaresPerSide = prompt("Type in squares per side");
   let chosenGridSize = squaresPerSide * squaresPerSide;

   for (let i = 0; i < chosenGridSize; i++) {
     const div = document.createElement("div");
     div.style.cssText = "width:20px;height:20px;border: 1px solid WhiteSmoke;";
     container.appendChild(div);
   }
   for (let i = 0; i < chosenGridSize; i++) {
     const newDivs = document.querySelectorAll("#grid-container > div");
     console.log(newDivs)
     newDivs[i].addEventListener("mouseover", function () {
     newDivs[i].style.backgroundColor = "black";
     });
   }
});