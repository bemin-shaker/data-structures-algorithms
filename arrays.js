let array = [1, 2, 3];
console.log(Math.max(...array));

//Add element to the end of the array
array.push(4);
array.push(5);
array.push(6);

//Add element to the start of the array
array.unshift(0);

//Remove first element from array
array.shift();

//Remove last element from array
array.pop();

//Returns section of array
array.slice(0, 2);
console.log(array.slice());

//Calls callback function on each element in array
array.map((element) => element * 2);

//Returns the elements that meet the condition in callback function
array.filter((n) => n % 2 === 0);

//walks through the array element-by-element,
//at each step adding the current array value to the result from the previous step
array.reduce((a, n) => a + n, 0);

//Reverse elements
array.reverse();

console.log(array);

//Creates array feom string
let arr = Array.from("test");
let arr2 = "test".split("");

//Combines all elements from array separated by the reducer/parameter
console.log(arr.join(""));
console.log(arr2.join(""));
