const todoArr = [{
  name : 'make dinner',
  dueDate : '31-12-2024'
}];

function rendertodolist(){
  let todolisthtml = '';
  
  // forEach function innerfn has to para i.e. 1. array values 2. index of array values
  todoArr.forEach((todoObject,index) => { //arrow function
  
      const{name,dueDate} = todoObject;
      const html = ` 
      <div>${name} </div>
      <div>${dueDate}</div>
        <button class="del-btn js-delete-btn"
        >Delete</button>  
      `;
      todolisthtml += html;
  });

    document.querySelector('.todo-js-div').innerHTML = todolisthtml;
    
    // html element is created after the todolistHtml 
    // queryselectorall is used bcos it only selects the first elem when normal queryselector is used
    document.querySelectorAll('.js-delete-btn').
    forEach((deleteButtons, index) => {
      deleteButtons.addEventListener('click' ,() =>{
        todoArr.splice(index,1);
          rendertodolist();
      })
    });
  }


  document.querySelector('.add-js-btn').
  addEventListener('click' , () => {
    addtodo();
  });

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




