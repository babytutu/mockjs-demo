const Mock = require('mockjs')

// @
const template = {
  city: '@city(true)',
  cname: '@cname',
  color: '@color',
}

console.log(Mock.mock(template))

// =>
// {
//   city: "广东省 东莞市",
//   cname: "范芳",
//   color: "#a1f279",
// }