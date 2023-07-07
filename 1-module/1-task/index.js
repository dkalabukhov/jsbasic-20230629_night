function factorial(n) {

  if (n === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }

  return result;
}
