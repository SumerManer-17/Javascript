const user={
    username:"Sumer",
    loginCount:8,
    SignedIn:true,

    getUserDetails:function(){
        //console.log("Got user details from database");  
        console.log(`Username:${this.username}`);
         
    }
}
console.log(user.username);
console.log(user.getUserDetails());

