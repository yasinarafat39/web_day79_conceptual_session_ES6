
const arr1 = [1, 2, 3];

const arr2 = [...arr1];
arr2.push(10)
console.log(arr2);


arr1.push("Array 1")
console.log(arr1);


//  object
const student = {
    id: 2,
    age: 21,
    subject: "BBS"
}

const yasin = {...student}
console.log(yasin);