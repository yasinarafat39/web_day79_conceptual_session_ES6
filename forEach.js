const oddNumbers = [1, 3, 5, 7, 9];

// Normal for of loop
for(let num of oddNumbers){
    console.log(num);
}


// using forEach()
/* forEach() method do not return anything. And do not change the main array */
/* the callback function of forEach() method take 3 parameters eachEelment of Array, index number of elment and whole Array */
/*  you must maintain these parameter serial number */
oddNumbers.forEach((eachItem, indexNum, fullArray) => console.log(`${eachItem}, ${indexNum}, ${fullArray}`))
