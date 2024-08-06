// Dates

let myDate = new Date();
console.log(myDate);            //2024-07-30T05:41:20.095Z\

console.log(myDate.toString());  //Tue Jul 30 2024 11:16:07 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Tue Jul 30 2024

console.log(myDate.toJSON());   //2024-07-30T05:46:07.907Z

console.log(myDate.toLocaleDateString());  // 30/7/2024

console.log(myDate.toISOString()); // 2024-07-30T05:50:05.320Z

console.log(typeof myDate);   // object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myDate1.toLocaleString());   // 23/1/2023, 5:03:00 am

let D = new Date("01-14-2024")
console.log(D.toLocaleString());  // 14/1/2024, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // 1722319267516
console.log(myDate1.getTime());


console.log(Date.now()); // in milisecond

let newDate = new Date()
console.log(newDate);          // 2024-07-30
console.log(newDate.getMonth());  // 6 month start from 0(jan)
console.log(newDate.getDay());    // 2 (tuesday )

