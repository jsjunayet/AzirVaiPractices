const text ={
    "employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}


const person ={
  name:'Rahim'
}
let person2 = {...person}
person2.name="junayet"
console.log(person.name, person2.name
);
let immutable = "junayet"
let mutable = immutable
mutable ='Rahim'
console.log(immutable, mutable);

// let users = 
//   {  age: 25,name: "Rahim" }

// for (let user of users) {
//   console.log(user); 
// }
let person5 = {
  name: "Rahim",
  age: 25
};
console.log(Object.values(person5));