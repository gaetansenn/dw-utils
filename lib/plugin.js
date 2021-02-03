export default (ctx, inject) => {
  // TODO: Add to @dewib/core
  ctx.$dewib = ctx.$dewib || {}

  // Inject utils
  ctx.$dewib.utils = {
    chainer: () => require('./utils').chainer(arguments),
    capitalize: () => require('./utils').capitalize(arguments)
  }

  inject('dewib', ctx.$dewib)
}
