






window.onload=function () { 

if(JSON.parse(localStorage.getItem("taskName"))){


LOcalStorageData=JSON.parse(localStorage.getItem("taskName")); 

LOcalStorageData.forEach(taskName=>{
     
    pushTaskToTable(getTaskObjectInfo(taskName)); 

});

}
 }

const  resultTable=document.getElementById("ResultTable"); 

let task={

    Name:"undefined",
    year:"0-0-0",
    deleteBtn:"",
     doneBtn:"",
     editBtn:"", 
}


const doneSound=new Audio('doneTaskSound.mp3'); 

let LOcalStorageData=[]; 

function addNewTask(name){


let taskName=prompt("entre your task :");
if(taskName==null){}
else if(taskName=="") alert("you should entre the task name"); 
else if(LOcalStorageData.includes(taskName)) alert("duplicated task name"); 
else{

let newTask=getTaskObjectInfo(taskName); 


if(JSON.parse( localStorage.getItem("taskName"))){
 
 LOcalStorageData=JSON.parse(localStorage.getItem("taskName")); 

}

LOcalStorageData.push(taskName); 
localStorage.setItem("taskName",JSON.stringify(LOcalStorageData)); 


  
    pushTaskToTable(newTask); 

}
}

function getTaskObjectInfo(taskName) {
    let Task=Object.create(task); 
    Task.Name=getNameObject(taskName);
    Task.year =  getTaskDate();
    Task.deleteBtn=getDeleteBtn(); 
    Task.doneBtn=getDoneBtn(); 
    Task.editBtn=getEditBtn(); 
    return Task; 

  }
function  getNameObject(taskName) {
    
    let newTaskName=document.createElement("h2"); 
    newTaskName.textContent=taskName;
    
    return newTaskName; 

 }

function getTaskDate() {
    const currentDate = new Date();

  let dateFormat=getCurrentDate(currentDate);

 let DateObject = getDateObject(dateFormat);
 return DateObject; 

}

function getDateObject(dateFormat) {
    let DateObject = document.createElement("h5");
    DateObject.textContent=dateFormat;
    return DateObject;
}

function getCurrentDate(currentDate) {
    let year = currentDate.getFullYear();

    //get Current month:
    let month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is 0-based


    //get Current day : 
    let day = String(currentDate.getDate()).padStart(2, "0");
    return `📅${year}-${month}-${day}`;
}

function getDeleteBtn() {
    let srcValue = "img/delete btn.png";
    let altValue = "delete img";
  
    let eventValue = "deleteTask(this)";

    let deleteBtn = SetBtnAttribute(srcValue, altValue,eventValue);
    return deleteBtn; // Return the created deleteBtn element
}

function getDoneBtn() {

 
    let srcValue = "img/done btn.png";
    let altValue = "done btn";
  
    let eventValue = "doneTask(this)";

    let editBtn = SetBtnAttribute(srcValue, altValue,eventValue);
    return editBtn; 
}

function getEditBtn() {

    let srcValue = "img/edit btn.png";
    let altValue = "edit btn";
  
    let eventValue = "editTask(this)";

    let checkBtn = SetBtnAttribute(srcValue, altValue,eventValue);
    return checkBtn; 
}

function SetBtnAttribute(srcValue, altValue, eventValue) {

    
    let btnObject = document.createElement("img");
    btnObject.setAttribute("src", srcValue);
    btnObject.setAttribute("alt", altValue);
 // Fix: Use setAttribute for class
    btnObject.setAttribute("onclick", eventValue); // Fix: Use setAttribute for onclick
    return btnObject;
}


function pushTaskToTable(task) {
    let Parent = document.createElement("tr");
  
    let TdChild1 = document.createElement("td");
    let TdChild2 = document.createElement("td");
    let TdChild3 = document.createElement("td");
    let TdChild4 = document.createElement("td");
  
    let nameElementClone = task.Name.cloneNode(true); // Clone task.Name
    TdChild1.appendChild(nameElementClone);


    let yearElementClone = task.year.cloneNode(true); // Clone task.year
    TdChild1.appendChild(yearElementClone);
  
    TdChild2.appendChild(task.deleteBtn.cloneNode(true));
    TdChild3.appendChild(task.doneBtn.cloneNode(true));
    TdChild4.appendChild(task.editBtn.cloneNode(true));
  
    Parent.appendChild(TdChild1);
    Parent.appendChild(TdChild2);
    Parent.appendChild(TdChild3);
    Parent.appendChild(TdChild4);

    resultTable.appendChild(Parent);
  }

