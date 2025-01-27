let teaFlavour=["green tea","black tea","oolong tea"]

const firsttea=teaFlavour[0]

//2

let cities=["London","Tokyo","Paris","NewYork"];
const favoriteCity=cities[2];

//3 use push method to add element
let citiesVisited=["Mumbai","Sydney"]
citiesVisited.push("Berlin");
console.log(citiesVisited);

//4 Remove the last elemnt of array using pop method

let teaOrder=["cahi","iced tea","mathca","earlgrey"]
teaOrder.pop();
console.log(teaOrder);

//5 create the softcopy
let popularteas=["green tea","oolong tea","chai"]
let softCopyTeas=popularteas;
popularteas.pop();
console.log(popularteas);
console.log(softCopyTeas);

//6hardcopy
let topCities=["Berlin","Singapore","Newyork"]
let hardCopyCities=[...teaOrder];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

//7Merge two arrays
let europeanCities=["Paris","Rome"];
let asianCities=["Riyadh","Mumbai"];

let all=europeanCities.concat(asianCities);
console.log(all);

//8length of array and store 
let teaMenu=["Masala chai","oolong tea","green tea","earl grey"]

let menuLength=teaMenu.length
console.log(menuLength);

//9 check if london is in array or not

let cityBucketlist=["Tokyo","London","Cape Town","Bali"]

let isLondonInList=cityBucketlist.includes("London");
console.log(isLondonInList);



