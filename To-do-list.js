const arr = [{
  name : 'make dinner',
  dueDate : '31-12-2024'
}];

function rendertodolist(){
  let todolisthtml = '';
  for(i = 0 ; i < arr.length ; i++ ){
          const todoObject = arr[i];
        //   const name = todoObject.name;
        //   const dueDate = todoObject.dueDate;
        //   destructuring when object propertyname and variable name are same 
          const{name,dueDate} = todoObject;
          const html = ` 
          <div>${name} </div>
          <div>${dueDate}</div>
            <button class="del-btn" onclick = "
              arr.splice(${i},1);
              rendertodolist();"
            >Delete</button>  
          `;
          todolisthtml += html;
      }
      document.querySelector('.todo-js-div').innerHTML = todolisthtml; 
  }

function addtodo(){
  let nameInput = document.querySelector('.js-input-name');
  const name = nameInput.value;

  let dueDateInput = document.querySelector('.js-input-date');
  const dueDate = dueDateInput.value;       

  arr.push({
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




