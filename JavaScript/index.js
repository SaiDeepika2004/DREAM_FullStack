// 26/07/24 
// all types of console
console.log("hello world! 1");
console.info("my info");
console.warn("my warning");
console.error("my error");
console.table([0, 1, 2, 3]);

// document object in JS
document.getElementById("college");
document.getElementsByClassName("city");
document.querySelector

// objects
cat = {
    legs: 4,
    ears: 2,
    name: 'tom'
};
// // access    .    [string] 
console.log(cat.legs); // 4
console.log(cat["name"]); // 'tom'
// // update
cat.name = "kio1";
console.log(cat.name); // kio1
cat["name"] = "kio2";
console.log(cat.name); // kio2
// add new values
cat.color = "black";
cat["age"] = 5;
console.log(`my cat who's name is ${cat.name} and its color is ${cat.color}`);
console.log(cat);

// array
let a = [1, 2, 3, 4] // creation of array
console.log(a);
console.log(a[0]); // access using index
a.push(20);
a.push(20);
console.log(a);

// nested array
a = [[1, 2], [3, 4], [5, 6]];
console.log(a[0]); // [1, 2]
console.log(a[0][0]); // 1
a = [
    { name: 'nobita', height: 120 },
    { name: 'doremon', height: 113 },
    { name: 'geon', height: 150 }
];
console.log(a[0]); // { name: 'nobita', height: 120 }
console.log(a[0].name); // nobita

// nested object
obj = {
    address: {
        vehicles: ['honda bike', 'audi car'],
        city: {
            district: 'salem',
            town: 'sankari',
            pincode: 60012
        }
    }
};
// // correct 
console.log(obj.address.vehicles); // 123
console.log(obj.address.city.district); // salem
console.log(obj.address.city.town); // sankari
console.log(obj.address.city.pincode); // 60012
console.log(obj.address.city.street); // undefined
console.log(obj.address.sity.street); // error


// semicolon is option in javascript.
// but we must keep semicolon at end of the javascript.
