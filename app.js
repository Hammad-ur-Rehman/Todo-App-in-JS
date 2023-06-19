
var list = document.getElementById("list");


function addTodo() {

      var todo = document.getElementById("todo-item");
      var li = document.createElement("li");
      var liText = document.createTextNode(todo.value);

      li.appendChild(liText);

      // Create Delete Button

      var delBtn = document.createElement("Button");
      var deltext = document.createTextNode("Delete");
      delBtn.appendChild(deltext);
      li.appendChild(delBtn);
      delBtn.setAttribute("class", "btn");
      delBtn.setAttribute("onclick", "deleitem(this)");


      // Create Edit Button 

      var editBtn = document.createElement("button");
      var edittext = document.createTextNode("Edit");
      editBtn.appendChild(edittext);
      li.appendChild(editBtn);
      editBtn.setAttribute("class", "editbtn1");
      editBtn.setAttribute("onclick", "edititem(this)")




      list.appendChild(li);
      todo.value = "";
      console.log(li);

}

function deleitem(e) {

      e.parentNode.remove();

}

function edititem(e) {

      var val = prompt("Enter EDit Value", e.parentNode.firstChild.nodeValue);
      e.parentNode.firstChild.nodeValue = val;

}




function deleteAll() {

      list.innerHTML = "";

}