"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let rootEquationFirst;
  let rootEquationSecond;
  let d = Math.pow(b, 2)-(4*a*c);
  if (d < 0) {
    console.log('Корней нет');
  } else if (d === 0) {
  rootEquationFirst = -b/(2*a);
  arr.push(rootEquationFirst);
  console.log(arr);
  } else if (d > 0) {
  rootEquationFirst = (-b + Math.sqrt(d) )/(2*a);
  rootEquationSecond = (-b - Math.sqrt(d) )/(2*a);
  arr.push(rootEquationFirst);
  arr.push(rootEquationSecond);
  console.log(`Первый корень = ${arr[0]} \nВторой корень = ${arr[1]}`);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    is
  )
}