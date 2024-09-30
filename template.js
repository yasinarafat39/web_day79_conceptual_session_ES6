// const name = "Yasin Arafat";
// let age = 21;
// let job = "bekar"

// const sentence = "amar name " + name + ". amar boyos " + age + ". ami ekhon " + job;
// // console.log(sentence);

// console.log(`amar name ${name}. amar boyos ${age}. Ami ekhon ${job}`);


const student = {
    id: 2,
    age: 21,
    name: "Yasin Arafat",
    subject: ["Bangla", "English", "Math"],
    contact: {
        phone: 25646641,
        email: "example@gmail.com"
    }
}

console.log(`Amar naam ${student.name}. Amar subject gulo holo ${student.subject.map(sub => sub).join(', ')}`);