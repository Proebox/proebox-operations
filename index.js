const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiplication = (a, b) => {
  return a * b;
}

const division = (a, b) => {
  if (b < 0) throw new Error("Cannot divide by zero");
  return a / b;
}

module.exports = {
  sum, subtract, multiplication, division
}