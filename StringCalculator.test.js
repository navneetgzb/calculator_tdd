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
});
