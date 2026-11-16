////////////////// assignment-1-js//////////////

////////////////  A) part -1 ///////////////////



///////////////   problem 1 ////////////////////


// let str = "123";
// let num = Number(str)+7;
// console.log(num);



///////////////   problem 2 ////////////////////

// let num=0;
 
// let input = Boolean(num);   

// if (input === false) {
//     console.log("Invalid");
// } else {
//     console.log("Valid");
// }


///////////////   problem 3 ////////////////////

// for ( i = 1; i <= 10; i++) {
//     if (i%2==0){
//         continue;
//     }else{
//         console.log(i);
        
//     }
// }


//////////////////////   problem 4 ////////////////////

// let arr1 = [1,2,3,4,5]

// let arr2 = arr1.filter((num) => num % 2 === 0);

// console.log(arr2);



/////////////////////   problem 5 ////////////////////

// let arr1=[1,2,3]
// let arr2=[4,5,6]

// let arr=[...arr1,...arr2]

// console.log(arr);


////////////////////   problem 6 ////////////////////

// let day =2;

// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:        
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// };


///////////////////     problem 7 ////////////////////

// let arr = ["a", "ab", "abc"]; 

// let result = arr.map((arr) => {
    
//     return arr.length
// });

// console.log(result);


/////////////////////   problem 8 ////////////////////

// const result=(num)=>{
//      return num % 3 === 0 && num % 5 === 0 ? 
//      console.log("Divisible by both")
//      :console.log("invalid");

// }
// result(15);



//////////////////////   problem 9 ////////////////////

// const result=(num)=>{
//      return num * num;

// }
// console.log(result(5));


///////////////////////    problem 10 ////////////////////

// const person={
//     name:"john",
//     age:25
// }

// const output =({name,age}) => {
//     return `My name is ${name} and my age is ${age}`
// };

// console.log(output(person));


///////////////////////    problem 11 ////////////////////

// const result=(...numbers)=>{
//      return numbers.reduce((total,num) => total+num);

// }
// console.log(result(1,2,3,4,5));


////////////////////   problem 12 ////////////////////

// const message = () => {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve("success");
//       }, 3000);
//   })
// };

// message().then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });


////////////////////////    problem 13 ////////////////////

// let arr=[1,3,7,2,4]

// let result = (arr) => {
    
//      return Math.max(...arr);
// };

// console.log(result(arr));


///////////////////////    problem 14 ////////////////////

// const object={
//     name:"john",
//     age:30,
// }

// const result=(obj) =>{
//    return Object.keys(obj);

// }
// console.log(result(object));

 
//////////////////////   problem 15 ////////////////////


// let Text = "The quick brown fox";

// const result = (text) => {
//   return text.split(" ");
// };
// console.log(result(Text));


