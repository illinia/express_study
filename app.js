// const amount = 9;

// if (amount < 10) {
//   console.log('msall number');
// } else {
//   console.log('large number');
// }

// console.log(`hey it's my first node app`)

const { john, peter } = require('./4-name');
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(john);
sayHi(peter);