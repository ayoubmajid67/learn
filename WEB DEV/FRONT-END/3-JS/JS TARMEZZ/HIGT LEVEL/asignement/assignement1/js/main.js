btn.onclick=function(){

    if(!isValid()){
    alert("you should fill the input before submit"); 
   
    }
   
   else{
   
   let [num1,num2]=[Number(inputs[0].value),Number(inputs[1].value)]   
   
   result.innerText=num1/num2; 
   
   }
   
   };