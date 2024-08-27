

let task=document.getElementById('task');
let addBtn=document.getElementById('addBtn').addEventListener("click", addTask);
let read=document.getElementById('read');
// let addTask;
let result=[];
// if (localStorage.addTask != null){
//    result=JSON.parse (localStorage.addTask);
// }
// else{
//  result=[];
// }

// create task

function addTask(){
 let arr=task.value;
 result.push(arr);
 displayData();
console.log(result);
task.value="";
}

    // localStorage.setItem('addTask'  , JSON.stringify(result));
// display task
function displayData(){
  let show='';
  for (let i=0; i<result.length; i++){
    show+=`<li>${result[i]}</li> 
            <button onclick="doneBtn(${i})" type="submit" id="doneBtn">done</button>
            <button onclick="editBtn(${i})"  type="submit" id="editBtn">edit</button>
            <button onclick="delBtn(${i})" type="submit" id="delbtn">delete</button>`;
          console.log(show); 
  } 
   document.getElementById('read').innerHTML=show;
}
// delete btn
function delBtn(i){

        result.splice(i,1);
        // localStorage.addTask=JSON.stringify(result);
        displayData();
}
  delBtn()  
// update btn

function editBtn(i){
  document.getElementById('editInput').style.display='inline';
  document.getElementById('editButton').style.display='inline';
  document.getElementById('editInput').value = result[i];
 document.getElementById('editButton').onclick = ()=> editbutton(i)

}
function editbutton(i){
  document.getElementById('editInput').style.display='none';
  document.getElementById('editButton').style.display='none';
  result[i] = document.getElementById('editInput').value
  displayData();
  // document.getElementsByTagName("li").textContent=document.getElementById('editInput').value
}

// done btn
function doneBtn(i){
 
  const taskElement = document.getElementsByTagName("li")[i];
  taskElement.style.color="green";
  // localStorage.setItem('addTask', JSON.stringify(result));

}
doneBtn();

