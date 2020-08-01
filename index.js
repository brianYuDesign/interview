module.exports = function (input) {
  let stringResult = JSON.stringify(input)
    .replace(new RegExp("{", "g"), "")
    .replace(new RegExp("}", "g"), "")
    .split(":")
    .reverse()

  stringResult = stringResult.map(item => item.substring(1, item.length - 1))

  const result = {}
  const lastString = stringResult[stringResult.length - 1]
  stringResult.pop()

  stringResult.reduce((previousValue, current, currentIndex) => {
    if (currentIndex + 1 === stringResult.length) {
      return (previousValue[current] = String(lastString))
    }
    return (previousValue[current] = {})
  }, result)

  return result
}
