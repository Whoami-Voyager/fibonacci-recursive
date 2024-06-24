function fibonacci(n) {
  if (2 > n) {
    return n
  }

  console.log(n)

  return fibonacci(n - 1) + fibonacci(n - 2)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function intakes number and checks if it is less than 2, and if it is then returns that number
// otherwise, it stores the last two numbers and recalls the function until it hits the inputted number
