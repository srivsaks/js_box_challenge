let parentTable=document.getElementById("delegation_table");
let previousSelectedElement=null;
parentTable.addEventListener("click",changeColor)

function changeColor(e){
   let target=e.target;
   if(target.tagName!=="TD"){
       return;
   }
   highlight(target);
   e.stopImmediatePropagation();
}

function highlight(target){
    if(previousSelectedElement!==null){
        previousSelectedElement.style.backgroundColor="#999";
    }
    previousSelectedElement=target;
    previousSelectedElement.style.backgroundColor="red";
}