//Assignment 2 is recreating native javascript functions without using the them.

const arr = [1, 2, 3, 4, 5, 6];

//forEach() method will iterate through the array without mutating it.
//1. Create a forEach function called myEach with callback.
console.log("this is part 1");
function myEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}
const cb = (arg) => {
  console.log(arg);
};

myEach(arr, cb);

//2.map()
console.log("\nthis is part 2");
function myMap(arr, cb2) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    returnArr.push(cb2(element));
    console.log(returnArr[i]);
  }
  return returnArr;
}

const cb2 = (args) => {
  return args * 2;
};

myMap(arr, cb2);

//3.filter()
console.log("\nthis is part 3");

//4.some()

//5.every()

//6.reduce()

//7.includes()

//8.indexOf()

//9.push()

//10.lastIndexOf()

//11.Object.keys()

//12.Object.values()
