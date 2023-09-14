// 1. print 9th and 10th index of array

// let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function Findarray() {
//     let index = ary[9];
//     return index
// }
// console.log("9th Ary Is :", Findarray(ary));

// let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function FindIndex(ary) {
//     let index = ary[10];
//     return index;
// }

// console.log("10th Ary Is :", FindIndex(ary));
// ==================================================

// 2. print every element of array by map, for loop and for Each loop

// Example (1) Via For Loop

// let myAry = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let index = 0; index < myAry.length; index++) {
//     console.log(myAry[index]);
// }

// ----------------------------------------------------

// Example (2) Via For Each Loop

// let ary = [1, 2, 3, 4, 5, 6, 7, 8];

// function Printarray() {
//     ary.forEach((e) => {
//         return e;
//     })
//     return ary;
// }

// console.log("Arrays Every Element Is Here :", Printarray());

// --------------------------------------------------------------

// Example (3) Via map

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function printAryByMap() {
//     array.map((Element) => {
//         return Element
//     })
//     return array
// }

// console.log("Arrays Every Element Is Here :", printAryByMap());
// --------------------------------------------------------------------

// 3. change a value of 6th index with 100

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function changeVal(a) {
//     array[a] = 100;
//     console.log("Change Value Is Here :", array)
// }
// changeVal(6);
// -----------------------------------------------------------
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function AddOne(Tejas) {
//     array[Tejas] = {"Tejas": "Chaudhari"};
//     console.log("Change Value Is Here :", array);
// }

// AddOne(4);
// -----------------------------------------------------------
// 4. print a array till element value not grater then 100

// let array = [10, 25, 50, 75, 100, 120, 150, 200];

// for (var i = 0; i < array.length; i++){
//     if (array[i] <= 100) {
//         console.log(array[i]);
//     } else {
//         break;
//     }
// }
// ---------------------------------------------------------

// 5. add 1 in every element of an array

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 120, 123, 100, 101];

// let addArray = array.map((element) => {
//     return element + 1;
// });

// console.log("AddArray :", addArray)

// -----------------------------------------------------

// 6. add 0 in start of array

// Ex 01 => Add Zero In start Of The Array Using Function

// let array = [1, 2, 3, 4, 5, 6, 7];

// function addZero(a) {
//     array.unshift(a);
//     console.log("Add Zero Here", array)
// }
// addZero(0);

// Ex 02 => Add Zero In start Of The Array Using Simple Way

// let array = [1, 2, 3, 4, 5, 6, 7];

// array.unshift(0);
// console.log("Add Zero", array);

// -------------------------------------------

// 7. add  99 in end of array

// Ex 01 => Add 99 In The End Of The Array Using Simple Way

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// array.push(99);
// console.log(array);

// Ex 02 => Add 99 In End Of The Array Using Function

// function Add99End(a) {
//     array.push(a);
//     console.log("Add Value End :",array)
// }

//Add99End(99);

// -------------------------------------------------------

// 8. remove 1 element from start of  array
// Ex 01 => Using Simple Way

// let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ary.shift();
// console.log("Remove One Val In The Array :", ary);

// Ex 02 => Using Function Way

// function RemoveOneEle() {
//     ary.shift();
//     console.log("Removed One Value :", ary);
// }

//  RemoveOneEle();
// -------------------------------------------------

// 9. remove 1 element from end of array
// Ex 01 => Using Simple Way

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1111];

// array.pop();
// console.log(array);

// Ex 01 => Using Function Way

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, ];

// function RemoveEndVal() {
//     array.pop();
//     console.log("Remove End Value Is Here", array);
// }
// RemoveEndVal();
// ------------------------------------------------------
// 10. do sum of all value of an array with use of map, reduce and for-loop
// Ex = 01 Using reduce:

// let numbers = [1, 2, 3, 4, 5 ];

// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Reduce Via:", sum);

// Ex = 02 Using map and reduce:

// let numbers = [1, 2, 3, 4, 5 ];

// let sum = numbers.map(num => num).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log("Using map & reduce",sum);

// Ex = 03 Using a for loop:

// let array = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// console.log("Via For Loop :",sum)

// Ex = 04 Using a function & for loop:

// function Sum() {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total = total + array[i];
//   }
//   return total;
// }
// console.log("for loop: ", Sum(array));
// ------------------------------------------------

// 11. sort a array in acending decending

//let numbers = [100, 99, 98, 97, 96, 95, 94]; // 94, 95, 96, 97, 98, 99, 100

// function sort() {
//   let Sortarray = numbers.sort((a, b) => a - b);
//   return Sortarray;
// }

// console.log("SortArray :", sort());
// ---------------------------------------------------

// 12. reverce an array with use of method

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.reverse()

// console.log(array)
// ---------------------------------------------------

// 13. reverce an array with use of for-loop

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let reversed_array = []
// for (let i = array.length - 1; i >= 0; i--){
//     reversed_array.push(array[i]);
// }
// console.log("Reversed Array With Use Of For Loop :", reversed_array);
// ------------------------------------------------------
// Task 2
// 1. give all value which can devided by 2 - not use filter

// way no = 1 = via for loop
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (i = 2; i <= 12; i+= 2){
//     console.log(i);
// }

// way no = 1 = via for loop and using if condition

// for (let i = 0; i < array1.length; i++){
//     if (array1[i] % 2 == 0) {
//         console.log("all Value Which Divided By 2 :", array1[i])
//     }
// }
// ----------------------------------------------------------
// 2. give all value above 3 by use of filter

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 56];

// let fill = array1.filter((e) => {
//     return e > 3;
// })
// console.log("Value Above Three Is Here", fill)
// -------------------------------------------------------
// 3. give index of 56

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 56];

// let findIndex = array1.findIndex((e) => {
//   return e == 56;
// });
// console.log("FindValue Is Here", findIndex);
// ----------------------------------------------------------------
// 4. give true/false result when check given value is exists in array or not

// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 56];

// const valueCheck = 56;

// const exists = array1.includes(valueCheck);
// console.log(exists)
// ---------------------------------------------------------------
// task-3
// 1. ['urvish','am','i'] ==> want ['i','am', 'urvish'];

//Revres a string by loop

// let str = ['urvish','am','i'];
// let reversed_String = [];

// for (let index = str.length - 1; index >= 0; index--) {
//     reversed_String.push(str[index]);
// }
// console.log("reverce string By Loop", reversed_String)

//by map

// let str = ['urvish','am','i'];
// let reverceStr = str.map((str) => {
//     return str;
// }).reverse();

// console.log("reversed String By Map", reverceStr);
// ----------------------------------------------------------

// 2. want "i am urvish" without use join method

// const words = ["i", "am", "urvish"];

// const concatenatedString = words[0] + ' ' + words[1] + ' ' + words[2];

// console.log(concatenatedString);
// -------------------------------------------------------------------

// task-4

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i']
// by use of loop
