function setUsername(username){
this.setUsername = username;
console.log(" setusername called");
}

function createUser(username, email, password){
    // Call setUsername using the current instance (this)
    setUsername.call(this,username);

    this.email = email;
    this.password = password;
}


const result = new createUser("Ankita", "ankita11@fb.com", "123");
console.log(result);
