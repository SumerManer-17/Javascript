//1

let teas=["green tea","black tea","chai","oolong tea"]
let selectedTeas=[];

for(let i=0;i<teas.length;i++){
    selectedTeas.push(teas[i])
    if(teas[i]==="chai"){
        break;
    }
}
// console.log(selectedTeas);

//2
let Cities=["London","New york","Paris","Berlin"];
let visitedCities=[]
for (let i=0;i<Cities.length;i++){
    if(Cities[i]==="Paris"){
        continue;
    }
    visitedCities.push(Cities[i])
}
// console.log(visitedCities);

//3 Use of For of loop

let numbers=[1,2,3,4,5]
let smallNumbers=[]

for (const num of numbers) {
   if(num===4){
    break;
   } 
   smallNumbers.push(num);
}
// console.log(smallNumbers);

//For of looop
let teaTypes=["chai","green tea","herbal tea","black tea"];
let preferredTeas=[]

for (const tea of teaTypes) {
    if(tea==="herbal tea"){
        continue;
    }
    preferredTeas.push(tea)
}
// console.log(preferredTeas);

//5 Use of for-in loop
let citiesPopulation={
    "London":8900000,"New York":8400000,"Paris":2200000,"Berlin":3500000
}

let cityPopulation={};

for (const city in citiesPopulation) {
     console.log(city)
}