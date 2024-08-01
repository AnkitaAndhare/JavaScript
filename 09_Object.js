// singleton by constructor
// object.create

// object literals

// const mysym = Symbol("key1")

const Jsuser = {
  name: "ankita",
  "full name" : "Ankita Andhare",
  [mysym] : "mykey1",
  age: 22,
  location: "Pune",
  email: "ankita1@Jsuser.com",
  islogged: false,
  lastlogindays: ["monday", "saturday"], // array
};

console.log(Jsuser.email);   //ankita1@Jsuser.com
console.log(Jsuser["email"]); //ankita1@Jsuser.com
console.log(Jsuser["full name"]); // Ankita Andhare


console.log(Jsuser[mysym]);

Jsuser.email = "ankita222@.com"
console.log(Jsuser.email);

// Object.freeze(Jsuser)   // now we can't modify object 


//***************function**************//

Jsuser.greeting = function(){
    console.log(`hello js user, ${this.name} `);
}

console.log(Jsuser.greeting);  // [Function (anonymous)]
console.log(Jsuser.greeting()); //hello js user, ankita


//*************************object by constructor ************/

//const newuser = new Object()
const newuser  = {}

 newuser.id = "123abvc"
 newuser.name = "sam"
 newuser.islogged = false

 console.log(newuser); //{ id: '123abvc', name: 'sam', islogged: false }

 const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname : "ankita",
            lastname : "andhare"
        }
    }
 }

 console.log(regularUser.fullname.userfullname.firstname); // ankita

 const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3 === obj1)  //true 
console.log(obj1);


const obj4 = {...obj1, ...obj2}
console.log(obj4);

console.log(newuser); //{ id: '123abvc', name: 'sam', islogged: false }

console.log(Object.keys(newuser));  // array of keys[ 'id', 'name', 'islogged' ]
console.log(Object.values(newuser));

console.log(newuser.hasOwnProperty('name')); // true


// ************************** Destructuring of oject **********//

const course = {
    cname : "js",
    price:"999",
    cinstructor: "abc"
}

const{cinstructor : instructor} = course  // rename and destructing 
console.log(instructor);
