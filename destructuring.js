

// Arry

/* not mendatory to maintain element name but you must maintain element indexing. some how if skip any element just separate by comma. */
const friends = ["Mahfuzur Rahman Naeem", "Arman Zamani", "Mufayel Ahmmed", "Muzammel"];
const [, , z] = friends;
// console.log(x);
// console.log(y);
console.log(z);




// Object

/* not mendatory to maintain property indexing but you must maintain property name according to object property name. If you skip any property than no need to add property name just skip it. And if you rename property name at first give the original name and add collon (:) than add your new name as you like. */
const student = {
    id: 2,
    age: 21,
    subject: "BBS",
    contact: {
        phone: 25646641,
        email: "example@gmail.com"
    }
}

// const {id, subject, age:boyosh, contact} = student;
// console.log(id);
// console.log(boyosh);
// console.log(subject);

// Nested Object
// const {email, phone:mobile} = contact;
// console.log(mobile);
// console.log(email);
const {id, subject, age:boyosh, contact:{email, phone:mobile}} = student;
console.log(mobile);
console.log(email);