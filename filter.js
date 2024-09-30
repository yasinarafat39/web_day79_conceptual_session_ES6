const oddNumbers = [1, 3, 5, 10, 7, 9, 8];

// filter()
/* filter return those element that match his condition and return empty array if condition no match each element. That means filter always return truethy value */
/* also filter() method can take multiple condition */
const result = oddNumbers.filter((item) => item > 5 && item % 2 === 0);
console.log(result);