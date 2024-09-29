

const student = {
    id: 2,
    age: 21,
    subject: "BBS",
    contact: {
        phone: 25646641,
        email: "example@gmail.com"
    },
    "my-address": "Kishoreganj"
}

// dot Notation
console.log(student.age);
console.log(student.id);
console.log(student.contact);
// console.log(student."my-address"); // Error and not work



// brackets Notaiton
console.log(student["my-address"]);

