const Mock = require('mockjs')
const Random = Mock.Random

module.exports = {
  'data|1-66': [
    {
      'id|+1': 1,
      'introduction': '@csentence(10, 100)',
      'imgList': () => {
        let baseArray = [
          'http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg',
          'https://pic.qqtn.com/up/2018-5/15258307613400205.jpg',
          'http://img06.tooopen.com/images/20160921/tooopen_sy_179583447187.jpg',
          'http://pic.sc.chinaz.com/files/pic/pic9/201610/apic23847.jpg',
          'http://www.shuoshuokong.com/uploads/allimg/161220/1-161220135105.jpg',
          'http://www.51pptmoban.com/d/file/2015/11/27/2123f7686d354b4d1b67b99a7f657747.jpg'
        ]
        let resultArray = []
        for (let i = 0; i < 3; i++) {
          resultArray.push(baseArray[Random.integer(0, 5)])
        }
        return resultArray
      }
    }
  ],
  total: 66
}
