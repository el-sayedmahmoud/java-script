B) part 2 

1) What is the difference between forEach and for...of? When would you use each?

forEach ==> Executes a callback function for each element in an array. ( cannot be stopped)

Usage ==> execute a function on every element of an array without exiting the loop.

for...of ==> loop is used to iterate over the enumerable keys of an object . (can stop using break & continue)

Usage ==> control over the loop, such as stopping or skipping iterations 

-----------------------------------------------------------

2)  What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples

hoisting ==> بيتم تعريف المتغير او الدالة قبل تنفيذ الكود
            allowing some variables (var) and functions (Function declarations)

examples 
                  (var examble)

console.log(x);          why              var x ; 
var x = 10;              ===>             console.log(x)
                                          x= 10  
output ==> undefined                                  
      
                  (function declaration) is full hoisting

sayHello();

function sayHello() {
    console.log("Hello");
}

output ==> Hello 

Temporal Dead Zone (TDZ) ==> the period between entering a scope and initializing a let or const variable.

examples

console.log(b); 
  let b = 2;    

output ==> ReferenceError

------------------------------------------------------------------------------

3) What are the main differences between == and ===?

( == ) ==> Compares values after performing type coercion

( === ) ==> compares both value and data type

------------------------------------------------------------------------------

4)  Explain how try-catch works and why it is important in async operations

    
    try {
    let result = x + 10;          الكود اللي ممكن يحصله خطا 

    } catch (error) {             بيدخل هنا لو الكود فيه خطا   
    console.log("Error"); 
    }
     
     
    Try-catch is important in async operations because it handles errors that may occur

------------------------------------------------------------------------------

5) What’s the difference between type conversion and coercion? Provide examples of each

type conversion ==> changing a value from one data type to another manually

example 
console.log(Number("10"));


type coercion ==> JavaScript automatically converts a value from one data type to another

example
console.log("15" - 7);