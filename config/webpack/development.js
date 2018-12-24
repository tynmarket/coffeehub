process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// const config = environment.toWebpackConfig()
// const util = require('util')
// console.log(util.inspect(config, false, null, true /* enable colors */))

module.exports = environment.toWebpackConfig()
