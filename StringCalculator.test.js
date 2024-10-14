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

    // Test case for numbers separated by a newline and comma.
    test('numbers separated by new lines and commas return their sum', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    // Test case for custom delimiter support.
    test('supports custom delimiters', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    // Test case for handling negative numbers and throwing exceptions.
    test('negative numbers throw an exception', () => {
        expect(() => calculator.add("1,-2,3,-5")).toThrow("Negative numbers not allowed: -2, -5");
    });

});
