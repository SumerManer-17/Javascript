//Immediately Invoked function expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

//---------- This is named IFEE
    (function chai(){
            console.log(`DB Connected`);
    })();//Semi colon is very imp for breaking

//     (()=>{
//         console.log(`DB CONNECTED TWO`);
        
//     }
// )()

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
}
)("Sumer")