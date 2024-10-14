const StringCalculator = require('./StringCalculator');  // Adjust path if necessary

describe('StringCalculator', () => {
    let calculator;

    // Before each test, initialize a new instance of the calculator.
    beforeEach(() => {
        calculator = new StringCalculator();
    });

    // Test case for empty string input.
    test('empty string returns 0', () => {
        expect(calculator.add("")).toBe(0);
    });

    // Test case for a single number in the input string.
    test('single number returns the number', () => {
        expect(calculator.add("1")).toBe(1);
    });

    // Test case for two numbers separated by a comma.
    test('two numbers separated by comma returns their sum', () => {
        expect(calculator.add("1,5")).toBe(6);
    });

    // Test case for multiple numbers separated by commas.
    test('multiple numbers separated by comma returns their sum', () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

});
