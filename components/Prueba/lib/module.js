// import { createMiddleware } from './module.middleware'
// import plugin from './module.plugin'

const optionName = 'Prueba'

module.exports = function(moduleOptions) {
  const consola = require('consola')
  const options = Object.assign(
    {},
    this.options[optionName],
    moduleOptions || {}
  )
  const { enabled } = options
  if (enabled === false) {
    consola.info('Skip activation of Prueba module')
    return false
  }
  consola.info('Add Prueba module to server middleware')
  return true
}

module.exports.meta = require('../package.json')
