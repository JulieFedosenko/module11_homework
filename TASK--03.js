function addNumber(num1) {
    return function(num2) {
      return num1 + num2;
    }
  }
  // Вариант--1
  //const sum = addNumber(5)(10);
  //console.log(sum); // 15


  //Вариант--2
  console.log(addNumber(5)(10)); // 15