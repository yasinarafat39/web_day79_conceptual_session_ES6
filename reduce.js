const numbers = [1, 3, 5, 10, 7, 9, 8];

// let sum = 0;
// for(let num of numbers){
//     sum += num;
// }
// console.log(sum);

// let multiple = 1;
// for(let num of numbers){
//     multiple *= num;
// }
// console.log(multiple);

const result = numbers.reduce((previous, current) => previous + current , 0)
console.log(result);

/*
 0 + 1 = 1
 1 + 3 = 4
 4 + 5 = 9
 9 + 10 = 19
 19 + 7 = 26
 26 + 9 = 35
 35 + 8 = 43
*/


const numbers2 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
const total = numbers2.reduce((prev, current) => prev + current.a , 0)
console.log(total);
const total2 = numbers2.reduce((prev, current) => prev * current.a , 1)
console.log(total2);