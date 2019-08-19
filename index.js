const FORM_URLENCODED = 'application/x-www-form-urlencoded'
const FORM_JSON = 'application/json'
const FORM_DATA = 'multipart/form-data'
const { RequestMethods } = require('./constants')
const qs = require('querystring');

const bodyParser = (req, res, next) => {
  if (req.method.toString() === RequestMethods.PUT || req.method.toString() === RequestMethods.POST) {
    const REQ_HEADER_CONTENT_TYPE = req.headers['content-type']
    if(!REQ_HEADER_CONTENT_TYPE) return next(new Error('cannot parse body data of null'))
    if (REQ_HEADER_CONTENT_TYPE.includes(FORM_URLENCODED)) {
      let body = ''
      req.on('data', chunk => {
        body += chunk.toString()
      })
      req.on('end', () => {
        req.body = qs.parse(body)
        return next()
      })
    } else if (REQ_HEADER_CONTENT_TYPE.includes(FORM_JSON)) {
      let body = ''
      req.on('data', chunk => {
        body += chunk.toString()
      })
      req.on('end', () => {
        req.body = JSON.parse(body)
        return next()
      })
    } else if (REQ_HEADER_CONTENT_TYPE.includes(FORM_DATA)) {
      return next(`Doesn't support ${FORM_DATA} yet.`)
    }
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      req.body = JSON.parse(body)
      return next()
    })
  }else{
    next();
  }
}

module.exports = bodyParser
