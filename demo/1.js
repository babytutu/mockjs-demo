const Mock = require('mockjs')
const Random = Mock.Random

const template = {
  name: Random.cname()
}
console.log(Mock.mock(template))
// => {name: "李雷"}