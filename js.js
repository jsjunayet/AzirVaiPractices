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

const statu = false
// promise defination
const promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    if(statu){
      resolve("task 2")
    }else{
      reject("faild")
    }
    
  }, 2000);
})
// promise call
promise.then(function(values){
  console.log(values);
}).catch(function(err){
  console.log(err);
})

function enrollPromise() {
  console.log('Course enrollment is in progress');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let paymentSuccess = true;

      if (paymentSuccess) {
        resolve("Enrollment successful");
      } else {
        reject("Payment failed");
      }
    }, 1000);
  });
  return promise
}
function progessPromise() {
  console.log('progess is in progress');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let mark = 70;

      if (mark>=80) {
        resolve();
      } else {
        reject("NO certificate");
      }
    }, 1000);
  });
  return promise
}
function getCertificate (){
  console.log('preparing your certificate');
  const promise = new Promise(function(resolve){
    setTimeout(() => {
      resolve('get certificate');
    }, 100);
  })
  return promise
}
enrollPromise()
.then(progessPromise)
.then(getCertificate)
.then(function(values){
  console.log(values);
})
.catch(function(err){
  console.log(err);
})


// callBack example

function getStudent(id, callback) {
  setTimeout(() => {
    console.log("Fetching student...");
    callback({ id: id, name: "Rahim" });
  }, 1000);
}

function getCourses(student, callback) {
  setTimeout(() => {
    console.log("Fetching courses for", student.name);
    callback(["JS", "React", "Node"]);
  }, 1000);
}

// Callback Hell
getStudent(101, function(student) {
  getCourses(student, function(courses) {
    console.log("Courses:", courses);
  });
});

// promise example 
function getStudent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching student...");
      resolve({ id: id, name: "Rahim" });
    }, 1000);
  });
}

function getCourses(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching courses for", student.name);
      resolve(["JS", "React", "Node"]);
    }, 1000);
  });
}

getStudent(101)
  .then(student => getCourses(student))
  .then(courses => console.log("Courses:", courses))
  .catch(err => console.log("Error:", err));


// async await example

  function getStudent(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching student...");
        resolve({ id: id, name: "Rahim" });
      }, 1000);
    });
  }
  
  function getCourses(student) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching courses for", student.name);
        resolve(["JS", "React", "Node"]);
      }, 1000);
    });
  }
  
  async function showStudentCourses() {
    try {
      const student = await getStudent(101);
      const courses = await getCourses(student);
      console.log("Courses:", courses);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  showStudentCourses();
  