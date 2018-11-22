document.querySelector('.add').addEventListener('click', addTask);
const getTaskFromStorage=localStorage.getItem('tasks');
const masOfTasks=JSON.parse(getTaskFromStorage);
document.querySelector('#del-btn').addEventListener('click', delAll);

const noTask=()=>{
    document.querySelector('#parentForTasks').appendChild(document.createElement('div'));
    const arr=document.querySelectorAll('#parentForTasks>div');
    arr[arr.length - 1].className='row';
    arr[arr.length - 1].appendChild(document.createElement('div'));
    arr[arr.length - 1].querySelector('div').className='col';
    arr[arr.length - 1].querySelector('.col').appendChild(document.createElement('p'));
    arr[arr.length - 1].querySelector('.col>p').className='text-center';
    arr[arr.length - 1].querySelector('.col>p').textContent='No task';
};

const yesTask=()=>{
    document.querySelector('#parentForTasks').appendChild(document.createElement('div'));
    const arr=document.querySelectorAll('#parentForTasks>div');
    arr[arr.length-1].className='row';
    arr[arr.length-1].appendChild(document.createElement('div'));
    arr[arr.length-1].querySelector('div').className='col';
    arr[arr.length-1].querySelector('.col').appendChild(document.createElement('ul'));
    document.querySelector('ul').className='collection';
    masOfTasks.forEach(element => {
        document.querySelector('ul').appendChild(document.createElement('li'));
        let arr1=document.querySelectorAll('li');
        arr1[arr1.length-1].className='collection-item';
        arr1[arr1.length-1].textContent=element;
        arr1[arr1.length-1].appendChild(document.createElement('a'));
        arr1[arr1.length-1].querySelector('a').className='right';
        // arr1[arr1.length-1].querySelector('a').setAttribute('href', '#');
        arr1[arr1.length-1].querySelector('a').appendChild(document.createElement('i'));
        arr1[arr1.length-1].querySelector('i').className='material-icons';
        arr1[arr1.length-1].querySelector('i').textContent='clear';
        arr1[arr1.length-1].querySelector('a').addEventListener('click', delOneTask);
    });
};

if(getTaskFromStorage===null || getTaskFromStorage==='[]'){
    localStorage.setItem('tasks', '[]');
    noTask();
} else{
    yesTask();
}

function addTask(){
    const writeStaff=document.querySelector('input').value;
    if(writeStaff!==''){
        const val = JSON.parse(localStorage.getItem('tasks'));
        val.push(writeStaff);
        localStorage.setItem('tasks', JSON.stringify(val));
    }
    location.reload();
}

function delAll(){
    localStorage.setItem('tasks','[]');
    location.reload();
}

function delOneTask(e){
    let thisTask = e.path[2].textContent;
    masOfTasks.splice(masOfTasks.indexOf(thisTask.substr(0,thisTask.length-5)),1);
    localStorage.setItem('tasks', JSON.stringify(masOfTasks));
    location.reload();
}
