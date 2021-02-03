
export function chainer (beforeThat, afterThat, beforeMethods, afterMethods) {
  return {
    before (methods, that) {
      beforeMethods = Array.isArray(methods) ? methods : [methods]
      beforeThat = that

      return chainer(beforeThat, afterThat, beforeMethods, afterMethods)
    },
    after (methods, that) {
      afterMethods = Array.isArray(methods) ? methods : [methods]
      afterThat = that

      return chainer(beforeThat, afterThat, beforeMethods, afterMethods)
    },
    async call (methods, that) {
      await Promise.all(beforeMethods.map(async method => await method.call(beforeThat || that)))
      await Promise.all((Array.isArray(methods) ? methods : [methods]).map(async method => await method.call(that)))
      await Promise.all(afterMethods.map(async method => await method.call(afterThat || that)))

      return chainer(beforeThat, afterThat, beforeMethods, afterMethods)
    }
  }
}

// Capitalize a string
export function capitalize (string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
}
