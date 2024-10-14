# calculator_tdd
calculator_tdd

Create a simple String calculator with a method signature like this:

int add(string numbers)

    Input: a string of comma-separated numbers
    Output: an integer, sum of the numbers

Examples:

    Input: “”, Output: 0
    Input: “1”, Output: 1
    Input: “1,5”, Output: 6

Run:
   npm test

output:
     StringCalculator
        √ empty string returns 0 (2 ms)
        √ single number returns the number
        √ two numbers separated by comma returns their sum
        √ multiple numbers separated by comma returns their sum
        √ numbers separated by new lines and commas return their sum
        √ supports custom delimiters (1 ms)
        √ negative numbers throw an exception (7 ms)
    
    Test Suites: 1 passed, 1 total
    Tests:       7 passed, 7 total
    Snapshots:   0 total
    Time:        0.289 s, estimated 1 s
    Ran all test suites.
