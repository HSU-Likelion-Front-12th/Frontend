// console.log(`${a}test`); //e
// console.log(`${b}test`); //
// let a = 1;
// var b = 2;
// var b = 3;
// console.log(`${b}test`);



const user = {
  id: "user01",
  age: "20",
  display1: function () {
    return `name : ${this.id} age : ${this.age}`;
  },
  display2: (id, age) => {
    return `name : ${this.id} age : ${this.age}`;
  },
};

console.log(user.display1());
console.log(user.display2(user.id, user.age));

// //바인딩차이
// function test() {
  
//   console.log('mytest');
// }

// const test = () => {
//   console.log('test');
// }