const Mock = require('mockjs')
const Random = Mock.Random

module.exports = {
  'total': 10,
  'limit': 20,
  'page|+1': 1,
  'data|10': [
    {
      'id|+1': 1,
      'name': '@ctitle()',
      'price': '@integer(70, 200)',
      'created_time': '@date(T)',
      'place': () => `${Random.city()}-${Random.county()}`,
      'expected_num': '@integer(10, 20)',
      'apply_num': '@integer(10, 20)',
      'introduction': '@csentence(10, 20)',
      'isApply': false,
      'isDone': '@boolean()'
    }
  ]
}
