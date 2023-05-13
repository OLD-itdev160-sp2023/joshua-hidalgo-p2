//Array to hold tasks
var tasks = [];

//Task status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor function
function Task(id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates new task element and adds it to the DOM
function addTaskElement (task){
    //Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set Attributes
    taskEl.setAttribute('id', task.id);

    //Add text to a task element
    taskEl.appendChild(textEl);

    //Add task element to a list
    listEl.appendChild(taskEl);
}

//Click handler to add a new task
function addTask(event) {
var inputEl = document.getElementById('input-task');
if(inputEl.value != ''){
    //Create a unique id
    var id = 'item-' + tasks.length;

    //Create a new task
var task = new Task(id,inputEl.value, taskStatus.active);
tasks.push(task);

//Add the task to the DOM
addTaskElement(task);

//Reset input
inputEl.value = '';
    }
}

//Click handler to complete a task
function completeTask(event){
    //Get task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in tasks array and update the status 
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i] === id){
            tasks[i].status = taskStatus.completed;
            break;
        }   
    }

    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//Key press handler automatically click the add task button
function clickButton(event){
    if(event.keyCode === 13){
        document.getElementById('add-task').click();
    }
}

function init(){
    //Wire the handler for the add task button
    document.getElementById('add-task').onclick = addTask;

    //Wire up the task completed kist item click handler
    document.getElementById('active-list').onclick = completeTask;

    //Wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}
init();







