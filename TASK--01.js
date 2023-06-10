
// Вариант--1
function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log("Количество четных элементов: " + evenCount);
  console.log("Количество нечетных элементов: " + oddCount);
  console.log("Количество нулевых элементов: " + zeroCount);
}
let myArr = [1, 2, "3", null, undefined, 0, "5", 6, 7, "eight"];
countEvenOdd(myArr);

// Вариант--2
function countEvenOdd1(arr1) {
  let evenCount1 = 0;
  let oddCount1 = 0;
  let zeroCount1 = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "number") {
      if (arr1[i] === 0) {
        zeroCount1++;
      } else if (arr1[i] % 2 === 0) {
        evenCount1++;
      } else {
        oddCount1++;
      }
    }
  }

  console.log("Количество четных элементов: " + evenCount1);
  console.log("Количество нечетных элементов: " + oddCount1);
  console.log("Количество нулевых элементов: " + zeroCount1);
}

countEvenOdd1([1, 2, "3", null, undefined, 0, "5", 6, 7, "eight"]);
