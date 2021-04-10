

const functionOne = function (number1, number2) {
    const squareNumberOne = number1 * number1;
    const squareNumberTwo = number2 * number2;
    const sumSquare = squareNumberOne + squareNumberTwo;
    const sumSquared = sumSquare * sumSquare;
    return sumSquared;
};

console.log(functionOne(1, 2))

function functionTwo(number1, number2) {
    const squareNumberOne1 = number1 * number1;
    const squareNumberTwo1 = number2 * number2;
    const sumSquare1 = squareNumberOne1 + squareNumberTwo1;
    const sumSquared1 = sumSquare1 * sumSquare1;
    return sumSquared1;
}
console.log(functionTwo(1, 2))

const functionThree = (number1, number2) => {
    const number3 = (((number1 * number1) + (number2 * number2)));
    return number3 * number3;
};

console.log(functionThree(1, 2))
