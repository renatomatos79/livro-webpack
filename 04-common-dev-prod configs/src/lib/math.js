const mathjs = require('mathjs')

function sum(a, b) {
    return a + b;
}

function evaluate(expression) {
    return mathjs.evaluate(expression)
}

module.exports = {
    sum, evaluate
};