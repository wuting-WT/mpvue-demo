const jobs = require('./jobs')
const losts = require('./losts')

module.exports = {
  'GET /api/jobs': jobs,
  'GET /api/losts': losts
}
