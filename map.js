const oddNumbers = [1, 3, 5, 7, 9];

// map()
/* map() return a new array but not change the original array */
/* map() take 3 parameters same to forEach() each Array item, index number and whole array */
const evenNumbers = oddNumbers.map(num => num + 1);
console.log(evenNumbers);