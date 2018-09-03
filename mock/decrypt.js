const WXBizDataCrypt = require('./WXBizDataCrypt')

const decrypt = ({appId, sessionKey, encryptedData, iv}) => {
  const pc = new WXBizDataCrypt(appId, sessionKey)
  return pc.decryptData(encryptedData, iv)
}

module.exports = decrypt
