const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()    
    },3000)
})

promiseOne.then(function(){
    console.log("Promise consumed");    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved"); 
})


const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})    
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Sumer",password:"123"})
        } 
        else
        {
            reject('Error:something went wrong')
        }
    },500)
})

const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("The promise is either resolved or rejected")
)

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('Error:something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response);
    
}

consumePromiseFive()

async function getAllUsers(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/user')
        const data=await response.json()
        console.log(data);
    } catch (error){
        console.log("E: ",error);    
    }
    
}
getAllUsers()
