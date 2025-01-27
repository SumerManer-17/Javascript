const user={
    username:"Sumer",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
//console.log(this);


// function chai(){
//     let username="Sumer"
//     console.log(this.username);
    
// }
const chai=()=>{
    let username="Sumer"
    console.log(this);
    
}
chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=>  num1+num2
// const addTwo=(num1,num2)=>  (num1+num2) //implict return

const addTwo=(num1,num2)=>  (num1+num2)

console.log(addTwo(23,45));
