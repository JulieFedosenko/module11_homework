function printNumbers(start, end) {
    let current = start;
    const interval = setInterval(function() {
      console.log(current)
      if (current === end) {
        clearInterval(interval);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 15);