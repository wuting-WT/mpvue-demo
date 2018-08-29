function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const get = (url, data, timeout) => new Promise((resolve, reject) => {
  wx.requestTimer = setInterval(() => reject(new Error('fetch timeout!')), timeout || 10000)
  const clear = () => clearInterval(wx.requestTimer)
  wx.request({
    url: url,
    data: data,
    method: 'GET',
    success: res => {
      clear()
      resolve(res.data)
    },
    fail: error => {
      clear()
      reject(error)
    }
  })
})

const post = (url, data) => new Promise((resolve, reject) => {
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    success: res => resolve(res.data),
    fail: error => reject(error)
  })
})

const chooseImage = (count, complete, isSave) => new Promise((resolve, reject) => {
  wx.chooseImage({
    count: count,
    complete: complete,
    success: file => {
      const fileList = file.tempFilePaths
      if (isSave) {
        fileList.forEach(item => wx.saveFile({
          tempFilePath: item,
          success: res => resolve(res),
          fail: error => reject(error)
        }))
      } else {
        resolve(file)
      }
    },
    fail: error => reject(error)
  })
})

const previewImage = (urls, complete) => new Promise((resolve, reject) => {
  wx.previewImage({
    urls: urls,
    complete: complete,
    success: res => resolve(res),
    fail: error => reject(error)
  })
})

export {
  formatNumber,
  formatTime,
  post,
  get,
  chooseImage,
  previewImage
}
