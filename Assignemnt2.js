//Assignment 2 is recreating native javascript functions without using the them.

const arr = [1, 2, 3, 4, 5, 6];

//forEach() method will iterate through the array without mutating it.
//1. Create a forEach function called myEach with callback.
console.log("this is part 1");
function myEach(array) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

const cb = (arg) => {
  console.log(arg);
};

myEach(arr);

//2.map()
console.log("\nthis is part 2");
function myMap(arr) {
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

myMap(arr);

//3.filter()
console.log("\nthis is part 3");
function myFilter(arr) {
  let newList = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb3(arr[i])) newList.push(arr[i]);
  }
  console.log(newList);
  return newList;
}

const cb3 = (args) => {
  if (args <= 4) {
    return true;
  }
};

myFilter(arr);

//4.some()
console.log("\nthis is part 4");
function mySome(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (cb4(arr[i])) return true;
  }
  return false;
}

const cb4 = (args) => {
  if (typeof args === "string") return true;
  else return false;
};

console.log(mySome(arr));

//5.every()
console.log("\nthis is part 5");
function myEvery(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb5(arr[i])) {
      return false;
    }
  }
  return true;
}
const cb5 = (args) => {
  if (typeof args === "number" && args * 2 < 10) {
    return true;
  } else return false;
};

console.log(myEvery(arr));

//6.reduce() //skipped for now
console.log("\nthis is part 6 which is skipped");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function myReduce(arr) {
  for (let i = 0; i < arr.length; i++) {}
}
const cb6 = (accumulator, currentValue) => {};

//7.includes()
console.log("\nthis is part 7");
function myIncludes(arr, n) {
  let isThere = false;
  for (let i = 0; i < arr.length; i++) {
    if (cb7(arr[i], n)) {
      isThere = true;
    }
  }
  return isThere;
}

const cb7 = (args, n) => {
  if (args === n) {
    return true;
  } else return false;
};
console.log(myIncludes(arr, 3));
console.log(myIncludes(arr, "tiger"));
console.log(myIncludes(arr, 33));

//8.indexOf()
console.log("\nthis is part 8");
function myIndexOf(arr, value, startPos) {
  let i;
  if (startPos === undefined) {
    i = 0;
  } else {
    i = startPos;
  }
  for (i; i < arr.length; i++) {
    if (cb8(arr[i], value)) {
      return i;
    }
  }
  return -1;
}

const cb8 = (args, value) => {
  if (args === value) {
    return true;
  }
};

console.log(myIndexOf(arr, 5, 2));
console.log(myIndexOf(arr, 9, 2));
console.log(myIndexOf(arr, 4));

//9.push()
console.log("\nthis is part 9");
function myPush(arr, value) {
  arr = arr.concat(value);
  return arr.length;
}

console.log(myPush(arr, 7));
console.log(arr);

//10.lastIndexOf()
console.log("\nthis is part 10");
function myLastIndexOf(arr, value) {
  let lastIndex;
  for (let i = arr.length - 1; i > 0; i--) {
    if (cb10(arr[i], value)) {
      lastIndex = i;
      return lastIndex;
    }
  }
  return -1;
}

const cb10 = (args, value) => {
  if (args === value) {
    return true;
  } else {
    return false;
  }
};

//const arr = [1, 2, 3, 4, 5, 6];
console.log(myLastIndexOf(arr, 5));
console.log(myLastIndexOf(arr, 2));
console.log(myLastIndexOf(arr, 3));
console.log(myLastIndexOf(arr, 555));
//11.Object.keys()
console.log("\nthis is part 11");

//12.Object.values()
console.log("\nthis is part 12");
