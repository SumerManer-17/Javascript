const arr=[1,2,3,4,5]

for (const i of arr) { //It is a for of loop
    console.log(i);
    
}

const greeting="Hello World!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}

//Maps

const map=new Map()
map.set('IND',"INDIA")
map.set('UAE',"United Arab Emirates")
map.set('KSA',"Kingdom of Saudia")

//console.log(map);

for (const [key, value] of map){
    console.log(key,':-',value);
}

const myObject ={
    game1:'NFS',
    game2:'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}