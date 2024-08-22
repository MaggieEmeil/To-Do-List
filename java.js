// let task=document.getElementById('task');
// let addBtn=document.getElementById('addBtn');
// let read=document.getElementById('read');
// let mood='add';
// let x;

// // add task

// let addTask;
// if (localStorage.allTasks != null){
//    addTask=JSON.parse (localStorage.allTasks);
// }
// else{
//  addTask=[];
// }

// addBtn.onclick=function(){
//     let newTask=task.value;
//     if(mood === 'ADD'){
//     addTask.push(newTask);
//     }
//     else{
//       addTask[x]=newTask;
//       mood='ADD';
//       addBtn.innerHTML='ADD';
//     }
//     localStorage.setItem('allTasks'  , JSON.stringify(addTask));
//     clearData();
//     showData();
//     console.log(addTask);
// }


// // clear data after click addBtn

// function clearData(){
//     task.value='';
// }



// // read data

// function showData(){
//     let read='';
//     for(let i=0 ; i<addTask.length; i++){
//       read+=`<li>${addTask[i]}</li> 
//         <button onclick="doneBtn(${i})" type="submit" id="doneBtn">done</button>
//         <button onclick="editBtn(${i})"  type="submit" id="edit">edit</button>
//         <button onclick="delBtn(${i})" type="submit" id="delete">delete</button>`;
//       console.log(read); 
//     }
//     document.getElementById('read').innerHTML=read;
//     document.getElementsByClassName('item').innerHTML=item;
// }
// showData();


// // delete on item

// function delBtn(i){
//       addTask.splice(i,1);
//       localStorage.allTasks=JSON.stringify(addTask);
//       showData();
// }


// // update

// function editBtn(i){
//    task.value=addTask[i];
//    addBtn.innerHTML="EDIT";
//    mood="EDIT";
//    x=i;
//    editBtn(i).style.display='none';
// }


// // done

//  function doneBtn(i) {
// //   // الحصول على عنصر المهمة المحدد
//  const taskElement = document.querySelectorAll('li')[i];

// //   // تغيير محتوى العنصر إلى علامة صح

//     taskElement.innerHTML=`✔️ ${addTask[i]}`;
//     //  taskElement.querySelectorAll('delete').forEach(delBtn);
//     //  taskElement.querySelectorAll('edit').forEach(editBtn);
// //   // حفظ التغييرات في localStorage إذا لزم الأمر
//   localStorage.setItem('allTasks', JSON.stringify(addTask));
// }




let task=document.getElementById('task');
let addBtn=document.getElementById('addBtn');
let read=document.getElementById('read');