const addForm = document.querySelector('.add');
const list = document.querySelector('.tasks');
const search = document.querySelector('.search input');
const li = document.querySelector('.list-item');

const generateTemplate = task => { // A function that adds to the a item(li) to the list list(ul) 
    const html = ` <li class="list-item d-flex justify-content-between align-items-center">
                         <span>${task}</span>
                         <i class="far fa-trash-alt delete"></i>
                    </li>`;

    list.innerHTML += html;
}
// add taks
addForm.addEventListener('submit', e => {  

    e.preventDefault(); // prevents the page from reloading when event occurs.

   const task = addForm.add.value.trim();  // the trim method work on strings it removes any wide space from before and after the string itself.

   if(task.length){    // if the task ha lenght we will call the generaTemplate function.
         generateTemplate(task);
         addForm.reset(); // the reset method, resets all the input in a form the search input will reset after a task was submited.
   }

});

// delete tasks

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){ // contains method will check for a class called delete.
        e.target.parentElement.remove();       // if the target of the click hit a element with the class of delete his parent element will be removed .
    }
});


// search tasks

const filterTasks = term => {

  Array.from(list.children).filter((task) => {      // the filter method will go through all of the items and will run the function for each one
     !task.textContent.includes(term).forEach(task => {  //we are targeting the tasks(li) that do not match our term(value of the input) 
        task.classList.add('filtered') });                   //and we are running a function for each one.The function will add a class to the li.(css/styles.css)ligne36.
    });  

  Array.from(list.children).filter((task) => {        //we're still getting an array from list of children and we're still going to filter through each one
      task.textContent.includes(term).forEach(task => {  //we are getting a new filtered array which has all of the elements that do match and remove that element
        task.classList.remove('filtered') });          //each one of those we're going to remove the filter the class because we no longer want to hide those.         
    });
};




search.addEventListener('keyup', e => {
  const term = search.value.trim();    // the term variable is for holding whatever value is typed in the search bar at each keyup the function will run.
  filterTasks(term)
});

// active 

list.addEventListener('click', e => {

    if(e.target.parentElement.tagName === li.tagName){
     if(e.target.parentElement.classList.contains('active')){
         e.target.parentElement.classList.remove('active');
     } else {
         e.target.parentElement.classList.add('active');
    }

}

   if(e.target.tagName === li.tagName){
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
    } else {
        e.target.classList.add('active');
    }
}

});
