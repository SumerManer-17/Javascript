const userEmail="sumer@ai"

if (userEmail){
    console.log("got user email");
    
}
else{
    console.log("Dont have user email");
    
}

// Falsy values:// false,0,-0,BigInt 0n,"",null,undefined,NaN

//Truthy value:"0","false",'false' in qote it is truthy

//Nullish Coalescing Operator (??):null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 20
//val1=undefined ?? 15
val1=null ?? 10 ?? 15

console.log(val1);

//Terniary Operator

// condition ? true:false

const ice=100
ice<=80 ? console.log("Less than 80"): console.log("More than 80");
;
