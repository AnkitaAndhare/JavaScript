const accountId = 1334   // no redeclaration or modification
let accounrEmail = "ankita@google.com"   // modify but no redeclaration
var accpass = "1234" //modify and redeclare also
acccity = "jaiput"

let accstate;
console.log(accstate);

console.log(accountId);

accounrEmail = "abc@c.com"
accpass = "550"
acccity = "pune"

console.log(accountId)

console.table([accountId, accounrEmail, accpass, acccity])
 /*
prefer not use var due to block scope and fumctional scope
; is not compulsory 

 */