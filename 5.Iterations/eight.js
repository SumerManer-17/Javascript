const array=[10,20,30,40]

const initialValue=1;

const sum=array.reduce((accumulator,currentValue)=>accumulator*currentValue,initialValue)

console.log(sum);

const myNums=[1,2,3,4]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
    
},1)
console.log(myTotal);

