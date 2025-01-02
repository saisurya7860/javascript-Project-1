const todoArr = [{
  name : 'make dinner',
  dueDate : '31-12-2024'
}];

function rendertodolist(){
  let todolisthtml = '';
  
  // forEach function innerfn has to para i.e. 1. array values 2. index of array values
  todoArr.forEach(function(todoObject,index){
  
      const{name,dueDate} = todoObject;
      const html = ` 
      <div>${name} </div>
      <div>${dueDate}</div>
        <button class="del-btn" onclick = "
          todoArr.splice(${index},1);
          rendertodolist();"
        >Delete</button>  
      `;
      todolisthtml += html;
  });

    document.querySelector('.todo-js-div').innerHTML = todolisthtml; 
  }

function addtodo(){
  let nameInput = document.querySelector('.js-input-name');
  const name = nameInput.value;

  let dueDateInput = document.querySelector('.js-input-date');
  const dueDate = dueDateInput.value;       

  todoArr.push({
    // name: name,
    // duedate : duedate
    // shorthand method when property name and value are same
    name,
    dueDate
  });
  
  nameInput.value = '';
//    function call
  rendertodolist();
}




