//1
let sum=0;
let i=1;
while(i<=5){
    sum=sum+i;
    i++;
}
console.log(sum);

//2
let countdown=[];
let j=5;
while(j>0){
    countdown.push(j);
    j--
}
console.log(countdown);

//3
let teaCollection=[]
let tea

do{
tea=prompt(`Enter your feavourite tea (tyoe "stop" to finish)`)

if (tea!=="stop"){
    teaCollection.push(tea)
}
}
while(tea!==stop);
console.log(teaCollection);
