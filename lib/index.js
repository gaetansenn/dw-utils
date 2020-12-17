const { join } = require('path')

module.exports = function () {
  // Inject plugin
  this.addPlugin({
    src: join(__dirname, './plugin.js'),
    fileName: 'dewib/utils/plugin.js'
  })

  // Inject utils
  this.addTemplate({
    src: join(__dirname, './utils.js'),
    fileName: 'dewib/utils/utils.js'
  })
}
