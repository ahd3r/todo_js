document.querySelector('.add').addEventListener('click', addTask);
document.querySelector('.add').addEventListener('submit', addTask);
const getTaskFromStorage=localStorage.getItem('tasks');
const masOfTasks=JSON.parse(getTaskFromStorage);

const noTask=()=>{
    document.querySelector('#parentForTasks').appendChild(document.createElement('div')).className='row';
    let arr=document.querySelectorAll('#parentForTasks>div');
    arr[arr.length - 1].appendChild(document.createElement('div')).className='col';
    arr[arr.length - 1].querySelector('.col').appendChild(document.createElement('p')).className='text-center';
    arr[arr.length - 1].querySelector('p').textContent='No task';
    document.querySelector('#parentForTasks').appendChild(document.createElement('div')).className='row';
    arr=document.querySelectorAll('#parentForTasks>div');
    arr[arr.length - 1].appendChild(document.createElement('div')).className='col';
    arr[arr.length - 1].querySelector('.col').appendChild(document.createElement('div')).className='ot1';
    arr[arr.length - 1].querySelector('.col').appendChild(document.createElement('button')).className='left btn black waves-effect waves-light disabled';
    arr[arr.length - 1].querySelector('button').setAttribute('id','del-btn');
    arr[arr.length - 1].querySelector('button').textContent='delete All';
};

const yesTask=()=>{
    document.querySelector('#parentForTasks').appendChild(document.createElement('div')).className='row';
    let arr=document.querySelectorAll('#parentForTasks>div');
    arr[arr.length-1].appendChild(document.createElement('div')).className='col';
    arr[arr.length-1].querySelector('.col').appendChild(document.createElement('ul')).className='collection';
    masOfTasks.forEach(element => {
        document.querySelector('ul').appendChild(document.createElement('li')).className='collection-item';
        let arr1=document.querySelectorAll('li');
        arr1[arr1.length-1].textContent=element;
        arr1[arr1.length-1].appendChild(document.createElement('a')).className='right';
        arr1[arr1.length-1].querySelector('a').appendChild(document.createElement('i')).className='material-icons';
        arr1[arr1.length-1].querySelector('i').textContent='clear';
        arr1[arr1.length-1].querySelector('a').addEventListener('click', delOneTask);
    });
    document.querySelector('#parentForTasks').appendChild(document.createElement('div')).className='row';
    arr=document.querySelectorAll('#parentForTasks>div');
    arr[arr.length - 1].appendChild(document.createElement('div')).className='col';
    arr[arr.length - 1].querySelector('.col').appendChild(document.createElement('div')).className='ot2';
    arr[arr.length - 1].querySelector('.col').appendChild(document.createElement('button')).className='left btn black waves-effect waves-light';
    arr[arr.length - 1].querySelector('button').setAttribute('id','del-btn');
    arr[arr.length - 1].querySelector('button').textContent='delete All';
};

if(getTaskFromStorage===null || getTaskFromStorage==='[]'){
    localStorage.setItem('tasks', '[]');
    noTask();
} else{
    yesTask();
}

if(document.querySelector('#del-btn').classList.contains('disabled')===false){
    document.querySelector('#del-btn').addEventListener('click', delAll);
}

function addTask(){
    const writeStaff=document.querySelector('input').value;
    if(writeStaff!==''){
        const val = JSON.parse(localStorage.getItem('tasks'));
        val.push(writeStaff);
        localStorage.setItem('tasks', JSON.stringify(val));
        location.reload();
    }
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
