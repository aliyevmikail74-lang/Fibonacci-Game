function fibonacciGenerator(n) {

  var output = [];

  if (n === 1) {
    return [0];
  } 
  else if (n === 2) {
    return [0, 1];
  } 
  else {

    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1]);
    }

  }

  return output;
}

function generate() {
  var n = document.getElementById("numberInput").value;

  if (n <= 0) {
    document.getElementById("result").innerText = "Введите корректное число";
    return;
  }

  var result = fibonacciGenerator(Number(n));
  document.getElementById("result").innerText = result.join(", ");
}