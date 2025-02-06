const math = require('./lib/math.js')
const sum = math.sum(1,2 )
const expression = 'sqrt(4^2 + 3^2)'
const expressionResult = math.evaluate(expression)

console.log('a soma é: ', sum)
console.log(expression + ': ', expressionResult)