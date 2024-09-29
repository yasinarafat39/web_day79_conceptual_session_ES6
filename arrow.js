
// Normal Function
function info(){
    return 'Ki chai.....?'
}
const result = info();
console.log(result);

// Arrow Function
const info2 = () => 'ki chai....? from arrow';
console.log(info2());

const add = (x, y) => x + y;
console.log(add(2, 3));

const doubleIt = x => x * 2;
console.log(doubleIt(5));

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4));
