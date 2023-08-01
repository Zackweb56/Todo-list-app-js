let inp = document.querySelector("#inp");
let container = document.querySelector(".container");
let outputs = document.querySelector(".outputs");
let spanButton = document.getElementById("plus");
let completeSpan = document.querySelector("#completed");

console.log(spanButton);
window.onload = function(){
    inp.focus();
}

spanButton.onclick = function(){
    let user = inp.value;
    
    console.log("Task addes successfully");
    if(inp.value == ""){
        alert("the input is Empty");
    }else{
        console.log(inp.value);

        // create add-tasks
        let addTasks = document.createElement("div");
        // creat class Name to this div
        addTasks.classList.add("add-tasks");
        // add Text to this div
        addTasks.appendChild(document.createTextNode(inp.value));
        // create span delete
        let spanDelete = document.createElement("span");
        // add delete to this span Delete
        spanDelete.appendChild(document.createTextNode("Delete"));
        // add span Delete to the div add-tasks
        addTasks.appendChild(spanDelete);
        // add add tasks to the container div 
        outputs.appendChild(addTasks);

        inp.value = "";
        inp.focus();

        countTasks();


        console.log(spanDelete);

        // complleted tasks
        addTasks.addEventListener("click",function(e){
            console.log("compleetde");
            e.target.classList.add("task-complete");
            countTasks();

        })

        spanDelete.onclick = function(){
            addTasks.remove();
            countTasks();
        }
        
    }

}

function countTasks(){
    let taskSpan = document.getElementById("tasks");
    taskSpan.innerHTML = document.querySelectorAll(".outputs .add-tasks").length;

    completeSpan.innerHTML = document.querySelectorAll(".outputs .task-complete").length;
}
