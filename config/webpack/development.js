process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// const config = environment.toWebpackConfig()
// const util = require('util')
// console.log(util.inspect(config, false, null, true /* enable colors */))

// https://inside.pixiv.blog/subal/4615
// https://medium.com/studist-dev/goodbye-webpacker-183155a942f6
// https://qiita.com/mizchi/items/2e614d184fe2577f8256

module.exports = environment.toWebpackConfig()
