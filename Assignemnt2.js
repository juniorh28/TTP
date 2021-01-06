//Assignment 2 is recreating native javascript functions without using the them.

//forEach() method will iterate through the array without mutating it.
//1. Create a forEach function called myEach with callback.

function myEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}
const cb = (arg) => {
  console.log(arg);
};

const arr = [1, 2, 3, 4, 5, 6];
myEach(arr, cb);

//2.map()

//3.filter()

//4.some()

//5.every()

//6.reduce()

//7.includes()

//8.indexOf()

//9.push()

//10.lastIndexOf()

//11.Object.keys()

//12.Object.values()
