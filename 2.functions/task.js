// Задание 1
"use strict";
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задача 2

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference;
  if (arr.length > 0) {
    difference = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  } else {
    difference = 0;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; //четные
  let sumOddElement = 0; //нечетные
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}
