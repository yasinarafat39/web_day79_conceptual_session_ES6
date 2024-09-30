const oddNumbers = [1, 3, 5, 10, 7, 9, 8];

// let find = null;

// for(let item of oddNumbers){
//     if(item > 5){
//         find = item;
//         break;
//     }
// }

// console.log(find);


// find()
/* find() method return only one element that match as a first and find() return undefined if find no element that match his condition */
/* find() can take multiple conditions */

const result = oddNumbers.find((item) => item > 5 && item < 10 && item % 2 === 0);
console.log(result);