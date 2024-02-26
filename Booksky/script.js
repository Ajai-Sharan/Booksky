var add_btn = document.querySelector("#add_popup_btn");
var popup_overlay = document.querySelector(".popup_overlay");
var popup = document.querySelector(".popup");

add_btn.addEventListener("click", function(){
    popup.style.display = "block";
    popup_overlay.style.display = "block";
})




var add_btn = document.querySelector("#add_btn");
var container = document.querySelector(".container");
var id_bookTitle_input = document.querySelector("#id_bookTitle_input");
var id_bookAuthor_input = document.querySelector("#id_bookAuthor_input");
var id_aboutBook_input = document.querySelector("#id_aboutBook_input");
var cancel_btn = document.querySelector("#cancel_btn");


add_btn.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "bookContainer");
    div.innerHTML = `<h2>${id_bookTitle_input.value}</h2>
    <h5>${id_bookAuthor_input.value}</h5>
    <p>${id_aboutBook_input.value}</p>
    <button  onclick="deleteEvent(event)">Delete</button>`;

    container.append(div);
    id_bookTitle_input.value = "";
    id_bookAuthor_input.value = '';
    id_aboutBook_input.value = '';
    popup.style.display = "none";
    popup_overlay.style.display = "none";
})

cancel_btn.addEventListener("click", function(event){
    event.preventDefault()
    id_bookTitle_input.value = "";
    id_bookAuthor_input.value = '';
    id_aboutBook_input.value = '';
    popup.style.display = "none";
    popup_overlay.style.display = "none";
})

function deleteEvent(event){
    event.target.parentElement.remove();
}