const fs=require('fs')
const filename='./school.students.json'
let jsonData=[]

fs.readFile(filename,'utf-8',(err,data)=>{

try{
    if(err) throw Error(err.message)
  
jsonData=JSON.parse(data); 
console.log(jsonData)
}
catch(error){
    console.error(error)
}
});

