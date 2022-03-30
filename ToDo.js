//Although my mom helped me with level 2 and 3, I do fully understand the code I used!!//


window.onload = function () {
//this function adds a task to the array when a button is pressed//
var taskInput=document.getElementById("new-task");
//this fuction adds the button to the array//
var addButton=document.getElementsByTagName("button")[0];
//these elements hold the incomplete and completed tasks together//
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");
var createNewTaskElement=function(taskString){
  //this function allows for the technical elements that one would have to press on to work//
  var listItem=document.createElement("li");
  var checkBox=document.createElement("input");
  var label=document.createElement("label");
  var editInput=document.createElement("input");
  var editButton=document.createElement("button");
  var deleteButton=document.createElement("button");
  label.innerText=taskString;
  checkBox.type="checkbox";
  editInput.type="text";
  editButton.className="edit";
  deleteButton.innerText="Delete";
  deleteButton.className="delete";
//this is a list which is the new task list item//
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
//this function allows for the addTask feature to operate//
var addTask=function(){
  console.log("Add Task...");
  var listItem=createNewTaskElement(taskInput.value);
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value="";

}
//this function is useful in order to be able to edit an already existing task//
var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");

var listItem=this.parentNode;
var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
    if(containsClass){
      //this function allows you to switch to the editing feature//
      label.innerText=editInput.value;
    }else{
      editInput.value=label.innerText;
    }

    listItem.classList.toggle("editMode");
}
//this allows one to delete a task//
var deleteTask=function(){
    console.log("Delete Task...");

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);

}
//this function allows one to check off a task as completed//
var taskCompleted=function(){
    console.log("Complete Task...");

  var listItem=this.parentNode;
  completedTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
        //This function binds together the Completed Tasks and allows it to run//
}
var taskIncomplete=function(){
    console.log("Incomplete Task...");
    var listItem=this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
      bindTaskEvents(listItem,taskCompleted);
      //The code above will mark a task as imcomplete if the task is unchecked//

      //This holds all of the code above together and allows it to run smoothly//
}
var ajaxRequest=function(){
  console.log("AJAX Request");
}

{
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);
}

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
  console.log("bind list item events");
  var checkBox=taskListItem.querySelector("input[type=checkbox]");
  var editButton=taskListItem.querySelector("button.edit");
  var deleteButton=taskListItem.querySelector("button.delete");

      editButton.onclick=editTask;
      deleteButton.onclick=deleteTask;
      checkBox.onchange=checkBoxEventHandler;
      // the children list allows you to select the ListItems//
}
  for (var i=0; i<incompleteTaskHolder.children.length;i++){

    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
  }

  for (var i=0; i<completedTasksHolder.children.length;i++){
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
  }
{
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
}
var addTask=function(){
  console.log("Add Task...");
  var listItem=createNewTaskElement(taskInput.value);
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value="";
//this ties the edit button together allowing it to work as a function//
}
var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");

var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");

    if(containsClass){
      label.innerText=editInput.value;
    }else{
      editInput.value=label.innerText;
    }

    listItem.classList.toggle("editMode");
    //This function allows the "Delete Task Feature to Work"
}
var deleteTask=function(){
    console.log("Delete Task...");

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
   
    ul.removeChild(listItem);
//This fucntion allows the Completed Task feature on my website to run"
}
var taskCompleted=function(){
    console.log("Complete Task...");
  
  var listItem=this.parentNode;
  completedTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
        //This fucntion allows the INCompleted Task feature on my website to run"
}
var taskIncomplete=function(){
    console.log("Incomplete Task...");

    var listItem=this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
      bindTaskEvents(listItem,taskCompleted);
}
var ajaxRequest=function(){
  console.log("AJAX Request");
}

addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

//This function allows you to edit taks on the task list and pretty much is the glue to bring everything together//

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
  console.log("bind list item events");
  var checkBox=taskListItem.querySelector("input[type=checkbox]");
  var editButton=taskListItem.querySelector("button.edit");
  var deleteButton=taskListItem.querySelector("button.delete");
      editButton.onclick=editTask;
      deleteButton.onclick=deleteTask;
      checkBox.onchange=checkBoxEventHandler;
}
  for (var i=0; i<incompleteTaskHolder.children.length;i++){
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
  }
  for (var i=0; i<completedTasksHolder.children.length;i++){
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
  }
}