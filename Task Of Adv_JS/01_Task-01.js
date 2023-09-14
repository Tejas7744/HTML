/*
-> Want to re - use variable name so which variable declare method should i use

-------------------------------------------------------------------------------

01=> give the list which variable name not works in js

1. let a = 0  Working 
2. let "a"=0  Not Work
3. let 'a'=0  Not Work
4. let `10`=0 Not Work
5. let 1=0    Not Work

--------------------------------------------------------------------------------

let x = 100
var y = 100
const z = 100
const m
{
      x= 90
      y= 90
      z= 90
      console.log(x) ___________________ point-x1
      console.log(y) ___________________ point-y1
      console.log(z) ___________________ point-z1
    } 
    
    console.log(x) ___________________ point-x2
    console.log(y) ___________________ point-y2
    console.log(z) ___________________ point-z2
    console.log(m) ___________________ point-m

what will print at x1- 90
what will print at y1- 90
what will print at z1- 90
what will print at x2- 100
what will print at y2- 100
what will print at z2 - 100

SyntaxError: Missing initializer in const declaration

------------------------------------------------------------------------------------------
-> task-2

console.log(x) ___________________ point-x2
console.log(y) ___________________ point-y2
console.log(z) ___________________ point-z2

{
      let x = 100 
      var y = 100
      const z = 100
}

console.log(x) ___________________ point-x1
console.log(y) ___________________ point-y1
console.log(z) ___________________ point-z1


what will print at x1-Undefind
what will print at y1-100
what will print at z1-Undefind
what will print at x2-Undefind
what will print at y2- Undefined
what will print at z2-Undefind

ReferenceError: x is not defined
------------------------------------------------------------------------------------------
*/
