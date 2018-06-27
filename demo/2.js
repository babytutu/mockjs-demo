const Mock = require('mockjs')

// Number
const template = {
  'number1|1-10.1-2': 1,
  'number2|1.1-2': 1,
  'number3|1.3': 1,
  'number4|1.10': 1.123
}

console.log(Mock.mock(template))

// =>
// {
//   number1: 2.4,
//   number2: 1.8,
//   number3: 1.888,
//   number4: 1.1238143732
// }