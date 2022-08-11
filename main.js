let arr = [
    {
        name: "Daniel Idialu",
        age: 25,
        class: "jss3",
        hobby: "singing"
    },
    {
        name: "Solomon Grandy",
        age: 23,
        class: "sss3",
        hobby: "Dancing"
    },
    {
        name: "Kelvin Powell",
        age: 29,
        class: "jss1",
        hobby: "Tennis"
    },
    {
        name: "Andrew Garfield",
        age: 19,
        class: "jss3",
        hobby: "Soccer"
    },
    {
        name: "mitchell Dennis",
        age: 14,
        class: "nur2",
        hobby: "Playing"
    },
];


const names = arr.map((init) =>{
   return init.name
});
console.log(names);

const age = arr.map(num =>{
    console.log(num.age);
})

const firstname = arr.map(first =>{
    console.log(first.name.split(" ")[0]);
})


arr.forEach((nae) =>{
    console.log(nae.name)
});


const sum = arr.reduce((currentage, total) => {
   return total.age + currentage
}, 0);
console.log(sum);


