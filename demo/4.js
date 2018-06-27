const Mock = require('mockjs')
const Random = Mock.Random

console.log(Random.email())
// => "n.clark@miller.io"
console.log(Mock.mock('@email'))
// => "y.lee@lewis.org"