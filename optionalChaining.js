const data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}


console.log(data.Sophia?.id); // 33
// console.log(data.Sophia.study.data.id); // TypeError: Cannot read properties of undefined (reading 'id')
console.log(data.Sophia.study.data?.id); // undefined