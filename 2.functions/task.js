// Задание 1
"use strict"
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
let sum =0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
     max = arr[i];
     }
  if (arr[i] < min) {
    min = arr[i];
   }  
   sum = sum + arr[i];
 } 
}

function differenceMaxMinWorker(...arr) {
let arr = [];
let min = arr[0], max = arr[0];
 for(let i of arr) 
 if(min > i) min = i;
 if(max < i) max = i;
}
return (max-min);

function differenceEvenOddWorker(...arr) {
  let sumEvenElement =0;
  let sumOddElement =0;
  for (let i = 0; i < arr.length; i++) {
     if(i % 2 === 0){
      console.log(sumEvenElement=sumEvenElement + 1);
      if(i % 2 !== 0){
      console.log(sumOddElement=sumOddElement + 1);
      }
     }
  }
}
return (sumEvenElement-sumOddElement);

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

}

function makeWork (arrOfArr, func) {
maxWorkerResult = -Infinity;
for (let i = 0; i < arr.length; i++) {
  const resultFunc  = func(...arrOfArr[i]);
  if (resultFunc > maxWorkerResult) {
maxWorkerResult = resultFunc;
  }
}
return maxWorkerResult;
}
