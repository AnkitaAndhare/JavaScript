function saymyname() {
  console.log("ankita");
}
saymyname();

// function addtwoNum(num1, num2) {// parameters
//   console.log(num1 + num2);
// }

console.log(addtwoNum(4, 5)); // arguments

function addtwoNum(num1, num2) {// parameters

  let result = num1 + num2;
  return result;
}

const result = addtwoNum(5, 5);
console.log("result :", result);


function loginuserMessage(username = "sam"){ // default value
    if(username === undefined){
     console.log("pls enter a username");
     return
    }
return `${username} just logged in`
}

console.log( loginuserMessage("ankita"));  //ankita just logged in
console.log(loginuserMessage());  // undefined  sam just logged in



function calculateCartPrice(...num1){  // rest oprator
    return num1
}
console.log(calculateCartPrice(200, 300, 500));

const user = {
    name: "ankita",
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user)

// object in function

handleObject({   
    name: "sam", 
    price: 399
})


// array in function

const mynewarray = [200, 300, 400, 500]

function returnsecvalue(getarray){
    return getarray[1]
}
console.log(returnsecvalue(mynewarray));  // 300


// ************scope**********


function one(){
    const username = "ankita"

    function two(){
        const website ="youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);  // give error accesing outside fun two

    two()
}


one()  // ankita


