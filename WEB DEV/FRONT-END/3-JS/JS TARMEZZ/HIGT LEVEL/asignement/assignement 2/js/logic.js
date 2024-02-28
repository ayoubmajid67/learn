 



function isValidNumber(inputs){
 

    if(inputs[0].value=="" || inputs[1].value=="") 
    throw "you shouldn't let any empty input :"; 

if(inputs[1].value==0)  throw "you can't divide by zero"; 
 

}

 function getINputInfo(inputs){
    console.log(inputs); 
return [Number(inputs[0].value),Number(inputs[1].value)];
 } 
function division(num1,num2) {
 
  if(num2==0) throw "invalid input : "
  return num1/num2; 
  }

  function ShowResult(num1,num2,ResultDom){
  ResultDom.innerText=(num1/num2).toFixed(2); 

 

  }