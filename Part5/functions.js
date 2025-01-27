//1
/*function greet(name) {
    console.log(`Hello ${name}`);    
}
greet("Sumer")*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
    
}
let teaOrder=makeTea("lemon tea");
// console.log(greet);

//2
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder()
}

let orderConfirmation=orderTea("Chai")
// console.log(orderConfirmation);

//3 Arrow Functions
/*const calculateTotal=(price,quantity)=>{
price*quantity
}*/
const calculateTotal=(price,quantity)=>price*quantity

let totalCost=calculateTotal(500,10)
console.log(totalCost);

//4
function makeTea(){}
function processTeaOrder(){
    
}