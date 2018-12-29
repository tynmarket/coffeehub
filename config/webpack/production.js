process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

// const config = environment.toWebpackConfig()
// const fs = require('fs');
// const util = require('util')
// const log_file = fs.createWriteStream(__dirname + '/../../log/webpack.log', {flags : 'w'});
// log_file.write(util.inspect(config, false, null))

module.exports = environment.toWebpackConfig()
