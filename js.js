// const text ={
//     "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]
// }


// const person ={
//   name:'Rahim'
// }
// let person2 = {...person}
// person2.name="junayet"
// console.log(person.name, person2.name
// );
// let immutable = "junayet"
// let mutable = immutable
// mutable ='Rahim'
// console.log(immutable, mutable);

// // let users = 
// //   {  age: 25,name: "Rahim" }

// // for (let user of users) {
// //   console.log(user); 
// // }
// let person5 = {
//   name: "Rahim",
//   age: 25
// };
// console.log(Object.values(person5));

 function a(){
  console.log("hello world");
}
const x = Math.max.apply(null, [1,2,3]);
console.log(x);


// callBack
const paymentSucess =true
const mark = 70

function enroll (callBack)
{
  console.log('course Enrollment in is Progress')
  setTimeout(() => {
    if(paymentSucess){
      callBack()
    } else{
      console.log("payment faild")
    }
  }, 2000);
}

function progress (callBack){
  console.log('course on progess')
  setTimeout(() => {
    if(mark>=80){
      callBack()
    }else{
      console.log('You could not get enough mark to the certicate');
    }
  },3000);
}

function getCertificate (){
  console.log('preparing you cetificate');
  setTimeout(function(){
    console.log('congrate you certificate')
  })
}
enroll(function(){
  progress(getCertificate)
})