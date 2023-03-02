function fibonacci(n) {
  let a = 0, b = 1;
  while (b <= n) {
    if (b === n) {
      return true;
    }
    const temp = a + b;
    a = b;
    b = temp;
  }
  return false;
}

const numeroInformado = parseInt(prompt("Digite um número:"));
const pertenceFibonacci = fibonacci(numeroInformado);

if (pertenceFibonacci) {
  alert(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  alert(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
