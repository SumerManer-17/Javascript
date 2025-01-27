function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,300,400));
function calculateCartPrice2(num2){
    return num2
}
console.log(calculateCartPrice2(200,300,400));


const user={
    username:"Sumer",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)