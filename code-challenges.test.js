// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibFunction", () => {
  it(`Takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.`, () => {
    const fibLength1 = 6;
    const fibLength2 = 10;

    expect(fibFunction(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibFunction(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    expect(fibFunction(0)).toEqual(
      "Please enter a number that's at least 2, or higher."
    );
  });
});

// GOOD FAIL: fibfunction is not defined

// b) Create the function that makes the test pass.
/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in a number and return an array of numbers in the fibonacci sequence that matches the length of the number.
Function Name: fibFunction
Function Parameter(s): 1, number
--------- INPUT / OUTPUT:
input 1: number
output 1: array of numbers in fibonacci sequence
--------- STEPS/METHODS:
1. I'll declare an array to store the first two values of the fibonacci sequence, as well as an array with [1] to start us off.
2. I'll use a conditional statement to ensure the number being entered is greater than 2. If it isn't, I'll return a string notifying that the number needs to be at least 2 or higher.
3. I'll use a for loop to iterate through the fibonacci sequence, and return the corresponding output to an array of the specified length.
4. Return the resulting array.
*/

// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.

const fibFunction = (n) => {
  // The first two terms in the fibonacci sequence are 0 and 1, so I'm creating an array to store those values.
  let fib = [0, 1];
  // Starting the array that the sequence will be stored in with a 1.
  let newFib = [1];

  if (n > 0) {
    // Looping to populate an array that will be the length of the specified input.

    for (let i = 2; i <= n; i++) {
      // Current index = (index - 2) + (index -1)
      // Starts at index 2, so this will start iterating with 0 + 1, then 1 + 1, 2 + 1, etc.
      fib[i] = fib[i - 2] + fib[i - 1];
      // Push the added total to the current index of newFib.
      newFib.push(fib[i]);
    }
    // Return the total populated array.
    return newFib;
  } else if (n < 2) {
    // If number entered is less than 2, return this string:
    return "Please enter a number that's at least 2, or higher.";
  } else {
    // Edge case, because you never know. (:
    return "Oops! Something went wrong.";
  }
};

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("objSort", () => {
  it(`Takes in an object and returns an array of the numbers sorted from least to greatest.`, () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };

    expect(objSort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(objSort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});

// GOOD FAIL: ReferenceError: objSort is not defined

// b) Create the function that makes the test pass.

/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will accept a parameter of an object, and returns an array of the numbers sorted from least to greatest.
Function Name: objSort
Function Parameter(s): 1, object w/number values
--------- INPUT / OUTPUT:
input 1: object w/number values
output 1: array w/number values sorted from least to greatest.

--------- STEPS/METHODS:
1. Declare a temporary variable (newArr), which we will be passing the values from our object into.
2. Use the method Object.values() to obtain all values from the object being passed in.
3. Use the .sort method with an argument of ((a, b) => a - b) in order to sort the items in the array from least to greatest.
4. Return newArr.
*/

const objSort = (object) => {
  // Filling the empty arr with the values of object, then sorting them.
  newArr = Object.values(object).sort((a, b) => a - b);
  // Returning the sorted array.
  return newArr;
};

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arrSummation", () => {
  it(`Takes in an array and returns an array of the accumulating sum.`, () => {
    const accountTransactions1 = [100, -17, -23, -9];
    const accountTransactions2 = [250, -89, 100, -96];
    const accountTransactions3 = [];

    expect(arrSummation(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(arrSummation(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(arrSummation(accountTransactions3)).toEqual([]);
  });
});

// GOOD FAIL: arrSummation is not defined

// b) Create the function that makes the test pass.
/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an array and return an array of the accumulating sum.
Function Name: arrSummation
Function Parameter(s): 1, array of numbers
--------- INPUT / OUTPUT:
input 1: arr of numbers
output 1: arr of same length, with each element returning the sum of adding it to the previous element.

input 2: empty array
output 2: []
--------- STEPS/METHODS:
1. Declare a variable to hold our starting number, which will be set to 0.
2. Use the ternary operator to check if the array.length is greater than 0, so that it will return an empty array if the one passed in has no value.
3. Since I want to do something to EVERY element in the array AND return an array of the same length, I'll use .map() to iterate.
4. Add the value of the current iteration to the value stored in the temporary variable, reset the value of the temporary variable with the current value, then return the value to the array.
*/

// ----- VISUAL BREAKDOWN -----
// Expect: [100, 83, 60, 51]
// 0. 100
// 1. 100 - 17 = 83
// 2. 83 - 23 = 60
// 3. 60 - 9 = 51

const arrSummation = (arr) => {
  // Setting the starting value of our temporary variable to 0. This will be updated as .map() runs and stores the result of adding the value to it.
  let theAccumulator = 0;

  // If the array is empty, return an empty array.
  return arr.length === 0
    ? []
    : arr.map((v) => {
        // Setting the current value to: (value) + (the value stored in theAccumulator)
        v = v + theAccumulator;
        // Setting theAccumulator to store the current value so it can be used in the next iteration.
        theAccumulator = v;
        // Returning the value to the array.
        return v;
      });
};
