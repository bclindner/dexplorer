/**
 * Debouncing function, similar to the one in Underscore.js.
 * Prevents a function from being run too often, usually for performance reasons.
 */
const debounce = (func, waitTime) => {
  let timeout
  const fn = function () {
    clearInterval(timeout)
    const ctx = this
    const args = arguments
    timeout = setTimeout(function () {
      timeout = null
      func.apply(ctx, args)
    },
    waitTime
    )
  }
  return fn
}
export default debounce
