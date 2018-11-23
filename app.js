document.querySelector('.add').addEventListener('click', addTask);

const noTask=()=>{
    let divForChange=document.querySelector('#forStaff');
    while(divForChange.firstChild){
        divForChange.firstChild.remove();
    }
    divForChange.appendChild(document.createElement('p')).className='text-center';
    divForChange.querySelector('p').textContent='No task';
    document.querySelector('button').className='left btn black waves-effect waves-light disabled';
};

const yesTask=(getMasOfTasksFromStorage)=>{
    let divForChange=document.querySelector('#forStaff');
    while(divForChange.firstChild){
        divForChange.firstChild.remove();
    }
    divForChange.appendChild(document.createElement('ul')).className='collection';
    getMasOfTasksFromStorage.forEach(element => {
        document.querySelector('ul').appendChild(document.createElement('li')).className='collection-item';
        let arr1=document.querySelectorAll('li');
        arr1[arr1.length-1].textContent=element;
        arr1[arr1.length-1].appendChild(document.createElement('a')).className='right';
        arr1[arr1.length-1].querySelector('a').appendChild(document.createElement('i')).className='material-icons';
        arr1[arr1.length-1].querySelector('i').textContent='clear';
        arr1[arr1.length-1].querySelector('a').addEventListener('click', delOneTask);
    });
    let backWallOdd=document.querySelectorAll('li:nth-child(odd)');
    backWallOdd.forEach(e=>{
        e.style.background='rgb(230, 230, 230)';
    });
    document.querySelector('button').className='left btn black waves-effect waves-light';
    document.querySelector('#del-btn').addEventListener('click', delAll);
};

function checkStart(noTask,yesTask){
    let getTaskFromStorage=localStorage.getItem('tasks');
    let masOfTasks=JSON.parse(getTaskFromStorage);
    if(getTaskFromStorage===null || getTaskFromStorage==='[]'){
        localStorage.setItem('tasks', '[]');
        noTask();
    } else{
        yesTask(masOfTasks);
    }
}

checkStart(noTask,yesTask);

function addTask(e){
    let getTaskFromStorage=localStorage.getItem('tasks');
    let masOfTasks=JSON.parse(getTaskFromStorage);
    let writeStaff=document.querySelector('input').value;
    if(writeStaff!==''){
        masOfTasks.push(writeStaff);
        localStorage.setItem('tasks', JSON.stringify(masOfTasks));
    }
    checkStart(noTask,yesTask);
}

function delAll(){
    localStorage.setItem('tasks','[]');
    checkStart(noTask,yesTask);
}

function delOneTask(e){ // add pre-load, clear an input after add task
    let getTaskFromStorage=localStorage.getItem('tasks');
    let masOfTasks=JSON.parse(getTaskFromStorage);
    let thisTask = e.path[2].textContent;
    let masOfTaskInPage=document.querySelectorAll('li');
    masOfTaskInPage.forEach((element,index)=>{
        if(element===e.target.parentElement.parentElement){
            masOfTasks.splice(index,1);
            localStorage.setItem('tasks', JSON.stringify(masOfTasks));
        }
    })
    checkStart(noTask,yesTask);
}
