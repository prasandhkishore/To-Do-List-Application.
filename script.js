var inputTask = document.getElementById("input");
var addBtton = document.getElementById("btn");
var listContainer = document.getElementById("list-container");

addBtton.addEventListener("click", AddTask);

inputTask.addEventListener("keypress", function(e){
    if(e.code === "Enter"){
        AddTask();
    }
})


function AddTask(){
    if(inputTask.value === ''){
        alert("Enter any task!");
    }
    else{
        var taskList = document.createElement("li");
        
        taskList.innerHTML = inputTask.value;
        listContainer.append(taskList);
        var deleteIcon = document.createElement("Span");
        deleteIcon.innerHTML = "x";
        taskList.append(deleteIcon);
        inputTask.value = "";
        SaveData();
    }
}

listContainer.addEventListener("click", function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        console.log(e);
        e.target.parentNode.remove();
        SaveData();
    }
})

function SaveData(){
    localStorage.setItem("To-Do List Data", listContainer.innerHTML);
}

function ShowData(){
    listContainer.innerHTML = localStorage.getItem("To-Do List Data");
}
ShowData();