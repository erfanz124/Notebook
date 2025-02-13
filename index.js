const noteContainer = document.querySelector(".notecontainer"); 
const Createbtn = document.querySelector(".btn"); 
let notes = document.querySelector(".input-box");


Createbtn.addEventListener ("click", ()=>{
    let inputBox = document.createElement ("p");
    let img = document.createElement ("img") ;
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Recycle Bin Full3.ico" ;
    noteContainer.appendChild(inputBox).appendChild(img);
    // notesContainer.appendChild(inputBox);
    // notesContainer.appendChild(img);

})