let doneFlag=false; 
function doneTask(thisElement){
let { trDoneColor, RemoveDoneSrc, trPrimitiveColor, donSrc } = getDoneAttributes();
doneFlag=!doneFlag; 

if(doneFlag) SetDoneTaskStyle(thisElement, trDoneColor, RemoveDoneSrc); 

else setDefaultNotDoneStyle(thisElement, trPrimitiveColor, donSrc);


}



function SetDoneTaskStyle(thisElement, trDoneColor, RemoveDoneSrc) {
    let parent = thisElement.parentElement.parentElement;
    parent.style.backgroundColor = trDoneColor;
    thisElement.setAttribute("src", RemoveDoneSrc);
    doneSound.currentTime=0;
    doneSound.play(); 
}

function setDefaultNotDoneStyle(thisElement, trPrimitiveColor, donSrc) {
    let parent = thisElement.parentElement.parentElement;
    parent.style.backgroundColor = trPrimitiveColor;
    thisElement.setAttribute("src", donSrc);
}

function getDoneAttributes() {
    let trDoneColor = "#95FD97";
    let trPrimitiveColor = "white";
    let RemoveDoneSrc = "img/remove done.png";
    let donSrc = "img/done btn.png";
    return { trDoneColor, RemoveDoneSrc, trPrimitiveColor, donSrc };
}


function deleteTask(thisElement){


let ParentTr=getParentTr(thisElement); 
AddClass(ParentTr,"REmoveBtnHover"); 

setTimeout(function() {
    const userStat = getPromptStat(); 

    if (userStat === null)  RemoveClass(ParentTr,"REmoveBtnHover");
    
    else   {
         let taskName=getName(ParentTr); 
         removeFromLocalStorage(taskName); 
        RemoveElement(ParentTr); 
    }
  },10);

}

function getParentTr(thisElement) {
    let ParentTr=thisElement.parentElement.parentElement;

    return ParentTr; 
  }


function AddClass(parent,className){
parent.classList.add(className); 

}
function RemoveClass(parent,className){
    parent.classList.remove(className); 
    
    }

  function getPromptStat() { 
return prompt("Are you sure you want to remove this task?");
   }

   
function removeFromLocalStorage(taskName) {
    if (localStorage.getItem("taskName")) {
      const LOcalStorageData = JSON.parse(localStorage.getItem("taskName"));
      const index = LOcalStorageData.indexOf(taskName);
      if (index !== -1) {
        LOcalStorageData.splice(index, 1); // Remove 1 element at the found index
        localStorage.setItem("taskName", JSON.stringify(LOcalStorageData));
      }
    }
  }
  
  function getName(parentElement){
    let taskName = parentElement.querySelector("td:first-child h2").textContent;
      return taskName; 

  }
   function RemoveElement(element ) {

    element.parentElement.removeChild(element); 
     }

function editTask(thisElement ) {
    let ParentTr=getParentTr(thisElement); 
    AddClass(ParentTr,"editBtnHover"); 
    
    setTimeout(function() {
        const newTaskValue = prompt("Are you sure you want to change the name of this task?");; 
    
        if (newTaskValue === null) {}
        
 else if(newTaskValue=="")    alert("you should entre the name of the task");
    
 else if(newTaskValue.length>30) alert("your task name so long");
        else {
     EditFromLocalStorage(getName(ParentTr),newTaskValue);  
      changeTaskName(ParentTr,newTaskValue); 
      LOcalStorageData=JSON.parse(localStorage.getItem("taskName")); 
   
        
        }  
        RemoveClass(ParentTr,"editBtnHover");
      },10);
   

  }
  function changeTaskName(parentElement,TaskValue) { 

    let TextElement=document.createTextNode(TaskValue); 
    let h2Element = parentElement.querySelector("td:first-child h2");
    h2Element.textContent="";
    h2Element.appendChild(TextElement);   
   
   }

   function EditFromLocalStorage(taskName,newTaskName) {
   
    if (localStorage.getItem("taskName")) {
      const LOcalStorageData = JSON.parse(localStorage.getItem("taskName"));
      const index = LOcalStorageData.indexOf(taskName);
     
     
    
      if (index !== -1) {
        LOcalStorageData.splice(index, 1,newTaskName); // Remove 1 element at the found index
        localStorage.setItem("taskName", JSON.stringify(LOcalStorageData));
      }
    }
  }

