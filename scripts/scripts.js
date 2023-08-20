const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");


function addList() {
 
  if (inputBox.value === "") {
    alert("Write something to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveList();
}
listContainer.addEventListener("click",function(e)
{
if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveList()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList()
    }
    
}, false); /*images/cross.png"*/

function clearData()
{
    listContainer.innerHTML="";
   localStorage.clear();
}

function saveList(){
    localStorage.setItem("data",listContainer.innerHTML);
}
 function loadFunction()
 {
    listContainer.innerHTML=localStorage.getItem("data");
 }
 loadFunction();
