export default (ctx, inject) => {
  // TODO: Add to @dewib/core
  ctx.$dewib = ctx.$dewib || {}

  // Inject utils
  ctx.$dewib.utils = {
    chainer: () => require('./utils').chainer(arguments)
  }

  inject('dewib', ctx.$dewib)
}
