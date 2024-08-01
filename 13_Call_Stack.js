/*
javascript execution context 

{} 
1 global execution context -> this 
2 function execution context 

js code execution
   1 memory creation phase
   2 execution phase 
*/

let v1 = 10
let v2 =  5

function addnum(num1, num2){
    return num1 + num2
}

let result1 = addnum(v1, v2);
let result2 = addnum(10, 2)
/*   STEPS TO RUN CODE

1 global execution  -> this 

2 memory creation phase  
    v1 - undefined 
    v2 - undefined 
    addnum - definition 
    result1 - undefined 
    result2 - undefined

3   execution phase 
    v1 = 10
    v2= 5
    addnum         new variable environment + execution thread
                   1 memory creation phase  
                   v1 
                   v2
                   total 

                   2 execution phase 
                   num1 = 10
                   num2 = 5
                   total = 15             
   new env will get deleted 

    result1 = 15 


    ************** call stack ************

    LIFO 
*/