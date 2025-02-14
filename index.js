const noteContainer = document.querySelector(".notecontainer"); 
const Createbtn = document.querySelector(".btn"); 
let notes = document.querySelector(".input-box");


Createbtn.addEventListener ("click", ()=>{
    let inputBox = document.createElement ("p");
    let img = document.createElement ("img") ;
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "mynaui--trash-one-solid.png" ;
    noteContainer.appendChild(inputBox).appendChild(img);
    // notesContainer.appendChild(inputBox);
    // notesContainer.appendChild(img);

})
// noteContainer.addEventListener("click" , function(e){
//     if(e.target.tagName === "IMG"){
//         e.target.paranetElement.remove();
//     }
// }) 
noteContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.closest(".input-box").remove(); // Removes the entire note div
    }
});