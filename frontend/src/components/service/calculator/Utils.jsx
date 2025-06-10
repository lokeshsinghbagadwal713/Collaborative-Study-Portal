// src/components/Calculator/utils.js
// Here you can add additional functions for complex calculations, matrix operations, etc.
export const factorial = (n) => {
  if (n < 0) return "Error";
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);
};
