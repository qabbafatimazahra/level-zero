const addButton = document.getElementById   ('addButton');
const taskInput = document.getElementById ('taskInput');
const taskList  = document.getElementById ('taskList');

addButton.addEventListener ('click', (eo) => {
    eo.preventDefault();
    const tasktext= taskInput.value;
    if (taskInput.trim()  !== ``){
    const taskListItem = `  <br>  <div class="delete-input" id="taskListItem">
    <span class="task-label">${taskInput.value}</span>
    <button class="delete"><i class="fa-solid fa-trash" ></i></button>
    </div>
     `;

    taskList.innerHTML+=taskListItem;
    taskInput.value = ``;
    }
});


taskList.addEventListener("click", (eo) =>{


    if (eo.target.className == "fa-solid fa-trash") {
        eo.target.parentElement.parentElement.remove()
    } 
});
function search(){
    //valeur de recherche 
    const input_content = document.querySelector('input#searchInput').value
    console.log('input_content>>' , input_content) 
    
    const liste = document.querySelector('#taskList')
    console.log('liste>>' , liste)

    const list_task = liste.children
    console.log('list_task>>' , list_task)

//parcourir le tableau 
    for ( let i = 0 ; i < list_task.length ; i++){
    // cibler le text 
    const task_content = list_task[i].textContent;
    console.log('task_content>>', task_content)
     //condition sur le text
    if (task_content.includes(input_content)){
        list_task[i].style.display = 'block'
    }else{
        list_task[i].style.display = 'none'
    }

}
}
 