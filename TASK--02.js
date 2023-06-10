function isPrimeNumber(num) {
    if (num > 1000) {
      console.log("Данные неверны");
      return;
    }
    if (num === 0 || num === 1) {
      console.log("Не является простым числом");
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log("Не является простым числом");
        return;
      }
    }
    console.log("Простое число");
    return;
  }
  isPrimeNumber(2)