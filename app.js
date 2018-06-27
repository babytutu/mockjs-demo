const Koa = require('koa')
const Mock = require('mockjs')

const app = new Koa()
const Random = Mock.Random

const template = {
  string: {
    'string1|1-2': 'abc',
    'string2|3': 'abc',
  },
  number: {
    'number1|1-10.1-2': 1,
    'number2|1.1-2': 1,
    'number3|1.3': 1,
    'number4|1.10': 1.123
  },
  boolean: {
    'boolean1|1': false,
    'boolean2|1-3': false,
  },
  object: {
    'object1|1': {
      key1: 'value1',
      key2: 'value2',
    },
    'object2|2-3': {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
      key5: 'value5',
    },
  },
  array: {
    'list1|1': [1,2,3,4,5,6,7],
    'list2|+1': [1,2,3,4,5,6,7],
    'list3|1-2': [1,2,3,4,5,6,7],
    'list4|2': [1,2,3],
  },
  regexp: {
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\w\W\s\S\d\D/,
    'regexp3': /\d{5,10}/,
  },
  placeholder: {
    city: '@city(true)',
    cname: '@cname()',
    color: '@color()',
    image: '@image()',
    boolean: '@boolean()',
    character: '@character()',
    pick: '@pick(a,b,c)',
  },
  Random: {
    boolean: Random.boolean(),
    natural: Random.natural(),
    integer: Random.integer(),
    float: Random.float(),
    character: Random.character(),
    string: Random.string(),
    range: Random.range(1, 10, 2),
    date: Random.date(),
    datetime: Random.datetime(),
    now: Random.now(),
    image: Random.image(),
    color: Random.color(),
    url: Random.url('http'),
    upper: Random.upper('hello')
  }
}

app.use(async ctx => {
  const url = ctx.url.replace('/', '')
  ctx.body = Mock.mock(template[url] ? template[url] : template)
})

console.info('open: http://localhost:3000')

app.listen(3000)