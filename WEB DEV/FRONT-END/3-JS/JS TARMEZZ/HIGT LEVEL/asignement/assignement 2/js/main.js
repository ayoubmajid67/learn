



btn.onclick=function () { 



 try{


    isValidNumber(inputs); 

    let [num1,num2]=getINputInfo(inputs); 

  ShowResult(num1,num2,result); 
    

 }catch(ErrorMsg){
    

 ErrorHandling(ErrorMsg,result); 

 }


 }